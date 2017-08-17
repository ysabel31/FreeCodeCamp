#!/usr/bin/env js
function findLongestWord(str) {
  var tableau = str.split(' ');
  var  longueur = 0;
  console.log(tableau.length);
  for (i=0;i<tableau.length;i++){
    if (longueur < tableau[i].length ){
      longueur = tableau[i].length;
    }
  }
  return longueur;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

