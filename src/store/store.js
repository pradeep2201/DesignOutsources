// Store file- Redux config has to be placed here...
import { configureStore } from "@reduxjs/toolkit";
import pageReducer from './slice/pageSlice';

const store = configureStore({
  reducer: {
    page: pageReducer,
  },
});

export default store;
