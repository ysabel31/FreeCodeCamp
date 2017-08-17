#!/usr/bin/env js
function factorialize(num) {
  if (num > 0) {
    console.log(num);     
    return num * factorialize(num - 1);
  }else{return 1;}
}

a = factorialize(5);
