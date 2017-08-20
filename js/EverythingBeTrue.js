#!/usr/bin/env js
function truthCheck(collection, pre) {
  // Is everyone being true?
  var trouve = true;
  collection.forEach(function(element) {
    console.log(element);
    if (! element.hasOwnProperty(pre) || ! element[pre])
    {
      trouve = false; 
    }  
  });
  return trouve;
}

var ret = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
console.log(ret);
