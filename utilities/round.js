export default function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals).toFixed(
    decimals
  );
}
