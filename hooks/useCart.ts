import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  CartItem,
} from "@/lib/features/cart/cartSlice";

export const useCart = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state: RootState) => state.cart);

  const addItem = (item: CartItem) => {
    dispatch(addToCart(item));
  };

  const removeItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const updateItemQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const emptyCart = () => {
    dispatch(clearCart());
  };

  return {
    items,
    total,
    addItem,
    removeItem,
    updateItemQuantity,
    emptyCart,
  };
};
