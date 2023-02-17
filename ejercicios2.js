const businessHour = h =>{
  return (h >= 9  && h <= 18) ? true : false;
}

const businessDay = d =>{
  return (d > 0 && d < 6) ? true : false;
}

const laboralTime = (h,d) =>{
  const sad = new Date(2023,1,2,16);

  console.log(businessHour(h))
  console.log(businessDay(d))
}

laboralTime(15, 4);

// Ejercicio 04
// Escribir una funcion que regrese la cantidad de valores true que hay en un array
/* 
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
 */
// Regresar 0 si el array es vacio
// usar recurcion

let i = 0, count = 0;

const countTrue = arrayTrue =>{
  if(arrayTrue[i] == true){
    count ++;
  }
  if(i <= arrayTrue.length){
    i++;
    countTrue(arrayTrue);
  }
  return count;
}

//console.log(countTrue([true, false, true, false, false]));

// Ejercicio 05
// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion

const maximoComunDivisor = (n1, n2) => {
  if (n2 === 0){
    return n1;
  }
  return maximoComunDivisor(n2, n1 % n2);
};

console.log(maximoComunDivisor(12,5));

// Ejercicio 06
// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion 

const serieFibo = (limit) =>{
  var fibo = [0,1];
  
  for(let i=2; i <= limit; i++){
    fibo.push(fibo[i-1] + fibo[i-2]);
  }
  return fibo;
}

//console.log(serieFibo(11))
	
// Ejercicio 07
// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos

const arrayCircles = [];
i = 0;
const tamPiramide = nivel => {
  
  while(i < nivel){
    i
    if(i == 0){
      arrayCircles.push(1);
    }
    else if(i == 1){
      arrayCircles.push(1);
      arrayCircles.push(1);
    }
    else{
      arrayCircles.push(1);
      for(let m = 0; m < arrayCircles.length; m++){
        
        let num = arrayCircles[m] + arrayCircles[m+1];
        arrayCircles.push(num);
      }
      arrayCircles.push(1);
      
    }
    i++;
    console.log(arrayCircles.length);
    console.log(arrayCircles);
  }
  return arrayCircles.length;
}

[1,1,1,1,2,1]
console.log(tamPiramide(3));

// Ejercicio 08
// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%

// 510000000 / 100 * 32= 165,44

// Ejercicio 09
// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit

// Ejercicio 10
// Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"
