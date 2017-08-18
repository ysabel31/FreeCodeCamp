#!/usr/bin/env js
function uniteUnique(arr) {  
  var tab = [];
  
  
  for(i=0;i<arguments.length;i++)
  {
    for(j=0; j < arguments[i].length;j++)
    {
      if ( tab.indexOf(arguments[i][j], 0) === -1){
        console.log("pas trouve "+arguments[i][j]);
        tab.push(arguments[i][j]);
      } 
    }  
  }  
  return tab;
}

var ret = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(ret);
