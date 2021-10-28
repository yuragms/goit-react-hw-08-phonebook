// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61745d7708834f0017c70956.mockapi.io/api/v1/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: names => `/contacts`,
      providesTags: ['Contacts'],
    }),
    deleteContacts: builder.mutation({
      query: contactsId => ({
        url: `/contacts/${contactsId}`,
        method: `DELETE`,
      }),
      invalidatesTags: ['Contacts'],
    }),
    createContacts: builder.mutation({
      query: body => ({
        url: '/contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useFetchContactsQuery,
  useDeleteContactsMutation,
  useCreateContactsMutation,
} = contactsApi;
