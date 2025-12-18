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
import { NavLink, useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { Iclr2025 } from "../../stores/iclr2025";
import { CHI2026 } from "../../stores/chi2026";

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
  selectedVenue: string;
  onVenueChange: (year: string) => void;
}


const Header = ({ selectedVenue, onVenueChange }: HeaderProps) => {
  const venues = ["ICLR2025", "CHI2025"]; 
  const history = useHistory();
  const location = useLocation();
  
  // Extract year from current pathname (e.g., "/2025/about" -> "2025", "/chi2026/about" -> "chi2026")
  const getYearFromPath = () => {
    const match = location.pathname.match(/^\/(chi2026|\d{4})/);
    return match ? match[1] : "2025";
  };

  const [selectedYear, setSelectedYear] = React.useState(getYearFromPath());
  
  // Update selectedYear when location changes
  React.useEffect(() => {
    setSelectedYear(getYearFromPath());
  }, [location.pathname]);

  // Get the appropriate metadata based on year
  const getMetadata = () => {
    return selectedYear === "chi2026" ? CHI2026 : Iclr2025;
  };

  const currentMeta = getMetadata();
  const logo = currentMeta.overview.logoImg;
  
  // Get the pages to display based on year
  const getPagesForYear = () => {
    if (selectedYear === "chi2026") {
      // For chi2026, only show: Overview, Schedule, Call for Papers, Organizers
      return ["about", "schedule", "cfp", "organizers"];
    }
    // For other years, show all pages
    return Object.keys(PageIds);
  };

  const pagesToShow = getPagesForYear();
  
  const handleVenueChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const venue = event.target.value as string;
    onVenueChange(venue);
    // Optional: Reload the page with the new year
    // window.location.href = `/${selectedVenue}`;

  };
  
  const handleYearChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const year = event.target.value as string;
    setSelectedYear(year);
    // Navigate to the new year route
    history.push(`/${year}`);
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
      {pagesToShow.map((key) => (
        <NavLink
          className="menu-option"
          exact
          to={`/${selectedYear}/${key}`}
          onClick={handleMobileMenuClose}
          key={key}
        >
          <MenuItem>
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <NavLink exact to={`/${selectedYear}`}>
            <img
              className="logo"
              src={`${process.env.PUBLIC_URL}/images/logo_word_white.png`}
            ></img>
          </NavLink>
          <Select
            value={selectedYear}
            onChange={handleYearChange}
            className="year-select"
            disableUnderline
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <MenuItem value="2025">2025</MenuItem>
            <MenuItem value="chi2026">chi2026</MenuItem>
          </Select>
        </div>


        <nav className={classes.sectionDesktop}>
          <ul>
            {pagesToShow.map((key) => (
              <li className="option" key={key}>
                <NavLink exact to={`/${selectedYear}/${key}`}>
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
