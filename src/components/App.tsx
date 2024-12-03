import { ReactElement, useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey, orange, pink, yellow } from "@material-ui/core/colors";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.scss";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import { Info2022 } from "../stores/Info2022";

//import {store } from '../stores/Database';

export const theme = createTheme({
  palette: {
    primary: {
      main: pink[700],
    },
    secondary: {
      main: grey[700],
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
        backgroundColor: pink[600],
        color: "white",
        "&:hover": {
          backgroundColor: pink[500],
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
          <Header logo={Info2022.overview.logoImg} />
          <Switch>
            <Route
              path="/cfp"
              exact
              render={() => <Main meta={Info2022} types={["cfp"]} />}
            />
            <Route
              path="/schedule"
              exact
              render={() => <Main meta={Info2022} types={["schedule"]} />}
            />
            <Route
              path="/about"
              exact
              render={() => (
                <Main
                  meta={Info2022}
                  types={["about", "organizers", "committee"]}
                />
              )}
            />
            <Route
              path="/"
              exact
              render={() => (
                <Main
                  meta={Info2022}
                  types={["about", "organizers", "committee"]}
                />
              )}
            />
          </Switch>
          <Footer contact={Info2022.overview.contact} />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
