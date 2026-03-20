export const fetchMetalPrice = (metal) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        // Simulate random failure
        if (Math.random() < 0.1) {
          reject("API Error");
          return;
        }

        const basePrices = {
          Gold: 6000,
          Silver: 75,
          Platinum: 2500,
          Palladium: 3000,
        };

        const price = basePrices[metal] + Math.floor(Math.random() * 100);

        resolve({
          name: metal,
          price,
          open: price - 50,
          close: price - 20,
          timestamp: new Date().toLocaleTimeString(),
        });
      },
      1000 + Math.random() * 1000,
    ); // different delay per metal
  });
};
