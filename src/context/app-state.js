import { useState, useMemo, useContext, createContext } from "react";

const getInitialState = () => {
  const myPokemon = JSON.parse(localStorage.getItem("myPokemon")) || [];
  return {
    myPokemon
  };
};

const getActions = setState => ({
  setMyPokemon: myPokemon => {
    setState(state => {
      localStorage.setItem("myPokemon", JSON.stringify(myPokemon));
      return { ...state, myPokemon };
    });
  }
});

const useAppState = () => {
  const [state, setState] = useState(getInitialState());
  const actions = useMemo(() => getActions(setState), [setState]);
  return { state, actions };
};

const AppContext = createContext({});

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, useAppState, useAppContext };
