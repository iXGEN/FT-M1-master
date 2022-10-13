# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;          //1. asignar valor a var no declarada
var a = 5;      //2. declarar var a
var b = 10;      //3. declarar var b
var c = function (a, b, c) {    //4. decl var c --> 6.leer function
   var x = 10;          //7. declr var x dentro de c
   console.log(x);      //8. prints x... 10
   console.log(a);      //9. prints a... 8
   var f = function (a, b, c) {   //10. decl f 
      b = a;            //12. b=8(a)
      console.log(b);   //13. prints b...8
      b = c;            //14. b=10(c)
      var x = 5;        //15. decl var x interna
   };
   f(a, b, c);      //11. call() f con los valores ingresado a c()
   console.log(b);   //16. prints b... 9
};
c(8, 9, 10);      //5. call() c
console.log(b);  //17. prints b...10
console.log(x);  //prints x...1

//prints 10 8 8 9 10 1
```

```javascript
console.log(bar);    //1. prints... undefined... no se ha asignado valor a bar
console.log(baz); //2. baz ni siquiera se ha declarado... ReferenceError: baz is not defined
foo();      //3. aquí seguiría si no hubiera error//call la function
function foo() {  //4. leería la function
   console.log('Hola!');  //5. printearia 'Hola!'
}
var bar = 1;    //6. declararia y asignaria valor a bar
baz = 2;         //7...
```

```javascript
var instructor = 'Tony';   //1. decl var instructor
if (true) {                //2. if true... es true asi que ejecuta
   var instructor = 'Franco'; //3. var instructor ahora es 'Franco'
}
console.log(instructor);     //4. prints instructor... 'Franco'
```

```javascript
var instructor = 'Tony';  //1. decl var instructor y asigna valor 'Tony'
console.log(instructor);  //2. prints instructor...'Tony'
(function () {    //3. function anonima
   if (true) {  //4. if true, es true asi que ejecuta codigo
      var instructor = 'Franco';  //5. declara var (interna) 'Franco'
      console.log(instructor);    //6. prints instructor...'Franco'
   }
})();
console.log(instructor);//7. prints 'Tony'

//prints 'Tony' 'Franco' 'Tony'
```

```javascript
var instructor = 'Tony';    //1. decl instructor
let pm = 'Franco';          //2. decl pm con scope global
if (true) {                  //3. if true, ejecuta código
   var instructor = 'The Flash';  //4. var instructor ahora es 'The Flash'
   let pm = 'Reverse Flash'; //5. pm declarada con scope ''limitado'' vive y muere aqui ahora es 'Reverse Flash'
   console.log(instructor);  //6. prints instructor...'The Flash'
   console.log(pm);          //7. prints pm... 'Reverse Flash'
}
console.log(instructor);    //8. prints 'The Flash' porque se declaró con la keyword var
console.log(pm);            //9. prints 'Franco'

//prints 'The Flash' 'Reverse Flash' 'The Flash' 'Franco'
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"  //2
"2" * "3" // '222'
4 + 5 + "px" //9px
"$" + 4 + 5  //'$9'
"4" - 2     //2
"4px" - 2   //NaN
7 / 0 // 0
{}[0]
parseInt("09")
5 && 2   // 
2 && 5
5 || 0
0 || 5
[3]+[3]-[10]
3>2>1
[] == ![]
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() { //1. declara function test
   console.log(a);  //3. lee function ... prints a... undefined
   console.log(foo());  //4. prints call de foo... //6. prints 2

   var a = 1;
   function foo() {  //5. foo es return 2
      return 2;
   }
}

test();  //2. call test()
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';  //1. declara snack

function getFood(food) {  //2. declara getFood
   if (food) {    //4. evalua parametro... false... no se ejecuta
      var snack = 'Friskies';
      return snack;
   }
   return snack;  //5. 
}          

getFood(false);  //3. call getFood con parámetro false
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';    //1. decl var fullname
var obj = {                     //2. decl objeto obj
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {    //4. este es getFullname
         return this.fullname;      //5. return fullname de el objeto prop(this) //6. el fullname de prop es 'Aurelio De Rosa'
      },
   },
};

console.log(obj.prop.getFullname());   //3. prints obj.prop.getFullname()... revisa lo que es... //6. prints 'Aurelio De Rosa'

var test = obj.prop.getFullname; //7. test es declarado y asignado con el valor de obj.prop.getFullname.... sin callearlo (sin el '()' en getFullname)

console.log(test()); //8. print test()... undefined, el call se debe poner en la función directamente... prints undefined
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {    //1. declara printing //3. revisa printing()
   console.log(1);        //4. print 1
   setTimeout(function () {  //5. print 2 luego de un time de 1000
      console.log(2);  
   }, 1000);
   setTimeout(function () {  //6. print 3 luego de time de 0
      console.log(3);
   }, 0);    
   console.log(4);    //7. print 4
} //en orden: print 1 4 3(time 0) 2(time 1000)

printing();    //2. callea printing()
```
