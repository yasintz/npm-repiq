function separateArrayData(
  unmodifiedArray: Array<any>,
  modifiedData: any,
  baseSeparateFn: (obj: any) => any
) {
  unmodifiedArray.forEach((nestedUnmodifiedData: any) => {
    Object.assign(modifiedData, baseSeparateFn(nestedUnmodifiedData));
  });

  return modifiedData;
}

export default separateArrayData;
