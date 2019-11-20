var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  var storage = {};

  someInstance.storage = storage;
  someInstance.head = 0;
  someInstance.tail = 0;
  someInstance.sizeVariable = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};


var queueMethods = {};

queueMethods.enqueue = function(value) {
    this.storage[this.tail] = value;
    this.tail++;
    this.sizeVariable++;
};

queueMethods.dequeue = function() {
    var removed = this.storage[this.head];

    delete this.storage[this.head];

    this.head++;
    this.sizeVariable--;
    if (this.sizeVariable < 0) {
      this.sizeVariable = 0;
    }
    return removed;
};

queueMethods.size = function() {
    return this.sizeVariable;
  };


