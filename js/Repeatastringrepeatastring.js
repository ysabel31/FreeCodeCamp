#!/usr/bin/env js
function repeatStringNumTimes(str, num) {
  // repeat after me
  var chaine='';
  if (num > 0 )
  {  
    for(i=1;i<=num;i++){
      chaine += str;
      console.log(chaine);
    }
  
  } 
  return chaine;
}

repeatStringNumTimes("abc", 2);
