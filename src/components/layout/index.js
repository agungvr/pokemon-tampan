import React from "react";
import Sidebar from "../sidebar";
import { Container, ImageBackground, Logo } from "./style";
import BgPokeball from "../../assets/images/bg_pokeball.jpeg";
import ImgLogo from "../../assets/images/logo.png";

const MainLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Container>
        <ImageBackground alt="pokemon-tampan" src={BgPokeball} />
        <Logo alt="pokemon-tampan" src={ImgLogo} />
        {children}
      </Container>
    </>
  );
};

export default MainLayout;
