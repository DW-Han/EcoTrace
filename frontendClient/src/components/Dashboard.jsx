import React from "react";
import Summary from "./Summary";
import EnergyCostCalculator from "./EnergyCostCalculator";
import ReportGenerator from "./ReportGenerator";
import EnergyRecommendations from "./EnergyRecommendations";
import "./Dashboard.css"; // Custom CSS for layout

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Welcome Message */}
      <header className="header">
        <h1>Welcome back, Facility Manager Kenny</h1>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Section for Reports */}
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

        {/* Right Section for Cost and Recommendations */}
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
