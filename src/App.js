import React from "react";
import { Route, Routes } from "react-router-dom";
import { PokeList, PokePage } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PokeList />} />
      <Route path="/:pokemonName" element={<PokePage />} />
    </Routes>
  );
};

export default App;
