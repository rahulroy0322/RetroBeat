const minMax = (current: number, max: number, min = 0) =>
  Math.max(min, Math.min(max, current));

// gen by chat gpt
function getWidth({
  min,
  max,
  value,
}: {
  min: number;
  max: number;
  value: number;
}): number {
  if (max <= min) return 0; // avoid divide by zero
  const clamped = Math.min(Math.max(value, min), max); // clamp within range
  return ((clamped - min) / (max - min)) * 100;
}

const MINUTE = 60;
const MIN_LENGTH = 2;
const LEADING = "0";

const formateTime = (time: number): string => {
  const sc = String(parseInt((time % MINUTE).toString())).padStart(
    MIN_LENGTH,
    LEADING
  );

  const mn = String(parseInt(((time / MINUTE) % MINUTE).toString())).padStart(
    MIN_LENGTH,
    LEADING
  );

  const hr = parseInt((time / (MINUTE * MINUTE)).toString());

  if (hr) {
    return `${String(hr).padStart(MIN_LENGTH, LEADING)}:${mn}:${sc}`;
  }

  return `${mn}:${sc}`;
};

export { minMax, getWidth, formateTime };
