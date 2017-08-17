#!/usr/bin/env js
function rot13(str) { // LBH QVQ VG!
  var tab="";
  for (indice =0 ; indice < str.length; indice ++ ){
    var num = str.charCodeAt(indice);
    if ( num >= "A".charCodeAt(0) && num <= "Z".charCodeAt(0) ){ 
      num = num+13;
    
      if (num > "Z".charCodeAt(0) )
        num = num -26;
    }                               
    tab += String.fromCharCode(num);
  }
  return tab;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

