const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;  //потомок слева
    this.right = null; //потомок справа
  }
}


class BinarySearchTree {
  constructor() {
    this.rootTree = null;  //создаем корень дерева 
  }
  root() {
    if (!this.rootTree) {
      return null;
    } else {
      return this.rootTree;
    }
  } 

  add(data) {
  this.rootTree = addData(this.rootTree, data);

  function addData(nodeTree, data) {
      if (!nodeTree) {
          return new Node(data); //если узла нет, добавляем его
      }

      if (nodeTree.data === data) {
      return nodeTree;              //вернуть текущий узел
      }

      if (data < nodeTree.data) {
          nodeTree.left = addData(nodeTree.left, data); //обновляем узлы влево
      } else {
          nodeTree.right = addData(nodeTree.right, data); //обновляем узлы вправо
      }
      return nodeTree;
      }
  }

  has(data) {
    return hasSearch(this.rootTree, data);

    function hasSearch(nodeTree, data) {
      if (!nodeTree) {
        return false;                 //если узел ненайден вернуть false
      }    
      if (nodeTree.data === data) {
          return true;                    //если узел найден вернуть true
      }  
      return data < nodeTree.data ?
      hasSearch(nodeTree.left, data):  //ищем в левом узле
      hasSearch(nodeTree.right, data);  //ищем в правом узле
      }
  }

  find(data) {
    return findNode(this.rootTree, data);

    function findNode(nodeTree, data) {
      if (!nodeTree) {
        return null;
      }
  
      if (nodeTree.data === data) {
          return nodeTree;
      }  

      return data < nodeTree.data ?
      findNode(nodeTree.left, data):
      findNode(nodeTree.right, data);
      }
  }

  remove(data) {
    this.rootTree = removeNode(this.rootTree, data);

    function removeNode(nodeTree, data) {
      if (!nodeTree) {
        return null;               //точка остановки рекурсии если узла нет
      }
  
    if (data < nodeTree.data) {
        nodeTree.left = removeNode(nodeTree.left, data);  //обновляем левую ветку
        return nodeTree;
      } else if (nodeTree.data < data) { 
        nodeTree.right = removeNode(nodeTree.right, data); //обновляем правую ветку
        return nodeTree;
      } else {
        if (!nodeTree.left && !nodeTree.right) {
          return null;                                //если текущий узел является листом
        }
        if (!nodeTree.left) {
          nodeTree = nodeTree.right;
          return nodeTree;                //обновляем провое дерево  
        }
        if (!nodeTree.right) {
          nodeTree = nodeTree.left;
          return nodeTree;                //обновляем левое дерево 
        }
        let minRight = nodeTree.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        nodeTree.data = minRight.data;
        nodeTree.right = removeNode(nodeTree.right, minRight.data);

        return nodeTree;
      }
      }
    }

  min() {                           //минимальный элемент дерева              
    let nodeTree = this.rootTree;
    if (!this.rootTree) {
      return;
    }
    while (nodeTree.left) {
      nodeTree = nodeTree.left;
    }
    return nodeTree.data;
  }

max() {                                 //максимальный элемент дерева  
    if (!this.rootTree) {
      return;
    }
    let nodeTree = this.rootTree;
    while (nodeTree.right) {
      nodeTree = nodeTree.right;
    }
    return nodeTree.data;
  }
}
const bst = new BinarySearchTree();
function addData(){
  bst.add(13);
  bst.add(15);
  bst.add(9);
  bst.add(18);
  bst.add(32);
  bst.add(25);
  console.log(bst);
}
function getData(){
  console.log(bst.min());
  console.log(bst.max());
  console.log(bst.root());
}
function hasData(data){
  console.log(bst.has(data))
}
function findData(data){
  console.log('find:',bst.find(data))
}

// addData();
// getData();
// hasData(25);
// findData(18);

module.exports = {
  BinarySearchTree
};