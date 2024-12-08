import React, { useState, useEffect } from "react";
import Chart from "./Chart";

const Summary = ({ apiEndpoint, label, dataKey, color }) => {
  const [average, setAverage] = useState(0);
  const [showChart, setShowChart] = useState(false);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();

        const total = data.reduce((sum, entry) => sum + entry[dataKey], 0);
        const avg = total / data.length;

        const formattedData = data.map((entry) => ({
          date: entry.date,
          value: entry[dataKey],
        }));

        setAverage(avg.toFixed(2));
        setChartData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiEndpoint, dataKey]);

  return (
    <div className="summary">
      <h3>{label}</h3>
      <p>Average: {average}</p>
      <button onClick={() => setShowChart(!showChart)}>
        {showChart ? "Hide Chart" : "Show Chart"}
      </button>
      {}
      <div className="chart-wrapper">
        {showChart && <Chart data={chartData} label={label} color={color} />}
      </div>
    </div>
  );
};

export default Summary;
