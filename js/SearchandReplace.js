#!/usr/bin/env js

function myReplace(str, before, after) {
  console.log(str);
  arrBefore = str.split(" ");
  arrAfter=[];
  arrAfter = arrBefore.map(function(val){
    if ( val == before){
      var strSplit = val.split("");
      console.log("0  = "+strSplit[0]);
      console.log("0l = "+strSplit[0].toLowerCase());
      
      if (strSplit[0].charCodeAt(0) >= "a".charCodeAt(0) && strSplit[0].charCodeAt(0) <= "z".charCodeAt(0))
      { 
        console.log("egale");
        return after.toLowerCase();
      } 
      else{
        var afterSplit = after.split("");
        afterSplit[0] = afterSplit[0].toUpperCase();
        return afterSplit.join("");
      }
    }
    else
    {
      return val;
    }      
  });
  
  return arrAfter.join(" ");
}

var ret = myReplace("Let us go to the store", "store", "mall");
console.log(ret);
