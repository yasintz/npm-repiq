import { objectForeach } from '../utils';

function separateObjectData(
  unmodifiedData: Record<string, any>,
  uniqueId: string,
  modifiedData: any,
  baseSeparateFn: (obj: any) => any
) {
  const dataId = unmodifiedData[uniqueId];

  modifiedData[dataId] = modifiedData[dataId] || {};

  objectForeach(unmodifiedData, (key, dataField) => {
    const parsedData = baseSeparateFn(dataField);
    if (parsedData === dataField) {
      modifiedData[dataId][key] = parsedData;
    } else [Object.assign(unmodifiedData, parsedData)];
  });

  return modifiedData;
}

export default separateObjectData;
