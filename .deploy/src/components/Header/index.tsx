import {
  AppBar,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import { PageIds } from "../../stores/Interfaces";
import { NavLink, useRouteMatch } from "react-router-dom";

import "./styles.scss";
import { More, MoreVert } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
const Header = ({ logo }: { logo: string }): ReactElement => {
  {
    /* <header className="app-header">
      <h1>TRAIT</h1>
      <nav>
        <ul>
          {Object.values(PageIds).map((value) => (
            <li className="option">
              <a href={`#${value}`} key={value}>
                {value}
              </a>
            </li>
          ))}
        </ul>
      </nav>
          </header>*/
  }
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted={false}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {Object.keys(PageIds).map((key) => (
        <NavLink
          className="menu-option"
          exact
          to={`/${key}`}
          onClick={handleMobileMenuClose}
        >
          <MenuItem
            key={key}

            //onClick={handleMobileMenuClose}
          >
            {PageIds[key as keyof typeof PageIds]}
          </MenuItem>
        </NavLink>
      ))}
    </Menu>
  );
  const classes = useStyles();
  return (
    <AppBar className="app-header" position="sticky">
      <Toolbar variant="dense" className="toolbar">
        <NavLink exact to="/">
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/images/logo_word_white.png`}
          ></img>
        </NavLink>

        <nav className={classes.sectionDesktop}>
          <ul>
            {Object.keys(PageIds).map((key) => (
              <li className="option" key={key}>
                <NavLink exact to={`/${key}`}>
                  {PageIds[key as keyof typeof PageIds]}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={classes.sectionMobile}>
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreVert />
          </IconButton>
        </div>
      </Toolbar>
      {renderMobileMenu}
    </AppBar>
  );
};
export default Header;
