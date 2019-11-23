var DoubleLinkedList = function() {
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
    node.previous = list.tail;
    list.tail.next = node;
    list.tail = list.tail.next;
  };

  list.addToHead = function(value) {
    var node = Node(value);
    if(list.head === null) {
      list.head = node;
      list.tail = node;
      return;
    }
    list.head.previous = node;
    node.next = list.head; //new head
    list.head = list.head.previous;
  };

  list.removeHead = function() {
    if (list.head === null) {
      return;
    }
    var removed = list.head.value;
    list.head = list.head.next;
    list.head.previous = null;
    return removed;
  };

  list.removeTail = function() {
    if(list.tail === null) {
      return;
    }
    var removed = list.tail.value;
    list.tail = list.tail.previous;
    list.tail.next = null;
    return removed;
  }

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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
