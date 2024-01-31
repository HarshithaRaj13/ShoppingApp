import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lstore from "./Lstore";
import Add from "./Add";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lstore />} />
          <Route path="/Add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Router;
