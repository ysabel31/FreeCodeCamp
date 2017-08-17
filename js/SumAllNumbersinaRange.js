#!/usr/bin/env js
function sumAll(arr) {
  
  var somme =0;
  
  var min = arr.reduce(function(a, b) 
  {
    console.log("valmin dans fonction "+a+" "+b);
    return Math.min(a, b);
  });

  var max = arr.reduce(function(a, b) 
  {
    return Math.max(a, b);
  });
  
  for(i=min;i<=max;i++){
    somme+=i;  
  }
  return somme;
}

var ret = sumAll([1, 4]);
console.log("Somme :"+ret);

