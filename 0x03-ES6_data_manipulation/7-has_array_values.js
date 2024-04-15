export default function hasValuesFromArray(DSet, DArray) {
  return DArray.every((ele) => DSet.has(ele));
}
