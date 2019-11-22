var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods)

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var node = Tree(value);
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
    };
    findElement(this);
    return flag;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
