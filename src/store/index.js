import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from './goodsSlice';

export default configureStore({
  reducer: {
    storeState: goodsReducer,
  },
});
//
