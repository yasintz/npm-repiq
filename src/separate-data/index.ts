import separateArrayData from './array';
import separateObjectData from './object';
import { isDbArray, isDbObject } from '../utils';
import { SeparatedObject, UserData } from '../helpers';

export function separateData(
  unmodifiedData: UserData,
  uniqueIdKey: string,
  modifiedData: Record<string, any> = {}
): SeparatedObject {
  if (isDbArray(unmodifiedData, uniqueIdKey)) {
    return separateArrayData(unmodifiedData, modifiedData, nestedObj =>
      separateData(nestedObj, uniqueIdKey, modifiedData)
    );
  }
  if (isDbObject(unmodifiedData, uniqueIdKey)) {
    return separateObjectData(
      unmodifiedData,
      uniqueIdKey,
      modifiedData,
      nestedObj => separateData(nestedObj, uniqueIdKey, modifiedData)
    );
  }

  return unmodifiedData;
}
