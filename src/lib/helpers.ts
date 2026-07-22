export function invertRecord<K extends string, V extends string>(
  record: Record<K, V>
): Record<V, K> {
  return Object.fromEntries(
    Object.entries(record).map(([k, v]) => [v, k])
  ) as Record<V, K>;
}
