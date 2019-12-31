import React from "react";
import { Spinner, Container } from "./style";

export const Loader1 = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export const Loader2 = () => {
  return (
    <Container>
      <img
        alt="pokemon-tampan"
        src={require("../../assets/images/logo.png")}
        width="340px"
        height="auto"
        style={{ margin: "20vh 0px" }}
        alt="Loading..."
      />
    </Container>
  );
};
