#!/usr/bin/env js
function diffArray(arr1, arr2) {
  
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
  
  var i=0;
  while(i < arrConcat.length)
  {
    var retIndex = arrConcat.indexOf(arrConcat[i],i+1);
    console.log("\n"+arrConcat[i]+" index"+retIndex);
    if (retIndex === -1)
    {
      arrDiff.push(arrConcat[i]);
      console.log(" Diff "+arrDiff);      
    }  
    else
    {
       arrConcat.splice(retIndex,1);
    }
    i++;
  }  
  return arrDiff;
}
