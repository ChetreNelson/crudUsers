import React from "react";
import { Routes, Route } from "react-router-dom";

import Read from "../pages/crudAPI/Read";
import Create from "../pages/crudAPI/Create";
import Update from "../pages/crudAPI/Update";
import CrudsHome from "../pages/crudAPI/CrudsHome";

const CrudApiRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/crudhome" element={<CrudsHome />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read/:id" element={<Read />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
};

export default CrudApiRoute;
