import styled from "styled-components";

const Container = styled.div`
  width: 76px;
  height: 100vh;
  position: fixed;
  background: #fdfdfd;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.16);
  z-index: 4;

  @media only screen and (max-width: 768px) {
    width: 56px;
  }
`;

const Icon = styled.img`
  width: auto;
  height: 40px;
  border: 1px solid white;
  border-radius: 100%;
`;

const Menu = styled.div`
  cursor: pointer;
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ isActive }) => (isActive ? "#6a7c95" : "white")};
  padding: 0px 8px;
`;

export { Container, Icon, Menu };
