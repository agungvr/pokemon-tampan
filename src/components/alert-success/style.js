import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  text-align: center;
  font-size: large;
  font-weight: 600;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  letter-spacing: 0.3px;
`;

const Button = styled.button`
  width: fit-content;
  background: ${({ disabled }) => (disabled ? "lightgray" : "#03a9f4")};
  border: 1px solid white;
  border-radius: 24px;
  padding: 8px 32px;
  font-size: medium;
  cursor: pointer;
  color: #ffffff;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.16);
  margin: 24px 0px 0px;
`;

const Image = styled.img`
  width: auto;
  height: 150px;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 24px;
  padding: 4px 24px;
  height: 40px;
  margin: 24px 24px 0px;
  font-size: 12px;
  border: null;
  :focus {
    border: ${({ value }) =>
      value === "" ? "1px solid #e91e63" : "1px solid #03a9f4"};
  }
`;

const Title = styled.h2`
  color: #ff6297;
  font-size: xx-large;
`;

const ErrorMessage = styled.span`
  font-size: 14px;
  color: #e91e63;
  margin: 8px 0px 0px;
  font-family: "Linotte-Light";
  letter-spacing: 1px;
`;

export { Container, Content, Button, Image, Input, Title, ErrorMessage };
