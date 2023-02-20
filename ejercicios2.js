/* 
  Crear sistema de calendario para verificar si el dia actual, junto a la hora es 
  considerada dia y horario laboral estandar
    9am - 6pm es horario laboral
    new Date().getDay() resulta en el dia de la semana del 0-6

  Funcion businessHours
  Parametros
    hour <- Hora actual
  return
    true / false si la hora actual es horario laboral
  Funcion businessDay
  Parametros
    day
  return
    true / false si la hora actual es horario laboral
  Verificacion de la resolucion de ambas funciones debe mostrar un mensaje

*/

const businessHour = () =>{
  const hour = new Date().getHours();
  return  (hour >= 9 && hour <= 18) ? true : false;
}

const businessDay = (day) =>{
  const d = new Date(2023,1,day).getDay();
  return (d > 0 && d < 6) ? true : false;
}

const laboralTime = d =>{
  return (businessHour() === true && businessDay(d) === true) ? true : false;
}

console.log(laboralTime(20));

/*
  Ejercicio 04
  Escribir una funcion que regrese la cantidad de valores true que hay en un array
 
  countTrue([true, false, false, true, false]) ➞ 2

  countTrue([false, false, false, false]) ➞ 0

  countTrue([]) ➞ 0
  
  Regresar 0 si el array es vacio
  
  usar recurcion
 */

let i = 0, count = 0;

const countTrue = arrayTrue =>{
  if(arrayTrue[i] == true){   //  Al entrar a la funcion verificamos si el elemento actual del array es true
    count ++; //  Al ser true, aumentamos el contador
  }
  if(i <= arrayTrue.length){  //  Si el array no ha llegado al final entra en la funcion para aumentar el indice del array
    i++;
    countTrue(arrayTrue); //  Y realizar la recursividad, para llegar al ultimo elemento del array y retornar el contador
  }
  return count; //  la funcion finaliza retornando el cotador final
}

console.log(countTrue([true, false, true, false, false]));

// Ejercicio 05
// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion

// const maximoComunDivisor = (n1, n2) => {
//   return (n2 === 0) ? n1 : maximoComunDivisor(n2, n1 % n2); //  Esta es una formula matematica que ya esta compuesta para enviar un residuo de dos numeros
// };

const maximoComunDivisor = (n1, n2) => {
  if(n2 === 0){
    n1
    n2
    return n1;
  }
  else{
    n1
    n2
    maximoComunDivisor(n2, n1 % n2);
  }
};

console.log(maximoComunDivisor(81,9));

// Ejercicio 06
// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion 

const serieFibo = (num) =>{
  if(num != 0){ //  Esta comprovacion es para validar que no se quede en 0 la serie
    let fibo = [0,1]; //  Inicializamos los 2 primeros elementos para facilitar la obtencion de la serie 
    for(let i=2; i <= num; i++){  //  Se inicializa i en 2 porque los primeros dos elementos ya los tenemos
      fibo.push(fibo[i-1] + fibo[i-2]); //  Para obetener el siguiente elemento de la serie, sumamos los dos elementos anteriores
    }
    return fibo;
  }
  return 0;
}

console.log(serieFibo(16))
	
// Ejercicio 07
// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos

const tamPiramide = (nivel) => {
  return (nivel * (nivel+1)*(nivel+2))/6; //  Esta es una formula matematica que ya esta compuesta para dar el valor del tamaño de la piramide
}

console.log(tamPiramide(2));

// Ejercicio 08
// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%

const tierra = 148939390.2439024;

const areaPais = (pais, area) => {  //  Esta operacion es una regla de 3 para obtener el porcentaje del area
  return `El país de ${pais} tiene un %${((area / tierra)*100.).toFixed(2)} de la superficie de la tierra`;
} //                                                           .toFixed limita los decimales 

console.log(areaPais('Rusia',17098242))
  
// Ejercicio 09
// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit

const trans = i => {
  const array = ['1','0'];  //  retornamos el elemento del array con el indice que nos da el usuario
  return array[i];
}

console.log(trans(0));

// Ejercicio 10
// Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"

const MessengerBzzz = num => {  //  Tenemos un case para los 4 casos probables
  switch(true){
    case num <= 0:  console.log("No hay nadie en linea");  //  Validamos para los negativos y el 0
                    break;
    case num == 1:  console.log("user1 esta en linea");
                    break;
    case num == 2:  console.log("user1 y user2 estan en linea");
                    break;
    case num >= 3:  console.log(`user1 y ${num-1} mas estan en linea`); //  Y este para todos los casos arriba de 3 
                    break;
    default:  console.log(`Número inválido, por favor ingrese un número válido`);
              break;
  }
}

MessengerBzzz(5);