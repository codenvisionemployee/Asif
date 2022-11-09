import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";

import PeopleIcon from "@mui/icons-material/People";

import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ReportIcon from "@mui/icons-material/Report";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import LogoutIcon from "@mui/icons-material/Logout";
import StyleIcon from "@mui/icons-material/Style";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

export const ListMenuBar = () => {
  const navigate = useNavigate();

  const redirect = (url) => {
    navigate(url);
  };

  return (
    <List component="nav">
      <React.Fragment>
        Operation
        <ListItemButton onClick={() => redirect("/")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton onClick={() => redirect("/Reservationmanagement")}>
          <ListItemIcon>
            <BookOnlineIcon />
          </ListItemIcon>
          <ListItemText primary="Reservation management" />
        </ListItemButton>
        <ListItemButton onClick={() => redirect("/Customermanagement")}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Customer Management" />
        </ListItemButton>
        <ListItemButton onClick={() => redirect("/Materials")}>
          <ListItemIcon>
            <LibraryBooksIcon />
          </ListItemIcon>
          <ListItemText primary="Materials" />
        </ListItemButton>
        <ListItemButton onClick={() => redirect("/Reports")}>
          <ListItemIcon>
            <ReportIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>
        Set-Up
        <ListItemButton onClick={() => redirect("/UserAccess")}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="User Access" />
        </ListItemButton>
        <ListItemButton onClick={() => redirect("/Acountmanagement")}>
          <ListItemIcon>
            <ManageAccountsIcon />
          </ListItemIcon>
          <ListItemText primary="Acount management" />
        </ListItemButton>
        <ListItemButton onClick={() => redirect("/Tagsmanagement")}>
          <ListItemIcon>
            <StyleIcon />
          </ListItemIcon>
          <ListItemText primary="Tags management" />
        </ListItemButton>
        <ListItemButton onClick={() => redirect("/Systemsetting")}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="System setting" />
        </ListItemButton>
        <ListItemButton onClick={() => redirect("/Marketing")}>
          <ListItemIcon>
            <LocalGroceryStoreIcon />
          </ListItemIcon>
          <ListItemText primary="Marketing" />
        </ListItemButton>
        <ListItemButton onClick={() => redirect("/Logout")}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </React.Fragment>
    </List>
  );
};
