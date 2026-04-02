import { ReactElement, useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey, orange, pink, red, blue, yellow } from "@material-ui/core/colors";


import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import "./styles.scss";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import { Iclr2025 } from "../stores/iclr2025";
import { CHI2026 } from "../stores/chi2026";



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
  const [selectedVenue, setSelectedVenue] = useState("ICLR2025");

  return (
    <ThemeProvider theme={theme}>
      <Router>
      {/* <Router basename={`/${selectedVenue}`}> */}
      {/* <Router basename={`/${selectedVenue}`}> */}
      {/* <Router> */}
        <div className="app">
          <Header 
          selectedVenue={selectedVenue}
          onVenueChange={(v) => setSelectedVenue(v)}
          />
          <Switch>
            <Route exact path="/">
              <Redirect to="/2026" />
            </Route>
            <Route
              path="/2025"
              exact
              render={() => (
                <Main
                  meta={Iclr2025}
                  types={["about", "organizers"]}
                />
              )}
            />
            <Route
              path="/2025/about"
              exact
              render={() => (
                <Main
                  meta={Iclr2025}
                  types={["about", "organizers"]}
                />
              )}
            />
            <Route
              path="/2025/cfp"
              exact
              render={() => <Main meta={Iclr2025} types={["cfp"]} />}
            />
            <Route
              path="/2025/papers"
              exact
              render={() => <Main meta={Iclr2025} types={["orals"]} />}
            />
            <Route
              path="/2025/schedule"
              exact
              render={() => <Main meta={Iclr2025} types={["schedule"]} />}
            />
            <Route
              path="/2025/speakers"
              exact
              render={() => <Main meta={Iclr2025} types={["speakers"]} />}
            />
            <Route
              path="/2025/organizers"
              exact
              render={() => <Main meta={Iclr2025} types={["organizers"]} />}
            />
            <Route
              path="/2025/committee"
              exact
              render={() => <Main meta={Iclr2025} types={["committee"]} />}
            />
            <Route
              path="/2025/"
              exact
              render={() => (
                <Main
                  meta={Iclr2025}
                  types={["about", "organizers"]}
                />
              )}
            />
            <Route
              path="/2026"
              exact
              render={() => (
                <Main
                  meta={CHI2026}
                  types={["about", "organizers", "committee"]}
                  // types={["about", "organizers", "cfp"]}
                />
              )}
            />
            <Route
              path="/2026/about"
              exact
              render={() => (
                <Main
                  meta={CHI2026}
                  // types={["about", "organizers", "cfp"]}
                  types={["about", "organizers", "committee"]}
                />
              )}
            />
            <Route
              path="/2026/cfp"
              exact
              render={() => <Main meta={CHI2026} types={["cfp"]} />}
            />
            <Route
              path="/2026/papers"
              exact
              render={() => <Main meta={CHI2026} types={["orals"]} />}
            />
            <Route
              path="/2026/schedule"
              exact
              render={() => <Main meta={CHI2026} types={["schedule"]} />}
            />
            <Route
              path="/2026/speakers"
              exact
              render={() => <Main meta={CHI2026} types={["speakers"]} />}
            />
            <Route
              path="/2026/organizers"
              exact
              render={() => <Main meta={CHI2026} types={["organizers"]} />}
            />
            <Route
              path="/2026/committee"
              exact
              render={() => <Main meta={CHI2026} types={["committee"]} />}
            />
            <Route
              path="/2026/"
              exact
              render={() => (
                <Main
                  meta={CHI2026}
                  // types={["about", "organizers"]}
                  types={["about", "organizers", "cfp"]}
                />
              )}
            />
            {/* Redirects from old chi2026 paths to new 2026 paths */}
            <Route
              path="/chi2026"
              exact
            >
              <Redirect to="/2026" />
            </Route>
            <Route
              path="/chi2026/"
              exact
            >
              <Redirect to="/2026" />
            </Route>
            <Route
              path="/chi2026/about"
              exact
            >
              <Redirect to="/2026/about" />
            </Route>
            <Route
              path="/chi2026/cfp"
              exact
            >
              <Redirect to="/2026/cfp" />
            </Route>
            <Route
              path="/chi2026/papers"
              exact
            >
              <Redirect to="/2026/papers" />
            </Route>
            <Route
              path="/chi2026/schedule"
              exact
            >
              <Redirect to="/2026/schedule" />
            </Route>
            <Route
              path="/chi2026/speakers"
              exact
            >
              <Redirect to="/2026/speakers" />
            </Route>
            <Route
              path="/chi2026/organizers"
              exact
            >
              <Redirect to="/2026/organizers" />
            </Route>
            <Route
              path="/chi2026/committee"
              exact
            >
              <Redirect to="/2026/committee" />
            </Route>


          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
