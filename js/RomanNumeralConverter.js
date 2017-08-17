#!/usr/bin/env js
function convertToRoman(num) {
  var tabCorr = [];
  var tabNum = [];
  tabCorr[1]= "I";
  tabCorr[2]= "II";
  tabCorr[3]= "III";
  tabCorr[4]= "IV";
  tabCorr[5]= "V";
  tabCorr[6]= "VI";
  tabCorr[7]= "VII";
  tabCorr[8]= "VIII";
  tabCorr[9]= "IX";
  tabCorr[10]= "X";
  tabCorr[20]= "XX";
  tabCorr[30]= "XXX";
  tabCorr[40]= "XL";
  tabCorr[50]= "L";
  tabCorr[60]= "LX";
  tabCorr[70]= "LXX";
  tabCorr[80]= "LXXX";
  tabCorr[90]= "XC";
  tabCorr[100]= "C";
  tabCorr[200]= "CC";
  tabCorr[300]= "CCC";
  tabCorr[400]= "CD";
  tabCorr[500]= "D";
  tabCorr[600]= "DC";
  tabCorr[700]= "DCC";
  tabCorr[800]= "DCCC";
  tabCorr[900]= "CM";  
  tabCorr[1000]= "M";
  tabCorr[2000]= "MM";
  tabCorr[3000]= "MMM";
  
  var chaine=''; 
  tabNum = num.toString().split("").reverse();
  console.log("tab  "+tabNum);
  for ( indice = tabNum.length;indice>=0; indice--)
  {
    if (typeof tabNum[indice] !== 'undefined' && tabNum[indice]> 0) 
    {  
      chaine += tabCorr[tabNum[indice]*Math.pow(10,indice)];
    }  
  }  
  
  console.log("chaine " + chaine);
  return(chaine);
}

convertToRoman(3999);
