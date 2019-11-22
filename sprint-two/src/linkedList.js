var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.tail === null) {
      list.tail = node;
      list.head = node;
      return;
    }
    list.tail.next = node;
    list.tail = list.tail.next;
  };

  list.removeHead = function() {
    if (list.head === null) {
      return;
    }
    var removed = list.head.value;
    list.head = list.head.next;

    return removed;
  };

  list.contains = function(target) {
    var pointer = list.head;
    var flag  = false;

    var findElement = function(element){
      if (element.value === target ) {
        flag = true;
        return;
      }
      if (element.next != null) {
         findElement(element.next);
      } 
    }
    findElement(pointer);
    return flag;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
