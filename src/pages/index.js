import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContext, useAppState } from "../context/app-state";
import MainLayout from "../components/layout";
import { Loader2 } from "../components/loader";

const ListPokemonPage = lazy(() => import("./list-pokemon"));
const MyPokemonPage = lazy(() => import("./my-pokemon"));
const DetailsPage = lazy(() => import("./details"));

const MainRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

const Main = () => {
  const { state, actions } = useAppState();
  return (
    <Router basename="/">
      <Switch>
        <AppContext.Provider value={{ state, actions }}>
          <Suspense fallback={<Loader2 />}>
            <MainRoute exact path="/" component={ListPokemonPage} />
            <Route exact path="/pokemon/:id" component={DetailsPage} />
            <MainRoute exact path="/my-pokemon" component={MyPokemonPage} />
          </Suspense>
        </AppContext.Provider>
      </Switch>
    </Router>
  );
};

export default Main;
