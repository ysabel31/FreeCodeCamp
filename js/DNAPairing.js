#!/usr/bin/env js

function pairElement(str) {
  
  pair = {"A":"T","T":"A","C":"G","G":"C"}; 
  
               
  arr = str.split("");
  
  arrRet = [];
  
  for (i=0; i < arr.length; i++)
  {
   arrRet[i] = new Array(arr[i], pair[arr[i]]); 
    
  }
  
  return arrRet;
}

var ret = pairElement("GCG");
console.log(ret); 

