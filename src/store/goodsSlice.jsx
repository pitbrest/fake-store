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
      state.shoppingСart.push(action.payload.item);
      const currentItemId = action.payload.item.id;

      if (!localStorage.userCart) {
        localStorage.userCart = JSON.stringify([
          { id: currentItemId, count: 1 },
        ]);
      } else {
        const localStorCartData = JSON.parse(localStorage.userCart);
        localStorCartData.push({ id: currentItemId, count: 1 });
        localStorage.userCart = JSON.stringify(localStorCartData);
        // localStorCartData.push({ id: currentItemId, count: 1 });
        console.log(localStorCartData);

        // const checkingStatus = localStorCartData.filter(
        //   (item) => item.id === currentItemId,
        // ).length;
        // if (!checkingStatus) {
        //   localStorCartData.push({ id: currentItemId, count: 1 });
        //   console.log(localStorCartData);
        // }
        // localStorage.userCart = !checkingStatus
        //   ? JSON.stringify(
        //       localStorCartData.push({ id: currentItemId, count: 1 }),
        //     )
        //   : JSON.stringify(localStorCartData);
      }
      console.log(localStorage.userCart);
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
