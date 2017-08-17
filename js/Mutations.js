#!/usr/bin/env js
function mutation(arr) {
    
    var recherche = arr[0].toLowerCase();
    var chaine = arr[1].toLowerCase();  
    
  
    for(i = 0; i < chaine.length; i++)
    {
      /*console.log('chaine['+i+'] = '+ chaine[i]);     
      console.log('chaine '+chaine);
      console.log('recherche '+recherche);
      */
      if (recherche.indexOf(chaine[i]) == -1)
      {
        console.log('false');      
        return false;
      }    
    }    
    return true;      
}

mutation(["hello", "helyl"]);





