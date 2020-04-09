import { MaybeArray } from './helpers';

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

export function isDbObject(obj: any, uniqueIdKey: string) {
  if (isObject(obj) && obj[uniqueIdKey]) {
    return true;
  }

  return false;
}

export function isDbArray<T>(
  obj: MaybeArray<T>,
  uniqueIdKey: string
): obj is Array<T> {
  return (
    isArray(obj) &&
    obj.filter(
      item => isDbObject(item, uniqueIdKey) || isDbArray(item, uniqueIdKey)
    ).length === obj.length
  );
}
