var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods)

  return newTree;
};

var treeMethods = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  node.parent = this;
  this.children.push(node)
};

treeMethods.contains = function(target) {
    var flag  = false;

    var findElement = function(element){
      if (element.value === target ) {
        flag = true;
        return;
      }
      if (element.children) {
         element.children.forEach(function(child){
      findElement(child);
         });
      } 
    }
    findElement(this);
    return flag;
};

treeMethods.removeFromParent = function(){
  this.children = [];
  this.parent.children = this.parent.children.filter(function(element){
    return this.value === element.value
  });
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
