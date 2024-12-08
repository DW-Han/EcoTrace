import React from "react";
import * as XLSX from "xlsx";

const ReportGenerator = () => {
  const generateSampleData = (type) => {
    const date = new Date().toLocaleDateString();
    switch (type) {
      case "Cost":
        return [
          ["Date", "Total Cost ($)"],
          [date, "123.45"],
        ];
      case "Energy":
        return [
          ["Date", "Energy Usage (kWh)"],
          [date, "456.78"], 
        ];
      case "Carbon":
        return [
          ["Date", "Carbon Footprint (kg CO2)"],
          [date, "78.90"], 
        ];
      default:
        return [];
    }
  };

  const handleGenerateReport = (type) => {
    const data = generateSampleData(type);

    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, `${type} Report`);

    XLSX.writeFile(workbook, `${type}_Report.xlsx`);
  };

  return (
    <div className="report-generator-container">
      <h1>Generate Reports</h1>
      <button onClick={() => handleGenerateReport("Cost")}>Cost Report</button>
      <button onClick={() => handleGenerateReport("Energy")}>
        Energy Report
      </button>
      <button onClick={() => handleGenerateReport("Carbon")}>
        Carbon Report
      </button>
    </div>
  );
};

export default ReportGenerator;
