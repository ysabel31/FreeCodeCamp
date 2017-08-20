#!/usr/bin/env js
function dropElements(arr, func) {
  for (i = 0;i< arr.length;i++)
  {
    if ( func(arr[i]) )
      return arr.slice(i,arr.length);
  }
  return [];   
}

var ret = dropElements([1, 2, 3], function(n) {return n < 3; });
console.log(ret);
