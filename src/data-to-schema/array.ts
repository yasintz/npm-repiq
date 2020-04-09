import { MaybeArray, Schema } from '../helpers';

function isArraySchema(schema: MaybeArray<Schema>[]): schema is Array<Schema> {
  return schema.filter(item => item === null).length === 0;
}

function arrayDataToScheme(
  data: Array<Schema>,
  baseFn: (d: any) => MaybeArray<Schema>
): Array<Schema> | null {
  const arraySchema = data.map(childItem => baseFn(childItem));

  if (isArraySchema(arraySchema)) {
    return arraySchema;
  }

  return null;
}

export default arrayDataToScheme;
