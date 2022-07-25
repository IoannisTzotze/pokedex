import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import home from "../assets/home.png";

import "./PokePage.css";

const PokePage = () => {
  const { pokemonName } = useParams();
  const [image, setImage] = useState();
  const [pokemon, setPokemon] = useState({
    name: "test",
    height: "test",
    weight: "test",
    types: [{ type: "test" }, { type: "test" }],
    image: null,
    abilities: [{ ability: "test" }, { ability: "test" }],
    stats: [{ stat: "test" }, { stat: "test" }],
  });
  const axios = require("axios");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        setPokemon({
          name: res.data.name,
          height: res.data.height,
          weight: res.data.weight,
          types: res.data.types,
          image: res.data.sprites.front_default,
          abilities: res.data.abilities,
          stats: res.data.stats,
        });
        setImage(res.data.sprites.front_default);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (pokemon === null || image === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="poke-page">
        <Link to="/">
          <img src={home} className="home" />
        </Link>
        <header className="page_header">
          <div className="card_header">
            <h1 className="title">{pokemon.name}</h1>
            <img className="image" src={image} alt={pokemon.name} />
            <div className="type">
              {pokemon.types.map((type) => (
                <p className="type_item" key={type.type.name}>
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>
          <div className="lower_header">
            <div className="body_specs">
              <h3 className="title">Body</h3>
              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}</p>
            </div>
            <div className="ability_specs">
              <h3 className="title">Abilities:</h3>
              {pokemon.abilities.map((ability) => (
                <p key={ability.ability.name}>{ability.ability.name}</p>
              ))}
            </div>

            <div className="stats_specs">
              <h3 className="title">Stats</h3>
              {pokemon.stats.map((stat) => (
                <p key={stat.stat.name}>
                  {stat.stat.name} : {stat.base_stat}
                </p>
              ))}
            </div>
          </div>
        </header>
      </div>
    );
  }
};

export default PokePage;
