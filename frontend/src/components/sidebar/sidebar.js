import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from "@material-ui/icons/Search";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

import { makeStyles } from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 300,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 300,
  },
}));

const Sidebar = ({ path }) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <List>
        <Link
          to="/"
          component={({ navigate }) => (
            <ListItem
              button
              key="Search"
              selected={pathname !== "/patents"}
              onClick={navigate}
            >
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItem>
          )}
        />
        <Link
          to="/patents"
          component={({ navigate }) => (
            <ListItem
              button
              key="Documents"
              selected={pathname === "/patents"}
              onClick={navigate}
            >
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItem>
          )}
        />
      </List>
    </Drawer>
  );
};

export default Sidebar;
