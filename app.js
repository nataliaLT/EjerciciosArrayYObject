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
    for(var i=0; i<array.length; i++){//creo un for para recorrer el arreglo
      for(var a= i+1; a<array.length; a++){//creo un segundo for pero este debe tener otro con otro indice para que sea distinto al de arriba, debe partir desde i+1 para que no me sume el mismo numero por ejemplo 4+4= 8 
        if(array[i] + array[a]== number){//mi condicion es que sume mis dos arreglos y si son igual a number 
          var hola= [array[i], array[a]];//los guarde en una variable que es un arreglo con los dos arreglos
        }
      }
    }return hola;
    }

//Ejercicio filterOddElements
function filterOddElements(arr) {
    let impar=[];//creo una variable con un arreglo vacio para poder guardar mi nuevo arreglo
     for(let i = 0; i<arr.length; i++){
         if(arr[i]%2!== 0){//creo una condicion que si arr, residuo de 2 es distinto a cero , es un numero impar
           impar.push(arr[i]);
             
         }
     }return impar;
 }
 //Ejercicio findSmallstNumerAmongMixedElements
 function findSmallestNumberAmongMixedElements(arr) {
    var hola = arr.sort();//creo una variable , la cual contiene mi funcion sort, que ordena mi arreglo
      if(arr.length === 0 || typeof hola[0] === 'string'){//le pongo una condicion si al recorrer mi arreglo no encuentra nada, es decir esta vacio, debe retornarme 0, o si dentro de mi arreglo el primer elemento es un string tambien debe retorname 0.
        return 0;
      }
      return hola[0];//si no tiene ninguna de las dos condiciones arriba, debe retornarme el primer elemento de mi nuevo arreglo 
    
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