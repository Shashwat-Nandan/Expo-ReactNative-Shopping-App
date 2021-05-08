import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          name: newItem.name,
          brand: newItem.brand,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
      }
      state.totalAmount = state.items.reduce((sum, item) => {
        return sum + item.quantity * item.price;
      }, 0);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      // state.totalQuantity--;
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
      state.totalAmount = state.items.reduce((sum, item) => {
        return sum + item.quantity * item.price;
      }, 0);
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity++;
      if (existingItem) {
        existingItem.quantity++;
      }
      state.totalAmount = state.items.reduce((sum, item) => {
        return sum + item.quantity * item.price;
      }, 0);
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
      state.totalAmount = state.items.reduce((sum, item) => {
        return sum + item.quantity * item.price;
      }, 0);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
