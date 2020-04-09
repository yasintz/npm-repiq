import arrayDataToScheme from './array';
import objectDataToScheme from './object';
import { isArray } from '../utils';
import { MaybeArray, Schema, UserData } from '../helpers';

function dataToSchema(data: UserData, uniqueId: string): MaybeArray<Schema> {
  if (typeof data !== 'object') {
    return null;
  }
  if (isArray(data)) {
    return arrayDataToScheme(data, childData =>
      dataToSchema(childData, uniqueId)
    );
  }

  if (!data[uniqueId]) {
    return null;
  }
  return objectDataToScheme(data, uniqueId, child =>
    dataToSchema(child, uniqueId)
  );
}

export default dataToSchema;
