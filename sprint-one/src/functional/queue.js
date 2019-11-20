var Queue = function() {
  var someInstance = {};
  var head = 0;
  var tail = 0;
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[tail] = value;
    tail++;
    size++;
  };

  someInstance.dequeue = function() {
    var removed = storage[head];
    delete storage[head];

    head++;
    size--;
    if (size < 0) {
      size = 0;
    }
    return removed;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
