import React from "react";
import Summary from "./Summary";
import EnergyCostCalculator from "./EnergyCostCalculator";
import ReportGenerator from "./ReportGenerator";
import EnergyRecommendations from "./EnergyRecommendations";
import "./Dashboard.css"; 

const Dashboard = () => {
  return (
    <div className="dashboard-container">
     <header className="header">
        <h1>Welcome back, Facility Manager Kenny</h1>
      </header>


      <div className="main-content">

        <div className="reports">
          <Summary
            apiEndpoint="/api/energy"
            label="Average Daily Energy Usage (kWh)"
            dataKey="energyUsage"
            color="CornflowerBlue"
          />
          <Summary
            apiEndpoint="/api/energy"
            label="Average Daily Carbon Footprint (kg CO2)"
            dataKey="carbonFootprint"
            color="ForestGreen  "
          />
        </div>

   
        <div className="right-container">
          <div className="total-cost">
            <EnergyCostCalculator apiEndpoint="/api/energy" />
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
