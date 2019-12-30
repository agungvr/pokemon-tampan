import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  text-align: center;
  font-size: large;
  font-weight: 600;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  letter-spacing: 0.3px;
`;

const Button = styled.button`
  width: fit-content;
  background: #e91e63;
  border: 1px solid white;
  border-radius: 24px;
  padding: 8px 24px;
  font-size: medium;
  cursor: pointer;
  color: #ffffff;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.16);
`;

const Image = styled.img`
  width: auto;
  height: 100px;
  margin: 24px 0px;
`;

export { Container, Content, Button, Image };
