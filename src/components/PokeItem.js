import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PokeItem.css";

const PokeItem = (props) => {
  const [poke, setPoke] = useState();
  const [image, setImage] = useState();
  const axios = require("axios");
  useEffect(() => {
    axios
      .get(props.url)
      .then((res) => {
        setPoke(res.data);
        setImage(res.data.sprites.front_default);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (image === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <Link to={`/${props.name}`} className="poke-item">
        <img src={image} alt={props.name} />
        <h3>{props.name}</h3>
      </Link>
    );
  }
};

export default PokeItem;
