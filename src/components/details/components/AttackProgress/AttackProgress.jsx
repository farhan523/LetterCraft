import React from "react";
import "./style.css";
import infoIcon from "../../../../assets/li_alert-circle.png";

export default function AttackProgress() {
  function InfoBox({ title, value, bgColor, hasBorderRight }) {
    return (
      <div
        style={{
          display: "flex",
          width: "47%",
          justifyContent: "space-around",
          height: 100,
          alignItems: "center",
          borderTop: "1px solid #EBEDF0",
          borderBottom: "1px solid #EBEDF0",
          borderRight: hasBorderRight ? "1px solid #EBEDF0" : "none", // Conditionally add the right border
        }}
      >
        <div>
          <p style={{ fontWeight: 500, fontSize: 12, color: "#6B788E" }}>
            {title}
          </p>
          <p style={{ marginTop: 10 }}>{value}</p>
        </div>
        <div
          style={{
            backgroundColor: bgColor,
            width: 24,
            height: 24,
            marginBottom: 20,
          }}
        ></div>
      </div>
    );
  }

  function CountdownBox({ value, label }) {
    return (
      <div className="countdown-box">
        <p className="countdown-value">{value}</p>
        <p className="countdown-label">{label}</p>
      </div>
    );
  }

  function Countdown() {
    const countdownData = [
      { value: 28, label: "DAYS" },
      { value: 24, label: "HOURS" },
      { value: 60, label: "MINUTES" },
      { value: 60, label: "SECONDS" },
    ];

    return (
      <div className="countdown-container">
        <p className="countdown-title">Your Next Attack Until!</p>
        <div className="countdown-timer">
          {countdownData.map((item, index) => (
            <CountdownBox key={index} value={item.value} label={item.label} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="attack-progress-container">
      <div className="heading-container">
        <div style={{ display: "flex" }}>
          <p className="heading" style={{ marginRight: 10 }}>
            Attack Progress
          </p>
          <img src={infoIcon} />
        </div>
      </div>
      <div className="attack-stats">
        <InfoBox
          title="Attack Sent"
          value="214"
          bgColor="#FF9595"
          hasBorderRight={true} // Include border for the first box
        />
        <InfoBox
          title="Total credit score"
          value="Opts"
          bgColor="#ffa048"
          hasBorderRight={false} // No border for the second box
        />
        <Countdown />
      </div>
    </div>
  );
}
