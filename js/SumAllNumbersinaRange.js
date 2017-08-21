#!/usr/bin/env js
function sumAll(arr) {
  
  var somme =0;
  
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);

  for(var i = min; i <= max; i++) 
  {
    somme += i;
  } 
  return somme;
}

var ret = sumAll([1, 4]);
console.log("Somme :"+ret);

