let GameConfig = {
  difficultyLevels: [
    {
      label: "Tutorial",
      startCash: 50000,
      commodityMultiplier: 1,
      shipPrice: 100000
    },
    {
      label: "Novice",
      startCash: 25000,
      commodityMultiplier: 1,
      shipPrice: 110000
    },
    {
      label: "Beginner",
      startCash: 0,
      commodityMultiplier: 2,
      shipPrice: 120000
    },
    {
      label: "Intermediate",
      startCash: 0,
      commodityMultiplier: 3,
      shipPrice: 130000
    },
    {
      label: "Expert",
      startCash: 0,
      commodityMultiplier: 4,
      shipPrice: 140000
    },
    {
      label: "Master",
      startCash: 0,
      commodityMultiplier: 5,
      shipPrice: 150000
    }
  ],
  lender: {
    rate: 4,
    amount: 150000
  },
  victoryAmount: 5000000
};
export {GameConfig};
