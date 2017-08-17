#!/usr/bin/env js
function whatIsInAName(collection, source) {
  // What's in a name?
  // Only change code below this line
  //console.log(collection);
  
  //for(indice=0; indice <= collection.length; indice++)
  return collection.filter(function(element) 
  {
    for (var key in source)
    {
      if (element.hasOwnProperty(key))
      {
        if ( element[key] != source[key])
        {
          return false;
        }       
      } 
      else
      {
        return false;
      }        
     }
     return true; 
  });  
  // Only change code above this line
  
}
  

var tableau  = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

for(indice=0; indice < tableau.length; indice++)
{  
   console.log(tableau[indice]);
}  
