import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
`;

const ContentContainer = styled.div`
  width: 100%;
  position: relative;
`;

const Header = styled.div`
  height: 230px;
  width: 100%;
  position: relative;
  background-image: linear-gradient(
    to right,
    rgba(214, 255, 222, 0.9) 1%,
    rgba(229, 245, 255, 0.9) 98%
  );
  display: flex;
  flex-direction: column;
`;

const Back = styled.img`
  width: 30px;
  height: auto;
  cursor: pointer;
  margin: 24px;
`;

const Title = styled.span`
  font-family: "Linotte-Semi-Bold";
  margin: 0px 24px;
  font-size: 34px;
  font-weight: bold;
`;

const Label = styled.div`
  background: #8ea7f5;
  border-radius: 20px;
  padding: 4px 16px;
  width: fit-content;
  font-size: small;
  color: white;
  font-family: "Linotte-Light";
  margin: 0px 8px 8px 0px;
`;

const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 150px;
  flex-direction: column;
`;

const Image = styled.img`
  width: 150px;
  height: auto;
  border-radius: 12px;
  filter: ${({ isLoading, owned }) =>
    owned || isLoading ? "unset" : "grayscale(1)"};
`;

const CatchContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 24px;
`;

const CatchButton = styled.button`
  cursor: pointer;
  background: #e91e63;
  padding: 8px 52px;
  color: #fff;
  font-size: 24px;
  border-radius: 24px;
  border: unset;
`;

const ImageBackgroundContainer = styled.div`
  display: flex;
  width: 100%;
  height: 230px;
  justify-content: center;
  align-items: center;
  position: absolute;
  filter: opacity(0.5);
  overflow: hidden;
`;

const ImageBackground = styled.img`
  width: auto;
  height: 100%;
`;

const DetailContainer = styled.div`
  margin: 160px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailContent = styled.div`
  max-width: 400px;
`;

export {
  Container,
  Header,
  Back,
  BoxContainer,
  Image,
  Title,
  Label,
  CatchContainer,
  CatchButton,
  ContentContainer,
  DetailContainer,
  DetailContent,
  ImageBackgroundContainer,
  ImageBackground
};
