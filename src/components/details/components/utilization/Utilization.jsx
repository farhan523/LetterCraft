import React from "react";
import infoIcon from "../../../../assets/li_alert-circle.png";
import transUnionLogo from "../../../../assets/image 158.png";
import experianLogo from "../../../../assets/image 159.png";
import equifaxLogo from "../../../../assets/image 160.png";

import "./utlizationStyle.css";
import RadicalChart from "./charts/RadicalChart";

const CreditScoreCard = () => {
  const data = [
    {
      company: "TransUnion",
      percentage: 94,
      amount: "$201,704.00 / $213,960.00",
      logo: transUnionLogo,
    },
    {
      company: "Experian",
      percentage: 95,
      amount: "$215,465.00 / $226,110.00",
      logo: experianLogo,
    },
    {
      company: "Equifax",
      percentage: 99,
      amount: "$229,787.00 / $232,010.00",
      logo: equifaxLogo,
    },
  ];

  return (
    <div className="credit-score-container">
      {data.map((item, index) => (
        <div key={index} className="credit-score-card">
          <div className="credit-score-logo">
            <img src={item.logo} />
          </div>
          <div className="credit-score-percentage">{item.percentage}%</div>
          <div className="credit-score-amount">{item.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default function Utilization() {
  return (
    <div className="utilization-container">
      <div className="heading-container">
        <div style={{ display: "flex" }}>
          <p className="heading" style={{ marginRight: 10 }}>
            Attack Progress
          </p>
          <img src={infoIcon} />
        </div>
        <a href="#">View Details</a>
      </div>
      <RadicalChart score={500} />
      <CreditScoreCard />
    </div>
  );
}
