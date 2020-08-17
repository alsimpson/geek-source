/* function: calculate savings amount */
export const getSavingsAmt = (amt1, amt2) => {
  return Math.abs(Number.parseFloat(amt1 - amt2)).toFixed(2);
};
