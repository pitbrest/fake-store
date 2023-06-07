import { createSlice } from '@reduxjs/toolkit';

const goodsSliace = createSlice({
  name: 'goods',
  initialState: {
    goods: [],
    shoppingСart: [],
  },
  reducers: {
    getGoods(state, action) {},
    addItemToCart(state, action) {},
    removeItemFromCart(state, action) {},
    cartItemCountHandler(state, action) {},
  },
});
