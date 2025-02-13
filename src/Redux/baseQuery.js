import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { selectToken } from "./auth/authSlice";

// const BASE_URL = "https://backend.dashcore.eu";
const BASE_URL = "http://192.168.18.200:3000";
// const BASE_URL = "https://backend.zwa-nga.com"

export const BaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = selectToken(getState());
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
