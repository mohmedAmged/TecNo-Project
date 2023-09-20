import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
  totalItems: 0,
  loadingCart: false
}

export const getCartData = createAsyncThunk('cart/getCartData', async (id) => {
  const res = await fetch('https://tecno-api.onrender.com/users/'+id);
  const data = await res.json();
  return data;
});

export const updateCartData = createAsyncThunk('cart/updateCartData', async (data) => {
  if(data.id) await fetch('https://tecno-api.onrender.com/users/'+data.id, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({cart: data.cart})
  });
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const obj = state.cart.find(item => item.id === action.payload.id);
      if(action.payload.quantity){
        if(obj){
          obj.quantity += action.payload.quantity;
        }else {
          state.cart.push({...action.payload});
        }
      } else {
        if(obj){
          obj.quantity ++;
        }else {
          state.cart.push({...action.payload, quantity: 1});
        }
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter(item => item.id != action.payload);
    },
    removeAll: (state) => {
      state.cart = [];
    },
    increaseQuantity: (state, action) => {
      const obj = state.cart.find(item => item.id === action.payload);
      obj.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const obj = state.cart.find(item => item.id === action.payload);
      if(obj.quantity > 1) obj.quantity--;
    },
    calcQuantities: (state) => {
      state.totalPrice = state.cart?.reduce((acc, item) => acc + item.quantity*item.price, 0);
      state.totalItems = state.cart?.reduce((acc, item) => acc + item.quantity, 0);
    }
  },
  extraReducers: {
    [getCartData.pending]: (state) => {
      state.loadingCart = true;
    },
    [getCartData.fulfilled]: (state, action) => {
      state.loadingCart = false;
      state.cart = action.payload.cart;
    }
  }
});

const cartReducer = cartSlice.reducer;

export const { addItem, removeItem, removeAll, increaseQuantity, decreaseQuantity, calcQuantities } = cartSlice.actions;
export default cartReducer;