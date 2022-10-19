'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.root = value;
   this.left = null;
   this.right = null;
   
};

BinarySearchTree.prototype.insert = function(value, current=this){
   let newTree = new BinarySearchTree(value);
   
   if(current.root > newTree.root) {
      if(!this.left) {
         current.left = newTree;
         return newTree.value;
      } else {
         current = current.left;
         return this.insert(value, current);
      }
   }

   if(current.root <= newTree.root) {
      if(!current.right) {
         return current.right = newTree;         
      } else {
         current = current.right;
         this.insert(value, current);
      }
   }   
};

BinarySearchTree.prototype.size = function(current = this){
  
   if(!current.right && !current.left) return 1;
   if(!current.right && current.left) return 1 + this.size(current.left);
   if(current.right && !current.left) return 1 + this.size(current.right);
   if(current.right && current.left) return 1 + this.size(current.right) + this.size(current.left);

};

BinarySearchTree.prototype.contains = function(value, current = this){
   if(value === current.root){return true} 
   if(!current.right && !current.left) {return false}
   if(current.right && !current.left) {return this.contains(value, current.right)}
   if(!current.right && current.left) {return this.contains(value, current.left)}
   if(current.right && current.left) {return this.contains(value, current.left) || this.contains(value, current.right)}
};


var tree = new BinarySearchTree(20);
console.log(tree);

tree.insert(15)
console.log(tree)




BinarySearchTree.prototype.depthFirstForEach = function(){};
BinarySearchTree.prototype.breadthFirstForEach = function(){};




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
