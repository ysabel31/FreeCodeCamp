#!/usr/bin/env js
function slasher(arr, howMany) {
  console.log('arr '+arr); 
  // it doesn't always pay to be first
  if (arr.length > howMany){
    arr.splice(0,howMany);
    console.log('arr après splice '+arr);
  }else
  {
    arr = [];
  }  
  
  return arr;
}



slasher([1, 2, 3], 2);

