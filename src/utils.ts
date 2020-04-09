export type MaybeArray<T> = T | T[] | null;

export const isObject = (o: any) =>
  !isArray(o) && typeof o === 'object' && o !== null && o !== undefined;

export function isArray<T>(o: MaybeArray<T>): o is Array<T> {
  return Array.isArray(o);
}

export function objectForeach<K extends string, V>(
  obj: Record<K, V>,
  callback: (key: K, value: V) => void
) {
  for (let [key, value] of Object.entries<V>(obj)) {
    callback(key as K, value);
  }
}
