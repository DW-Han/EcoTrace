import React, { useEffect, useState } from "react";

const EnergyCostCalculator = ({ apiEndpoint }) => {
  const [totalCost, setTotalCost] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEnergyData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();

        const today = new Date();
        const fourMonthsAgo = new Date();
        fourMonthsAgo.setMonth(today.getMonth() - 4);

        const filteredData = data.filter((entry) => {
          const entryDate = new Date(entry.date);
          return entryDate >= fourMonthsAgo && entryDate <= today;
        });

        const totalEnergyUsage = filteredData.reduce(
          (sum, entry) => sum + entry.energyUsage,
          0,
        );
        const cost = totalEnergyUsage * 0.5;

        setTotalCost(cost.toFixed(2));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching energy data:", error);
        setError("Failed to calculate energy cost.");
        setLoading(false);
      }
    };

    fetchEnergyData();
  }, [apiEndpoint]);

  if (loading) return <p>Loading energy cost...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div >
      <h3>Energy Usage Cost</h3>
      
        Total cost for the last business quater:{" "}
        <strong style={{ color: "green" }}>${totalCost}</strong>
      
    </div>
  );
};

export default EnergyCostCalculator;
