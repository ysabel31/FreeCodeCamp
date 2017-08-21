#!/usr/bin/env js
function diffArray(arr1, arr2) 
{  
  if (arr1.length == 0)
  {
    return arr2;
  }
  if (arr2.length == 0)
  {
    return arr1;
  }
  
  var arrConcat = arr1.concat(arr2);
  var arrDiff = [];  
  
  while(arrConcat.length > 0)
  {
    var element = arrConcat.shift();
    var retIndex = arrConcat.indexOf(element);
    
    if (retIndex === -1)
    {
      arrDiff.push(element);
    }  
    else
    {
       arrConcat = arrConcat.filter( function(val) { return val != element;});  
    }    
  }  
  return arrDiff;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

