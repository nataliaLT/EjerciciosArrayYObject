//Ejercicios de array
//Ejercicio computeAverageLengthOfWords
function computeAverageLengthOfWords(word1, word2) {
    let resultado = (word1.length + word2.length)/2;
    return resultado
  }

//Ejercicio getNthElement
function getNthElement(array, n) {
    let output = ([array], n);
    for(let i >0; array.legnth; ++i);
 }
 console.log(output)

 //Ejercicio convertDoubleSpaceToSingle
 function convertDoubleSpaceToSingle(str){ 
    let expresionRegular = /\s* \s*/;
   return str.split(expresionRegular).join(' ');
  }  

//Ejercicio areValidCredentials
function areValidCredentials(name, password) {
    if(name.length > 3 && password.length >8){
      return true;
    }else {
      return false;
    }
}
//Ejercicio findPairForSum
function findPairForSum(array, number) {
    for(var i=0; i<array.length; i++){
      for(var a= i+1; a<array.length; a++){
        if(array[i] + array[a]== number){
          var hola= [array[i], array[a]];
        }
      }
    }return hola;
    }

//Ejercicio filterOddElements
function filterOddElements(arr) {
    let impar=[];
     for(let i = 0; i<arr.length; i++){
         if(arr[i]%2!== 0){
           impar.push(arr[i]);
             
         }
     }return impar;
 }

/*Ejercicios de Objects
addArrayProperty();
function addArrayProperty(obj, key, array){
     let obj = {};
     let key = 'myProperty';    
     let array= [1,3];
     
    obj.key = 'myProperty';

        } 
    length  +/
      
       
      
    
  
  /*alertas();
  function alertas(){
      alert('hola');}*/