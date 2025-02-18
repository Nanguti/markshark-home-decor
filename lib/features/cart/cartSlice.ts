import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  total: number;
}

// Load initial state from localStorage
const loadCartState = (): CartState => {
  if (typeof window === "undefined") {
    return { items: [], total: 0 };
  }

  try {
    const serializedCart = localStorage.getItem("cart");
    if (serializedCart) {
      return JSON.parse(serializedCart);
    }
  } catch (err) {
    console.error("Error loading cart from localStorage:", err);
  }
  return { items: [], total: 0 };
};

// Save cart state to localStorage
export const saveCartState = (state: CartState) => {
  try {
    const serializedCart = JSON.stringify(state);
    localStorage.setItem("cart", serializedCart);
  } catch (err) {
    console.error("Error saving cart to localStorage:", err);
  }
};

const initialState: CartState = loadCartState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        state.items = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        state.items = [...state.items, { ...action.payload }];
      }

      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      // Save to localStorage
      saveCartState(state);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = [
        ...state.items.filter((item) => item.id !== action.payload),
      ];
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      // Save to localStorage
      saveCartState(state);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      // Save to localStorage
      saveCartState(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;

      // Save to localStorage
      saveCartState(state);
    },
    // New action to hydrate cart from localStorage
    hydrateCart: (state, action: PayloadAction<CartState>) => {
      state.items = action.payload.items;
      state.total = action.payload.total;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  hydrateCart,
} = cartSlice.actions;
export default cartSlice.reducer;
