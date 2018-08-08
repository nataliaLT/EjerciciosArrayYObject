/*//Ejercicios de array
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
   /*return str.split(expresionRegular).join(' ');
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
//Ejercicios de Objects
 function addArrayProperty(obj, key, arr) {
  obj.key = arr;  // le digo que mi clave key es igual a mi clave arr del mi objeto obj
}

//Ejercicio contador de propiedades
const objectPropertiesCounter = (obj) => {
  var resultado = Object.keys(obj); // creo una variable con mi metodo 
  return resultado.length; //retorno mi variable
 }

// Ejercicio listAlValues
 function listAllValues(obj) {
  var resultado = Object.values(obj) //creo una variable que contiene mi metodo que me entregara el arreglo, en el entre parentesis va el objeto al que le hare el un arreglo con las propiedades
  return resultado;
}

// Ejercicio getElementOfArrayProperty
function getElementOfArrayProperty(obj, key, index) {
  var hola= [];
  resultado = hola.map(function(element){ 
     return element.key; }).indexOf(index);
  }//solo no me corre el ultimo test 

//Ejercicio getAllKeys
function getAllKeys(obj) {
  var resultado = Object.keys(obj);
  return resultado;
}

//Ejercicio addFullNameProperty
function addFullNameProperty(obj) {
  var values = Object.values(obj);
  obj.fullName = values.join(' ');
}

//Ejercicio getSumOfAllElementsAtProperty
function getSumOfAllElementsAtProperty(obj, key) {
  var sum= 0;
  if(Array.isArray(obj.key)=== false || obj.key === 0){
    return 0;
  } for( var arr in obj.key){
     sum += obj.key[arr];
  }
  return sum; 
}

//Ejercicio transformEmployeeData
function transformEmployeeData(array) {
  var arr= [];
   for (var i = 0; i < array.length; i++){
       var objeto = {};
       for (var a = 0; a < array[i].length; a++){
           objeto[array[i][a][0]] = array[i][a][1];
       }
       arr.push(objeto);
   }
   return arr;
 }*/

