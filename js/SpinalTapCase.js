#!/usr/bin/env js
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/\s/g,'-');
  str = str.replace(/_/g,'-'); 
  str = str = str.replace(/([a-z])([A-Z])/g,'$1-$2');  

  str =str.toLowerCase();
  return str;
}

var ret = spinalCase('thisIsSpinalTap');
console.log(ret);


