// used for single digits only i.e 6 -> 06
const prependZero = (n: number) => (n < 10 ? "0" + n.toString() : n);

export const genTimerText = (timeInSec: number) => {
  const min = Math.floor(timeInSec / 60);
  const secs = timeInSec % 60;

  return prependZero(min) + " : " + prependZero(secs);
};
