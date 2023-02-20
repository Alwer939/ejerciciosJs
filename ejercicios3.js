///////////////////////Ejercicios///////////////////////

// Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante
// secretName(["Felipe", "Fer", "Zabdiel"]) -> FFZ
// secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']) -> CJMPRR
// secretName(['Harry', 'Ron', 'Hermione']) -> HHR

const secretName =  (names = []) =>{
  names.sort();
  let secret = '';
  for(let i=0; i<names.length; i++){
    secret = secret + names[i][0];
  }
  return secret;
}

console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']))

// onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']) -> 'mockIng99, J0eyPunch and one 1 more online'

const onlineStatus = (arr) =>{
  let status = `${arr[0]}, ${arr[1]} and ${arr.length - 2} more online`;
  return status;
}

console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']))
console.log(onlineStatus(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']))

// Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]

const arrayMultiplos = (n,l) =>{
  const arr = [n];
  let suma = n;
  for(let i=0; i<l-1; i++){
    arr.push((suma = suma + n));
  }
  return arr;
}

// const newNames = names.map(elemento => {
//   return elemento.toUpperCase();
// });


console.log(arrayMultiplos(17, 6))

// Escribir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
// positiveDom([-1, -3, -5, 4, 6767]) -> false

const positiveDom = (arr) =>{
  let pos = 0, neg = 0;
  for(let i = 0; i< arr.length; i++){
    if(arr[i] >= 0){
      pos++;
    }
    else{
      neg++;
    }
    // if(arr[i] == ){
    //   console.log(arr[i])
    //   return `El elemento ${arr[i]} no es un numero`;
    // }
    
  }
  if(pos > neg){
    return true;
  }
  else if(pos < neg){
    return false;
  }
  else{
    return "Dominante Neutro";
  }
}

console.log(positiveDom([-1, -3, 5, 4, 's' , 6767]))

// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]

const antipode = (arr) =>{
  const suma = [], arr2 = arr.slice(0, (arr.length /2));
  let arr3;
  if((arr.length % 2) == 0){
    arr3 = arr.slice((arr.length /2), arr.length);
  }
  else{
    arr3 = arr.slice(((arr.length /2)+1), arr.length);
  }
  arr3.reverse();
  for(let i = 0; i< arr2.length; i++){
    suma[i] = (arr2[i] + arr3[i]) / 2;
  }
  return suma;
}

console.log(antipode([1,2,3,5,22,6]))