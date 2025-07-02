import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//  Interface for a Book
export interface Book {
  _id?: string; 
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available?: boolean; 
}

//  Interface for Borrow Summary item
export interface BorrowSummaryItem {
  title: string;
  isbn: string;
  totalQuantity: number;
}

//  Interface for Borrow Book response
export interface BorrowResponse {
  message: string;
  borrow: {
    _id: string;
    bookId: string;
    quantity: number;
    dueDate: string;
  };
}

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  tagTypes: ["Book"],
  endpoints: (builder) => ({
    //  GET all books
    getBooks: builder.query<Book[], void>({
      query: () => "books",
      providesTags: ["Book"],
    }),

    //  GET single book by ID
    getBookById: builder.query<Book, string>({
      query: (id) => `books/${id}`,
      providesTags: ["Book"],
    }),

    //  CREATE book
    createBook: builder.mutation<Book, Partial<Book>>({
      query: (book) => ({
        url: "books",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["Book"],
    }),

    //  UPDATE book
    updateBook: builder.mutation<Book, { id: string } & Partial<Book>>({
      query: ({ id, ...body }) => ({
        url: `books/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Book"],
    }),

    //  BORROW book
    borrowBook: builder.mutation<BorrowResponse, { bookId: string; quantity: number; dueDate: string }>({
      query: ({ bookId, ...body }) => ({
        url: `borrow/${bookId}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Book"],
    }),

    //  GET borrow summary
    getBorrowSummary: builder.query<BorrowSummaryItem[], void>({
      query: () => "borrow/summary",
    }),
  }),
});


export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useGetBookByIdQuery,
  useUpdateBookMutation,
  useBorrowBookMutation,
  useGetBorrowSummaryQuery,
} = bookApi;
