import React from "react";
import { Spinner, Container } from "./style";
import ImgLogo from "../../assets/images/logo.png";
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
        src={ImgLogo}
        width="340px"
        height="auto"
        style={{ margin: "20vh 0px" }}
      />
    </Container>
  );
};
