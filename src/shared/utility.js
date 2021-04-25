export const getFallingDelay = () => {
  return Math.random() * 4 + 1; // 1 - 4.99
};

export const getAppleId = () => {
  return `${Math.random() * 100}`; // 0 - 99.99
};
