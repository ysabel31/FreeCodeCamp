#!/usr/bin/env js
function steamrollArray(arr) {
  var arrRet = [];
  // I'm a steamroller, baby
  console.log("longueur = "+arr.length+" ");
  console.log(arr);
  for ( var i = 0 ; i < arr.length; i++)
  { 
    console.log("indice"+i);
    if ( Array.isArray(arr[i]) === true) 
    {
      if ( arr[i].length !== 0 )
      { 
        var tmp = steamrollArray(arr[i]);
       
        for(var j=0; j< tmp.length;j++)
        {
          arrRet.push(tmp[j]);
        }
      }        
    }
    else
    {
      arrRet.push(arr[i]); 
    }        
  } 
  return arrRet;
}

//var ret = steamrollArray([[["a"]], [["b"]]])
//console.log(ret);

var ret = steamrollArray([1, [2], [3, [[4],5]]]);
console.log(ret);
