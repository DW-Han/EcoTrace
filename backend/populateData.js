const EnergyData = require("./models/EnergyData");

const generateRandomData = (startDate, endDate) => {
  const data = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    data.push({
      date: new Date(currentDate),
      energyUsage: parseFloat((Math.random() * (50 - 10) + 10).toFixed(2)), // between 10 and 50 kWh
      carbonFootprint: parseFloat((Math.random() * (30 - 5) + 5).toFixed(2)), // between 5 and 30 kg CO2
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return data;
};

const populateData = async () => {
  try {
    const today = new Date();
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(today.getMonth() - 3);

    // checking if data already exists
    const existingData = await EnergyData.find({
      date: { $gte: threeMonthsAgo, $lte: today },
    });

    if (existingData.length === 0) {
      const randomData = generateRandomData(threeMonthsAgo, today);
      await EnergyData.insertMany(randomData);
      console.log("Random data generated and inserted into the database.");
    } else {
      console.log("Data already exists for the last 3 months.");
    }
  } catch (error) {
    console.error("Error populating data:", error);
  }
};

module.exports = populateData;
