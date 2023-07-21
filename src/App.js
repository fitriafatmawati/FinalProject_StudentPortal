import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import AddStudent from "./Routes/AddStudent";
import EditStudent from "./Routes/EditStudent";
import Student from "./Routes/Student";
import NotFound from "./Routes/NotFound";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<NavBar />}>
        <Route path="add" element={<AddStudent />} />
        <Route path="student">
          <Route index element={<Student />} />
          <Route path=":id" element={<EditStudent />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
