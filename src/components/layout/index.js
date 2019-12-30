import React from "react";
import Sidebar from "../sidebar";
import { Container, ImageBackground, Logo } from "./style";

const MainLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Container>
        <ImageBackground
          alt="pokemon-tampan"
          src={require("../../assets/images/bg_pokeball.jpeg")}
        />
        <Logo
          alt="pokemon-tampan"
          src={require("../../assets/images/logo.png")}
        />
        {children}
      </Container>
    </>
  );
};

export default MainLayout;
