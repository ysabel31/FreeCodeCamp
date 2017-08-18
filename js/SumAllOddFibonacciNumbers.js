#!/usr/bin/env js
function sumFibs(num) {
  
  var precedent = 0;
  var courant = 1;
  var resultat = 0;
  
  while (courant <= num) {
    if (courant % 2 !== 0) 
    {
      resultat += courant;
    }
    
    var mem = courant + precedent;
    precedent = courant;
    courant = mem;
  }
  return resultat;
}

var num = sumFibs(10);
console.log(num);
