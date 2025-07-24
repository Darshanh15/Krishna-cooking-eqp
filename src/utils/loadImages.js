// src/utils/loadImages.js

export const importAll = (r) => r.keys().map(r);

// Usage example:
export const boilers = importAll(
  require.context("../assets/products/Boilers", false, /\.(png|jpe?g|svg)$/)
);

export const chineese = importAll(
  require.context("../assets/products/Chineese-Cooking", false, /\.(png|jpe?g|svg)$/)
);
