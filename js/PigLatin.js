#!/usr/bin/env js
function translatePigLatin(str) {
 
  arr = str.split("");
  caractere = arr[0];
  suffixe = "ay";
  
  if (caractere.match(/[aeiouy]/))
  {
    return str+"w"+suffixe;                     
  }
  else
  {
    var i = 0;    
    var chaineRet="";
    var copy=[];
    
    while (i <= arr.length )
    {  
      if (! arr[i].match(/[aeiouy]/)){
        copy.push(arr[i]);           
        i++;
      }
      else
      {  
        arr.splice(0,i);
        chaineRet = arr.join("")+copy.join("")+suffixe;         
        break;
      }
    } 
    return chaineRet;
  }  
}

var ret = translatePigLatin("glove");

console.log("retour ="+ret);

