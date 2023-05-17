import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  isMenuOpen: false,
  cart: [],
  items: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },
    removeFromCart: (state, action) => {
      //put only those items in cart whose id is not equal to the id we provide in the action payload
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (action.payload.id === item.id) {
          item.count++;
        }
        return item;
      });
    },
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (action.payload.id === item.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    setIsMenuOpen: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const {
  setIsCartOpen,
  setIsMenuOpen,
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
} = cartSlice.actions;

// will be imported as cartReducer in main.jsx
export default cartSlice.reducer;
