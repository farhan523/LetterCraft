import React from "react";
import AttackProgress from "./components/AttackProgress/AttackProgress";
import Utilization from "./components/utilization/Utilization";
import "./detailsStyle.css";

export default function Details() {
  return (
    <div className="detailsContainer">
      <AttackProgress />
      <Utilization />
    </div>
  );
}
