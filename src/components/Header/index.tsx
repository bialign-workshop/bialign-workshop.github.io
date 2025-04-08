import {
  AppBar,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Select,
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


interface HeaderProps {
  logo: string;
  selectedVenue: string;
  onVenueChange: (year: string) => void;
}


const Header = ({ logo, selectedVenue, onVenueChange }: HeaderProps) => {
  const venues = ["ICLR2025", "CHI2025"]; 
  
  const handleVenueChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const venue = event.target.value as string;
    onVenueChange(venue);
    // Optional: Reload the page with the new year
    // window.location.href = `/${selectedVenue}`;

  };

// const Header = ({ logo }: { logo: string }): ReactElement => {
//   {  }
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

        {/* <Select
          value={selectedVenue}
          onChange={handleVenueChange}
          style={{ 
            marginLeft: 10,
            marginTop: 10,
            color: 'lightgrey',
            fontWeight: 'bold', 
            fontSize: 20
          }}
        >
          {venues.map((venue) => (
            <MenuItem key={venue} value={venue}>
              {venue}
            </MenuItem>
          ))}
        </Select> */}

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
