import React, { memo, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import uniqid from "uniqid";
import { Content, Card, OverlayLayout, Remove } from "./style";
import { Row, Column } from "../../components/grid";
import { capitalizeFirstLetter } from "../../utils/helper";
import { useAppContext } from "../../context/app-state";

const Pokemon = memo(({ data, onClick, owned, remove, onRemove }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Column lg="3" md="4" sm="12" padding="8px">
      <Card
        owned={owned > 0}
        remove={remove}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        onClick={!remove ? onClick(data.name) : () => {}}
      >
        <Card.Title>
          {capitalizeFirstLetter(data.nickname || data.name)}
        </Card.Title>

        {data.types.map(item => (
          <Card.Label key={uniqid()}>
            {capitalizeFirstLetter(item.type.name)}
          </Card.Label>
        ))}

        <Card.ImageContainer>
          <Card.Image
            alt="pokemon-tampan"
            owned={owned > 0}
            src={
              data.sprites.front_default ||
              require("../../assets/images/no_img.png")
            }
          />
        </Card.ImageContainer>
        {!remove && <Card.Info>Owned {owned}</Card.Info>}
        {remove && isHover && (
          <>
            <OverlayLayout />
            <Remove>
              <Remove.Button onClick={onRemove(data._id)}>Remove</Remove.Button>
            </Remove>
          </>
        )}
      </Card>
    </Column>
  );
});

const PokemonCard = memo(({ data, remove = false }) => {
  const history = useHistory();
  const { state, actions } = useAppContext();

  const onClick = useCallback(
    id => () => {
      history.push(`/pokemon/${id}`);
    },
    [history]
  );

  const onRemove = id => e => {
    e.preventDefault();
    const data = Object.assign([], state.myPokemon);
    const newData = data.filter(item => item._id !== id);
    actions.setMyPokemon(newData);
  };

  const pokemonOwned = id => {
    const data = Object.assign([], state.myPokemon);
    return data.length
      ? data.filter(item => item._id === id || item.id === id).length
      : 0;
  };

  return (
    <Content>
      <Row>
        {data.map(pokemon => (
          <Pokemon
            key={uniqid()}
            data={pokemon}
            owned={pokemonOwned(pokemon._id || pokemon.id)}
            onClick={onClick}
            remove={remove}
            onRemove={onRemove}
          />
        ))}
      </Row>
    </Content>
  );
});

export default PokemonCard;
