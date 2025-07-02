import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
    tagTypes: ['Book'],
    endpoints: (builder) => ({

        getBookById: builder.query({
            query: (id) => `books/${id}`,
            providesTags: ['Book'],
        }),
        updateBook: builder.mutation({
            query: ({ id, ...body }) => ({
                url: `books/${id}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Book'],
        }),


        getBooks: builder.query<any[], void>({
            query: () => 'books',
            providesTags: ['Book'],
        }),
        createBook: builder.mutation({
            query: (book) => ({
                url: 'books',
                method: 'POST',
                body: book,
            }),
            invalidatesTags: ['Book']
        }),

        borrowBook: builder.mutation({
            query: ({ bookId, ...body }) => ({
                url: `borrow/${bookId}`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Book'],
        }),

        getBorrowSummary: builder.query({
            query: () => 'borrow/summary',
        }),
    }),

});

export const { useGetBooksQuery, useCreateBookMutation, useGetBookByIdQuery,
    useUpdateBookMutation, useBorrowBookMutation, useGetBorrowSummaryQuery} = bookApi;