export function probe<T>(v: T, label = "probe"): T {
  console.log(`[DEBUG] ${label}:`, v);
  return v;
}
