import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  padding: 40px 24px 40px 100px;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 40px 12px 40px 72px;
  }
`;

const ImageBackground = styled.img`
  position: fixed;
  top: -95px;
  right: -113px;
  z-index: -1;
  height: 300px;
  width: auto;
  filter: opacity(0.5);
`;

const Logo = styled.img`
  width: auto;
  height: 100px;
  margin: 0px 0px 32px;

  @media only screen and (max-width: 768px) {
    height: 72px;
  }
`;

export { Container, ImageBackground, Logo };
