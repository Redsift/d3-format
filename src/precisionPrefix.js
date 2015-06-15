import exponent from "./exponent";
import precisionFixed from "./precisionFixed";

export default function(step, value) {
  return Math.max(0, Math.floor(exponent(value) / 3) * 3 - exponent(Math.abs(step)));
};
