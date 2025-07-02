import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "../pages/Books";
import AddBook from "../pages/AddBook";
import EditBook from "../pages/EditBook";
import BorrowBook from "../pages/BorrowBook";
import BorrowSummary from "../pages/BorrowSummary";


export default function AppRouter(){

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/books" element={<Books/>}/>
            <Route path="/create-book" element={<AddBook/>} />
            <Route path="/edit-book/:id" element={<EditBook />} />
            <Route path="/borrow/:bookId" element={<BorrowBook />} />
            <Route path="/borrow-summary" element={<BorrowSummary />} />
        </Routes>
        </BrowserRouter>
    )
}