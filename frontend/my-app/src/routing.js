import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./components/list";
import Create from "./components/create";
import Edit from "./components/edit";

export default function Routing() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    );  
};
