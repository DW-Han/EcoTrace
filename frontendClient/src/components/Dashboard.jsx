import React, { useState, useEffect } from "react";
import Summary from "./Summary";
import EnergyCostCalculator from "./EnergyCostCalculator";
import ReportGenerator from "./ReportGenerator";
import EnergyRecommendations from "./EnergyRecommendations";
import WeatherInfo from "./WeatherInfo";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="header">
        Welcome back, Facility Manager Kenny
      </header>

      <div className="main-content">
        <div className="reports">
          <Summary
            apiEndpoint="/api/energy"
            label="Average Daily Energy Usage (kWh)"
            dataKey="energyUsage"
            color="cornflowerblue"
          />
          <Summary
            apiEndpoint="/api/energy"
            label="Average Daily Carbon Footprint (kg CO2)"
            dataKey="carbonFootprint"
            color="olive"
          />
        </div>

        <div className="right-container">
          <div className="total-cost">
            <EnergyCostCalculator apiEndpoint="/api/energy" />
          </div>

          <div className="weather-info">
            <WeatherInfo />
          </div>

          <div className="report-generator">
            <ReportGenerator />
          </div>

          <div className="recommendations">
            <EnergyRecommendations />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
