#!/usr/bin/env js
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var tableau=[];
  for(i=0; i < arr.length ; i+=size){
    tableau.push( arr.slice(i, i+size) );
    
    console.log("tableau : " + tableau);
  }
  console.log("tableau : " + tableau);
  return tableau;
  
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

