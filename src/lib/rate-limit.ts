const WINDOW_MS = 10 * 60_000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

let lastSweep = Date.now();

function sweep(now: number) {
  if (now - lastSweep < WINDOW_MS) return;
  lastSweep = now;
  for (const [key, timestamps] of hits) {
    const recent = timestamps.filter((t) => now - t < WINDOW_MS);
    if (recent.length === 0) hits.delete(key);
    else hits.set(key, recent);
  }
}

/** Simple in-memory fixed-instance rate limiter (defense-in-depth only). */
export function isRateLimited(key: string): boolean {
  const now = Date.now();
  sweep(now);

  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (timestamps.length >= MAX_REQUESTS) {
    hits.set(key, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(key, timestamps);
  return false;
}
