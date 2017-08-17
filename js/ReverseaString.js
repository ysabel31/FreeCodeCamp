#!/usr/bin/env js

function reverseString(str) {
  var tableau = str.split("");
  tableau = tableau.reverse();
  return tableau.join("");
  //return str.split("").reverse().join("");
}
  
reverseString("hello");

