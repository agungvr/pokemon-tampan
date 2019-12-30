import styled from "styled-components";

const Content = styled.div`
  width: 100%;
`;

const OverlayLayout = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: -16px;
  background: black;
  opacity: 0.7;
`;

const Remove = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: -16px;
  height: 100%;
`;

Remove.Button = styled.div`
  cursor: pointer;
  display: flex;
  background: #e91e63;
  color: white;
  padding: 4px 24px;
  border-radius: 24px;
  border: 1px solid;
`;

const Card = styled.div`
  cursor: ${({ remove }) => !remove && "pointer"};
  width: 100%;
  display: flex;
  flex-direction: column;
  background: lightgray;
  border-radius: 8px;
  padding: 16px;
  background-image: linear-gradient(
    to right,
    rgba(214, 255, 222, 0.9) 1%,
    rgba(229, 245, 255, 0.9) 98%
  );
  font-size: 16px;
  position: relative;
  min-height: 150px;
  overflow: hidden;
  background: ${({ owned }) => (owned ? null : "white")};
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.16);
`;

Card.Title = styled.span`
  font-size: medium;
  font-weight: 600;
  margin: 0px 0px 12px;
`;

Card.Label = styled.div`
  background: #8ea7f5;
  border-radius: 20px;
  padding: 4px 16px;
  width: fit-content;
  font-size: x-small;
  color: white;
  font-family: "Linotte-Light";
  margin: 0px 0px 8px;
`;

Card.ImageContainer = styled.div`
  background: #006eff1c;
  border-radius: 100%;
  height: 69px;
  width: 200px;
  position: absolute;
  bottom: 0px;
  right: -52px;
`;

Card.Image = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  bottom: -5px;
  right: 26px;
  filter: ${({ owned }) => (owned ? "unset" : "grayscale(1)")};
`;

Card.Info = styled.div`
  font-size: 12px;
  font-family: "Linotte-Light";
  position: absolute;
  bottom: 0;
  left: 0;
  background: #6a7c95;
  padding: 4px 20px;
  color: white;
  min-width: 110px;
  border-top-right-radius: 32px;
`;

export { Content, Card, OverlayLayout, Remove };
