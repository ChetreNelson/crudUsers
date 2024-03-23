import { Routes, Route } from "react-router-dom";
import CrudsHome from "./crudAPI/CrudsHome";
import Create from "./crudAPI/Create";
import Read from "./crudAPI/Read";
import Update from "./crudAPI/Update";
function App() {
  return (
    <>
      <Routes>
        {/* for homepage */}
        <Route path="/" element={<CrudsHome />} />

        {/* for other pages */}

        <Route path="/create" element={<Create />} />
        <Route path="/read/:id" element={<Read />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
