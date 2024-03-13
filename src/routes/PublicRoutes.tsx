import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function PublicRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
