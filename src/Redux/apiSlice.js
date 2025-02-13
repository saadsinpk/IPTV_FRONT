import { createApi } from "@reduxjs/toolkit/query/react";
import { BaseQuery } from "./baseQuery";

const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: BaseQuery,
  endpoints: (builder) => ({
    addLogin: builder.mutation({
      query: (newData) => ({
        url: "/admin/login",
        method: "POST",
        body: newData,
      }),
    }),

    // Staff

    getStaff: builder.query({
      query: ({ currentPage, limit, search }) => ({
        url: `/getStaff?page=${currentPage}&limit=${limit || 10}&search=${
          search || ""
        }`,
        method: "GET",
      }),
    }),
    addStaff: builder.mutation({
      query: (data) => ({
        url: `/addStaff`,
        method: "POST",
        body: data,
      }),
    }),
    deleteStaff: builder.mutation({
      query: (id) => ({
        url: `/deleteStaff/${id}`,
        method: "DELETE",
      }),
    }),
    updateStaff: builder.mutation({
      query: ({ id, data }) => ({
        url: `/updateStaff/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    // Audit Logs
  }),
});

export const {
  useAddLoginMutation,

  useGetStaffQuery,
  useAddStaffMutation,
  useDeleteStaffMutation,
  useUpdateStaffMutation,
} = authApiSlice;

export default authApiSlice;
