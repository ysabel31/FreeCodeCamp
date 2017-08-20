#!/usr/bin/env js
//noprotect
function compare(x, y) {
  return x-y;
}

function isMultiple(num,facteur1,facteur2)
{
  
  for( facteur = facteur1; facteur <= facteur2; facteur++)
  {  
    //Test entier
    if ( num % facteur != 0)
    {
      return false;
    }
  }  
  return true;
}

function smallestCommons(arr) 
{
  var multiple = false;
  var arret = false;

  arr.sort(compare);

  var resultat = arr[1]; 
 
  while (multiple == false) 
  {
    multiple = isMultiple(resultat,arr[0],arr[1]);       
    
    resultat++;
  } 

  return resultat-1;
}
  
var ret = smallestCommons([23,18]);

console.log("Plus petit multiple de "+ret);

