import { ReactElement, useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey, orange, pink, red, blue, yellow } from "@material-ui/core/colors";


import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.scss";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

// import { Info2022 } from "../stores/Info2022";
import { Iclr2025 } from "../stores/iclr2025";

//import {store } from '../stores/Database';

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: {
      main: pink[900],
    },
  },
  typography: {
    button: {
      fontFamily: "Google Sans Display",
      textTransform: "none",
    },
  },
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: grey[50],
        "&:hover": {
          backgroundColor: grey[100],
        },
        "&.Mui-focused": {
          backgroundColor: grey[100],
        },
      },
    },
    MuiButton: {
      contained: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
        "&:disabled": {
          backgroundColor: grey[600],
          color: grey[200],
        },
      },
      containedPrimary: {
        backgroundColor: yellow[600],
        color: "white",
        "&:hover": {
          backgroundColor: yellow[500],
          color: "white",
        },
      },
    },
  },
});

const App = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <Header logo={Iclr2025.overview.logoImg} />
          <Switch>
            <Route
              path="/about"
              exact
              render={() => (
                <Main
                  meta={Iclr2025}
                  types={["about", "organizers"]}
                />
              )}
            />
            <Route
              path="/cfp"
              exact
              render={() => <Main meta={Iclr2025} types={["cfp"]} />}
            />
            <Route
              path="/schedule"
              exact
              render={() => <Main meta={Iclr2025} types={["schedule"]} />}
            />
            <Route
              path="/speakers"
              exact
              render={() => <Main meta={Iclr2025} types={["speakers"]} />}
            />
            <Route
              path="/organizers"
              exact
              render={() => <Main meta={Iclr2025} types={["organizers"]} />}
            />
            <Route
              path="/committee"
              exact
              render={() => <Main meta={Iclr2025} types={["committee"]} />}
            />
            <Route
              path="/"
              exact
              render={() => (
                <Main
                  meta={Iclr2025}
                  types={["about", "organizers"]}
                />
              )}
            />
          </Switch>
          <Footer contact={Iclr2025.overview.contact} />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
