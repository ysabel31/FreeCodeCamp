#!/usr/bin/env js
function findElement(arr, func) {
  for (i = 0;i< arr.length;i++)
  {
    if ( func(arr[i]) )
      return arr[i];
  }
  return undefined;
}

var ret = findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
console.log(ret);

