#!/usr/bin/env js
function isPrime(num)
{
  //Controle nombre impair
  if ( num % 2 == 0) {
    return false;
  }

  var racineCarre = Math.sqrt(i);
  //Test racine carré = entier
  if ( racineCarre % 1 == 0){
    return false;
  } 

  //Pour seulement nombres impair entre trois et la racine carré de num
  for(j=3; j <= racineCarre; j+=2)
  {
    // verifie divisible par indice
    if ( num % j == 0) {
      return false;
    }   
  }
  return true;
}

function sumPrimes(num) 
{
  var somme = 2;
  for(i=3; i <= num; i++)
  {
    if (isPrime(i) )     
      somme += i;
  }
  return somme;
}
  
var ret = sumPrimes(977);
console.log("Somme"+ret);
