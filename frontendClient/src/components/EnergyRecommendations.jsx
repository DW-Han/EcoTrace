import React, { useState, useEffect } from "react";

const EnergyRecommendations = () => {
  const recommendations = [
    "Turn off lights when leaving a room.",
    "Use energy-efficient LED bulbs.",
    "Unplug devices when not in use to prevent phantom energy usage.",
    "Use a programmable thermostat to optimize heating and cooling.",
    "Wash clothes in cold water and air dry when possible.",
    "Seal windows and doors to prevent air leaks.",
    "Use power strips to turn off multiple devices at once.",
    "Limit the use of high-energy appliances during peak hours.",
    "Install solar panels or use renewable energy sources if possible.",
    "Regularly maintain HVAC systems to ensure optimal efficiency.",
  ];

  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex(
        (prevIndex) => (prevIndex + 1) % recommendations.length,
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="energy-recommendations">
      <p>{recommendations[currentTipIndex]}</p>
    </div>
  );
};

export default EnergyRecommendations;
