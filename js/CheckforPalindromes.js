#!/usr/bin/env js
function palindrome(str) {
  
  // Good luck!
 str = str.replace(/[^a-zA-Z0-9]/g,'');
 str = str.toLowerCase();
  
 tableau = str.split("");
 tableau = tableau.reverse();
 var reconstruit = tableau.join("");
 if (reconstruit == str)
  return true;
 else
  return false;
}

palindrome("eye");

