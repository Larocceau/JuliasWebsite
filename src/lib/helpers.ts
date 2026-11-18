export function invertRecord<K extends string, V extends string>(
  record: Record<K, V>
): Record<V, K> {
  return Object.fromEntries(
    Object.entries(record).map(([k, v]) => [v, k])
  ) as Record<V, K>;
}

// Source - https://stackoverflow.com/a/1026087
// Posted by Steve Harrison, modified by community. See post 'Timeline' for change history
// Retrieved 2026-11-18, License - CC BY-SA 4.0

export function capitalizeFirstLetter(val: string) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
