#!/usr/bin/env js
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
  // Only change code below this line
  for (var index = 0; index <= contacts.length; index++ )
  {  
    for(var key in contacts[index])
    {
      if (contacts[index][key] == firstName)
      {

        //console.log('contacts.hasOwnProperty['+index+'].('+prop+')');
        if (contacts[index].hasOwnProperty(prop))
        {
          //console.log(prop + " = " + contacts[index][prop] + '<br>');        
          return contacts[index][prop];
        }  
        else
        {
          return ("No such property");
        }  
      }
    }
  }
  return ("No such contact");
}
// Only change code above this line
// Change these values to test your function
var chaine = lookUpProfile("Akira", "likes");
console.log(chaine);
