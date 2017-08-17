#!/usr/bin/env js

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
      case "a":
        answer = "apple";
        break;  
      case "b":
        answer = "bird";   
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
  } 
  return answer;
}

// Change this value to test
switchOfStuff(1);


