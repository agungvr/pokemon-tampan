import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Menu, Icon } from "./style";

const Sidebar = () => {
  const history = useHistory();
  const { pathname } = history.location;

  const onNavigate = id => () => {
    history.push(id);
  };

  return (
    <Container>
      <Menu onClick={onNavigate("/")} isActive={pathname === "/"}>
        <Icon
          alt="pokemon-tampan"
          src={require("../../assets/images/ic_pokedex.png")}
        />
      </Menu>
      <Menu
        onClick={onNavigate("/my-pokemon")}
        isActive={pathname === "/my-pokemon"}
      >
        <Icon
          alt="pokemon-tampan"
          src={require("../../assets/images/ic_pokeball.png")}
        />
      </Menu>
    </Container>
  );
};

export default Sidebar;
