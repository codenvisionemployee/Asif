import React from "react";
import "./Home.css";
import { Outlet } from "react-router-dom";
import { ListMenuBar } from "../listItems";

function Home(props) {
  return (
    <div className="hemo">
      <ListMenuBar />
      <Outlet />
    </div>
  );
}

export default Home;
