#!/usr/bin/env js
function fearNotLetter(str) {
  
  var codSav = str[0].charCodeAt(0);
  for(i=1;i<str.length;i++)
  {
    if (str[i].charCodeAt(0) > codSav+1)
    {     
      return String.fromCharCode(codSav+1);
    } 
    codSav++;      
    
  }  
  return undefined;
}

var ret = fearNotLetter("abce");
console.log("Lettre manquante "+ret);
