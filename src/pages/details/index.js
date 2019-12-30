import React, { useState, Suspense } from "react";
import { useHistory, useParams } from "react-router-dom";
import uniqid from "uniqid";
import {
  Container,
  ContentContainer,
  Header,
  Back,
  BoxContainer,
  Image,
  Title,
  Label,
  CatchContainer,
  CatchButton,
  ImageBackgroundContainer,
  ImageBackground,
  DetailContainer,
  DetailContent
} from "./style";
import { createResourceDetailsPage } from "../../services/pokemon";
import { capitalizeFirstLetter } from "../../utils/helper";
import { useAppContext } from "../../context/app-state";
import AlertFailed from "../../components/alert-failed";
import AlertSuccess from "../../components/alert-success";
import { Loader1 } from "../../components/loader";

const Content = ({ resource, state, actions }) => {
  const pokemon = resource.pokemonById.read();
  const history = useHistory();

  const [isCatching, setIsCatching] = useState(false);
  const [failedAlert, setFailedAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  const { myPokemon } = state;
  const { setMyPokemon } = actions;

  const onBack = () => history.goBack();

  const onCatch = () => {
    setIsCatching(true);
    setTimeout(() => {
      const probabilityCatched = Math.random();
      if (probabilityCatched >= 0.5) {
        setSuccessAlert(true);
      } else {
        setFailedAlert(true);
      }
      setIsCatching(false);
    }, 3000);
  };

  const onSave = nickname => {
    setSuccessAlert(false);
    const data = Object.assign({}, pokemon);
    const { id, name, sprites, types } = data;
    const newData = {
      id,
      _id: uniqid(),
      nickname,
      name,
      sprites,
      types
    };
    setMyPokemon([newData, ...myPokemon]);
    setTimeout(() => {
      history.push("/my-pokemon");
    }, 500);
  };

  return (
    <ContentContainer>
      <ImageBackgroundContainer>
        <ImageBackground
          alt="pokemon-tampan"
          src={require("../../assets/images/bg_particle.png")}
        />
      </ImageBackgroundContainer>
      <Header>
        <Back
          alt="pokemon-tampan"
          onClick={onBack}
          src={require("../../assets/images/ic_return.svg")}
        />
        <AlertFailed
          isOpen={failedAlert}
          onClose={() => setFailedAlert(false)}
        />
        <AlertSuccess
          isOpen={successAlert}
          onClose={() => setSuccessAlert(false)}
          onSubmit={onSave}
          image={pokemon.sprites.front_default}
          data={myPokemon}
        />
        <BoxContainer>
          <Image
            alt="pokemon-tampan"
            isLoading={isCatching}
            owned={myPokemon.find(item => item.id === pokemon.id)}
            src={
              isCatching
                ? require("../../assets/images/loading_3.gif")
                : pokemon.sprites.front_default ||
                  require("../../assets/images/no_img.png")
            }
          />
          <Title>{capitalizeFirstLetter(pokemon.name)}</Title>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "0px 24px"
            }}
          >
            {pokemon.types.map(item => (
              <Label key={item.slot}>
                {capitalizeFirstLetter(item.type.name)}
              </Label>
            ))}
          </div>
        </BoxContainer>
      </Header>
      <DetailContainer>
        <DetailContent></DetailContent>
      </DetailContainer>
      <CatchContainer>
        {!isCatching && <CatchButton onClick={onCatch}>Catch</CatchButton>}
      </CatchContainer>
    </ContentContainer>
  );
};

const Details = () => {
  const { id } = useParams();
  const { state, actions } = useAppContext();

  const initialResource = createResourceDetailsPage(id);
  const [resource] = useState(initialResource);

  return (
    <Container>
      <Suspense fallback={<Loader1 />}>
        <Content state={state} resource={resource} actions={actions} />
      </Suspense>
    </Container>
  );
};

export default Details;
