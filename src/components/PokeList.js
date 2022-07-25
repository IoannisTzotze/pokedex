import React, { useState, useEffect } from "react";
import PokeItem from "./PokeItem";
import "./PokeList.css";

const PokeList = () => {
  const [pokeList, setPokeList] = useState([]);
  const axios = require("axios");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => {
        setPokeList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="poke-list">
      {pokeList.map((poke) => (
        <PokeItem key={poke.name} name={poke.name} url={poke.url} />
      ))}
    </div>
  );
};

export default PokeList;
