import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import SignUpModal from "./components/SignUpModal";
import Private from "./pages/private/Private";
import PrivateHome from "./pages/private/private-home/PrivateHome";

const App = () => {
  return (
    <>
      <SignUpModal />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<PrivateHome />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
