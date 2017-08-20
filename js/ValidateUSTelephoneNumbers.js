#!/usr/bin/env js
                        
function telephoneCheck(str) {
  // Good luck!
  arr = str.match(/^(1 )?\d{3}[- ]?\d{3}[- ]?\d{4}$/);
  if ( arr != null)     
  {
    return true;
  }
  arr = str.match(/^(1 ?)?\(\d{3}\) ?\d{3}-\d{4}$/);
  if ( arr != null)     
  {
    return true;
  }
  return false;     
}



var ret = telephoneCheck("1 (555) 555-5555");
console.log(ret);
