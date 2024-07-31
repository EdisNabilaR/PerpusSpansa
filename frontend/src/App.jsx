<<<<<<< HEAD
// src/App.jsx
=======
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
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
<<<<<<< HEAD
import Register from "./pages/Register";
import InformationPage from "./components/InformationPage";
import BookPage from "./components/BookPage";
import Profilepg from "./pages/ProfilePg";
=======



>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
<<<<<<< HEAD
          <Route path="/register" element={<Register />} />
=======
          {/* <Route path="/register" element={<Register />} /> */}
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
<<<<<<< HEAD
          <Route path="/profile" element={<Profilepg />} />
          <Route path="/information" element={<InformationPage />} />
          <Route path="/book" element={<BookPage />} />
=======
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
        </Routes>
      </BrowserRouter>
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
