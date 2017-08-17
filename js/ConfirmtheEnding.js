#!/usr/bin/env js
function confirmEnding(str, target) {
  var pos;
  if (str.length > target.length) { 
    pos = str.length - target.length;
    console.log(pos);
  }  
  else
    return false;
  console.log(str.substr(pos, target.length));
  console.log(str);
  console.log(target);
  if ( str.substr(pos, target.length ) == target )
    return true;
  else
    return false;
}

var a = confirmEnding("Bastian", "n");
console.log(a);
