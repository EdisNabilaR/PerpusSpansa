import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Books from "./pages/Books";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;