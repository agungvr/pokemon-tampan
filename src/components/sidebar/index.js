import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Menu, Icon } from "./style";
import ImgPokedex from "../../assets/images/ic_pokedex.png";
import ImgPokeball from "../../assets/images/ic_pokeball.png";

const Sidebar = () => {
  const history = useHistory();
  const { pathname } = history.location;

  const onNavigate = (id) => () => {
    history.push(id);
  };

  return (
    <Container>
      <Menu onClick={onNavigate("/")} isActive={pathname === "/"}>
        <Icon alt="pokemon-tampan" src={ImgPokedex} />
      </Menu>
      <Menu
        onClick={onNavigate("/my-pokemon")}
        isActive={pathname === "/my-pokemon"}
      >
        <Icon alt="pokemon-tampan" src={ImgPokeball} />
      </Menu>
    </Container>
  );
};

export default Sidebar;
