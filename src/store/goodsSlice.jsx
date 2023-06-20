import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getGoods = createAsyncThunk(
  'storeState/getGoods',
  async (category) => {
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
    addItemToCart(state, action) {
      const currentItemId = action.payload.item.id;
      const cartChecking = state.shoppingСart.filter(
        (item) => item.id === currentItemId,
      ).length;

      if (!cartChecking) {
        state.shoppingСart.push(action.payload.item);
      }

      // if (!localStorage.userCart) {
      //   localStorage.userCart = JSON.stringify([
      //     { id: currentItemId, count: 1 },
      //   ]);
      // } else {
      //   const localStorCartData = JSON.parse(localStorage.userCart);
      //   const checkingItem = localStorCartData.filter(
      //     (item) => item.id === currentItemId,
      //   ).length;
      //   if (!checkingItem) {
      //     localStorCartData.push({ id: currentItemId, count: 1 });
      //     localStorage.userCart = JSON.stringify(localStorCartData);
      //   }
      // }
    },
    removeItemFromCart() {},
    cartItemCountHandler() {},
  },
  extraReducers: {
    [getGoods.pending]: (state) => ({
      ...state,
      status: 'pending',
      state: null,
    }),
    [getGoods.fulfilled]: (state, action) => ({
      ...state,
      status: 'fulfilled',
      goods: action.payload,
    }),
    [getGoods.rejected]: () => {},
  },
});

export const { addItemToCart, removeItemFromCart, cartItemCountHandler } =
  goodsSlice.actions;

export default goodsSlice.reducer;
