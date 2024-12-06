import React from "react";
import "./statsstyles.css";
import arrowUpIcon from "../../assets/arrow-up.png";
import arrowDownIcon from "../../assets/arrow-down.png";

// StatsBox Component: Represents a single statistics card
function StatsBox(props) {
  const { name, number, success, percent } = props; // Destructuring props

  return (
    <div className="statsBox">
      {" "}
      {/* Container for a single stats box */}
      {/* Display the name of the stat */}
      <p style={{ fontFamily: "Inter", fontWeight: 500, fontSize: 12 }}>
        {name}
      </p>
      {/* Display the number associated with the stat */}
      <p style={{ fontFamily: "Inter", fontWeight: 600, fontSize: 18 }}>
        {number}
      </p>
      <div style={{ display: "flex", alignItems: "center" }}>
        {" "}
        {/* Container for percentage and trend */}
        <div
          style={{
            width: 54,
            height: 22,
            backgroundColor: `${success ? "#ECFDF3" : "#FEF3F2"}`,
            borderRadius: 16,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          {/* Display the appropriate trend icon */}
          <img src={success ? arrowUpIcon : arrowDownIcon} />
          {/* Display the percentage value */}
          <p style={{ fontFamily: "Inter", fontWeight: 500, fontSize: 12 }}>
            {percent}%
          </p>
        </div>
        {/* Display comparison text */}
        <p
          style={{
            fontFamily: "Inter",
            fontSize: 12,
            fontWeight: 500,
            color: "#6B788E", // Grey color for text
          }}
        >
          vs yesterday
        </p>
      </div>
    </div>
  );
}

// List of stats data for each category
const statsList = [
  {
    name: "Total Clients", // Name of the stat
    number: 214, // Number associated with the stat
    success: true, // Indicates if it's a positive trend
    percent: 10, // Percentage change
  },
  {
    name: "Total Creditors",
    number: 24,
    success: false, // Indicates a negative trend
    percent: 5,
  },
  {
    name: "Total Reports Uploaded",
    number: 24,
    success: true,
    percent: 15,
  },
  {
    name: "Total Attacks",
    number: 2,
    success: true,
    percent: 15,
  },
];

// Main component to display all statistics
export default function Stats() {
  return (
    <div className="statsContainer">
      {" "}
      {/* Main container for stats */}
      <div className="statsWrapper">
        {" "}
        {/* Wrapper for arranging stats boxes */}
        {/* Map over the statsList to render a StatsBox for each item */}
        {statsList.map((item, index) => {
          return (
            <StatsBox
              key={index} // Key for unique identification of each stats box
              name={item.name} // Name of the stat
              number={item.number} // Number associated with the stat
              success={item.success} // Success or failure flag
              percent={item.percent} // Percentage change
            />
          );
        })}
      </div>
    </div>
  );
}
