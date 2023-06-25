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
    shoppingСart: localStorage.userCart
      ? JSON.parse(localStorage.userCart)
      : [],
  },
  reducers: {
    // getGoods(state, action) {},
    saveUserCartData(state) {
      const newUserCartData = JSON.stringify(state.shoppingСart);
      localStorage.userCart = newUserCartData;
    },
    addItemToCart(state, action) {
      const currentItemId = action.payload.item.id;
      const cartChecking = state.shoppingСart.filter(
        (item) => item.id === currentItemId,
      ).length;

      if (!cartChecking) {
        state.shoppingСart.push({ ...action.payload.item, count: 1 });
      }
    },
    removeItemFromCart(state, action) {
      const currentItemId = action.payload.item.id;
      state.shoppingСart = [
        ...state.shoppingСart.filter((item) => item.id !== currentItemId),
      ];
    },
    cartItemCountHandler(state, action) {
      const currentItemId = action.payload.item.id;
      if (action.payload.action === 'dec') {
        state.shoppingСart = [
          ...state.shoppingСart.map((item) =>
            item.id === currentItemId
              ? {
                  ...item,
                  count: item.count - 1 === 0 ? item.count : item.count - 1,
                }
              : { ...item },
          ),
        ];
      }
      if (action.payload.action === 'inc') {
        state.shoppingСart = [
          ...state.shoppingСart.map((item) =>
            item.id === currentItemId
              ? {
                  ...item,
                  count: item.count + 1,
                }
              : { ...item },
          ),
        ];
      }
    },
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

export const {
  saveUserCartData,
  addItemToCart,
  removeItemFromCart,
  cartItemCountHandler,
} = goodsSlice.actions;

export default goodsSlice.reducer;
