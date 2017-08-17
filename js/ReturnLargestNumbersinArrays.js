#!/usr/bin/env js
function largestOfFour(arr) {
  // You can do this!
  var plusGrand = [[0],[0],[0],[0]];
  //console.log(plusGrand);
  for(i=0;i<arr.length;i++){
  var longueur = 0;
  for(j=0;j<arr[i].length;j++){
      if (longueur < arr[i][j] ){
          longueur = arr[i][j];
          plusGrand[i] = arr[i][j];        
      } 
    }    
  }
  //console.log(plusGrand);
  return plusGrand;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


