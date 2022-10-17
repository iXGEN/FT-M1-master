'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if(n === 1 || n === 0) return 1;
   if(n < 0) return 0;

   return n * nFactorial(n - 1);

}

// EJERCICIO 2
function nFibonacci(n) {

  if(n < 2) return n;

  return nFibonacci(n - 1) + nFibonacci(n - 2);  

         //Lo que hay en la posición es la suma de las 2 posiciones anteriores;
         //Hasta llegar a la posición 1 y 0 que por default son 1 y 0 respectivamente;
                           //3 = 2 + 1
                              //2 = 1 + 1
                                 //1 = 1 + 0       //(0)(1)(2)(3)(4)(5)(6)
                                                   // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…
}


// EJERCICIO 3
//En este último ejercicio no será necesario que utilices recursión. Aquí deberás implementar una clase llamada Queue. 
//Esta clase tendrá distintos métodos que reflejarán el comportamiento característico de la estructura de datos. 
//Te invitamos a que resuelvas este ejercicio de las dos maneras posibles:

//-  Con clases normales (ECMAscript 2015).
//-  Con una función constructora.

function Queue() {
   this.queue = [];
}

Queue.prototype.enqueue = function(element) {
  this.queue.push(element);
}
Queue.prototype.dequeue = function() {
   if(this.queue.length < 1) return undefined;
   return this.queue.shift();
}
Queue.prototype.size = function() {
   return this.queue.length;
}

let nuevaCola = new Queue();


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
