import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, MeuPlano } from "./pages";

export default function Layout() {
  return (
    <>
      <header>Meu header</header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meu-plano" element={<MeuPlano />} />
        </Routes>
      </BrowserRouter>
      <footer>Meu Footer</footer>
    </>
  );
}
