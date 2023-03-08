import React from "react";
import "./ChartBar.css";

export default function ChartBar({ value, maxValue, label }) {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{
            height:
              maxValue > 0 ? Math.round((value / maxValue) * 100) + "%" : "0%",
            backgroundColor:
              Math.round((value / maxValue) * 100) + "%" === "100%"
                ? "red"
                : "#4826b9",
          }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
}
