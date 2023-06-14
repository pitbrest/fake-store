import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getGoods = createAsyncThunk(
  'storeState/getGoods',
  async function (category) {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`,
    );
    const data = await response.json();
    return data;
  },
);

const goodsSlice = createSlice({
  name: 'storeState',
  initialState: {
    goods: [],
    categories: [
      'electronics',
      'jewelery',
      "men's clothing",
      "women's clothing",
    ],
    status: null,
    error: null,
    shoppingСart: [],
  },
  reducers: {
    // getGoods(state, action) {},
    addItemToCart() {},
    removeItemFromCart() {},
    cartItemCountHandler() {},
  },
  extraReducers: {
    [getGoods.pending]: (state) => {
      state.status = 'pendidng';
      state.error = null;
    },
    [getGoods.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.goods = action.payload;
    },
    [getGoods.rejected]: (state, action) => {},
  },
});

export const { addItemToCart, removeItemFromCart, cartItemCountHandler } =
  goodsSlice.actions;

export default goodsSlice.reducer;
