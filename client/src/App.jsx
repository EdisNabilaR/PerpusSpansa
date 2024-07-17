import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Homepage from "./pages/homepage";
import Dashboard from "./pages/dashboard";
import Dataperpus from "./pages/libdata";
import Book from "./pages/book";
import Formbook from "./pages/formbook";
import Updatebook from "./pages/updatebook";
import FormMember from "./pages/formmember";
import Member from "./pages/member";
import UpdateMember from "./pages/updatemember";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/data-anggota" element={<FormMember />} />
          <Route path="/libdata" element={<Dataperpus />} />
          <Route path="/book" element={<Book />} />
          <Route path="/member" element={<Member />} />
          <Route path="/create-book" element={<Formbook />} />
          <Route path="/updatebook/:id" element={<Updatebook />} />
          <Route path="/updatemember/:id" element={<UpdateMember />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;