export function splitArrary (arr, len) {
  var arrLen = arr.length;
  var newArr = [];
  for (var i = 0; i < arrLen; i += len) {
      newArr.push(arr.slice(i, i + len));
  }
  return newArr;
}