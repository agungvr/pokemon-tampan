import React from "react";
import Pokemon from "../../components/pokemon-card";
import { useAppContext } from "../../context/app-state";

const MyPokemon = () => {
  const {
    state: { myPokemon }
  } = useAppContext();
  if (!myPokemon.length) {
    return (
      <div
        style={{
          width: "100%",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h2>Data not found</h2>
      </div>
    );
  }

  return (
    <>
      <div style={{ margin: "4px 0px 24px" }}>
        <span>My Pokemon Total : {myPokemon.length}</span>
      </div>
      <Pokemon data={myPokemon} remove />
    </>
  );
};

export default MyPokemon;
