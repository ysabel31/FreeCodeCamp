#!/usr/bin/env js
function addTogether() {
  if (arguments.length == 2)
  {
    if ( typeof arguments[0] == 	"number" && typeof arguments[1] == 	"number") 
      return arguments[0]+arguments[1];
    
  }
  if (arguments.length == 1)
    {
      if ( typeof arguments[0] == 	"number"  )
      {
        var arg = arguments[0];
        return function(val){ if ( typeof val == 	"number"  ) {return arg+val;} return undefined;} ;
      }
    }    
  return undefined;
}

var ret = addTogether(2)(3); 
console.log(ret);
