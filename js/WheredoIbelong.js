#!/usr/bin/env js

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a, b) {
    return a - b;
  });
  
  console.log("arr => "+ arr);
  for (indice = 0 ;indice <= arr.length; indice ++){
    if ( arr[indice] >= num ){
      return indice;
    }       
  }
  return arr.length;
}

getIndexToIns([10, 20, 30, 40, 50], 30);

