"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hydrateCart } from "@/lib/features/cart/cartSlice";

export const CartHydration = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Load cart data from localStorage
    const loadCartData = () => {
      try {
        const serializedCart = localStorage.getItem("cart");
        if (serializedCart) {
          const cartData = JSON.parse(serializedCart);
          dispatch(hydrateCart(cartData));
        }
      } catch (err) {
        console.error("Error loading cart data:", err);
      }
    };

    loadCartData();
  }, [dispatch]);

  return null;
};
