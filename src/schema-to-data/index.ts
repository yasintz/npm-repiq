import { MaybeArray, Schema, SeparatedObject, UserData } from '../helpers';
import { isArray } from '../utils';

function arraySchemeToData(
  schema: Array<Schema>,
  seperatedObj: SeparatedObject
) {
  return schema.map(item => schemaToData(item, seperatedObj));
}

function objectSchemaToData(
  schema: Schema,
  baseItem: SeparatedObject,
  seperatedObj: SeparatedObject
) {
  const databaseObjects = JSON.parse(JSON.stringify(baseItem));
  if (schema.props) {
    const schemaProps = schema.props;
    Object.keys(schemaProps).forEach(prop => {
      databaseObjects[prop] = schemaToData(schemaProps[prop], seperatedObj);
    });
  }

  return databaseObjects;
}

function schemaToData(
  schema: MaybeArray<Schema>,
  seperatedObj: SeparatedObject
): UserData {
  if (isArray(schema)) {
    return arraySchemeToData(schema, seperatedObj);
  }
  if (!schema || typeof schema !== 'object') {
    return null;
  }
  const baseItem = seperatedObj[schema.id];
  if (!baseItem) {
    return null;
  }
  return objectSchemaToData(schema, baseItem, seperatedObj);
}

export default schemaToData;
