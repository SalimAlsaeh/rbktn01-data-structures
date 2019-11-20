var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  //var sizeI = 0;
  var storage = {};

  someInstance.storage = storage;
  someInstance.StackSize = 0;

  extend(someInstance, stackMethods);
  
  return someInstance;
};

var stackMethods = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

stackMethods.push = function(value) {
    this.storage[this.StackSize] = value;
    this.StackSize ++;
 };

stackMethods.pop = function() {
    if (this.StackSize === 0) {
      return;
    }
    this.StackSize --;
    var removed = this.storage[this.StackSize];
    delete this.storage[this.StackSize];
    if (this.StackSize < 0) {
      this.StackSize = 0;
    }
    return removed;
};

stackMethods.size = function() {
    return this.StackSize;
 };






