import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authApiSlice from "../Redux/apiSlice";
import authSlice from "../Redux/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApiSlice.middleware),
});
setupListeners(store.dispatch);

export default store;
