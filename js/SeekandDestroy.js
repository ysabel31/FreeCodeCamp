#!/usr/bin/env js

function destroyer(arr) {
  // Remove all the values
  console.log(arguments);
  
  for (indice = 1; indice <= arguments.length; indice++){
    filtre = arguments[indice];
    arr = arr.filter(function(val){
    console.log(val+' '+filtre);
    return val != filtre ;  
    });
  } 
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

