#!/usr/bin/env js
function titleCase(str) {
  str = str.toLowerCase();
  var aMots = str.split(" ");  
  console.log(aMots);
  
  for(i=0;i<aMots.length; i++){
    //console.log(i);    
    var aLettres = aMots[i].split("");
    //console.log(aLettres);
    aLettres[0] = aLettres[0].toUpperCase();
    aMots[i] = aLettres.join("");
    str = aMots.join(" ");
    //console.log( i + ' ' + aMots[i]); 
  }  
  return str;
}

titleCase("I'm a little tea pot");


