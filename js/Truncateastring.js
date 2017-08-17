#!/usr/bin/env js
function truncateString(str, num) {
  // Clear out that junk in your trunk
  
  var points = '...';
  
  console.log(str);
  
  if ( num <= 3 ){
    console.log(num);
    console.log('str.substr(0, num) '+str.substr(0, num));
    str = str.substr(0, num) + points;      
  }
  else if (str.length > num) 
  {
      str = str.substr(0, num - 3) + points;            
  } 
  
     
  console.log(str);
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

