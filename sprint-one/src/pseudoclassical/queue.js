var Queue = function() {
  this.storage = {};
  this.head = 0;
  this.tail = 0;
  this.sizeVariable = 0;
};


Queue.prototype.enqueue = function(value) {
    this.storage[this.tail] = value;
    this.tail++;
    this.sizeVariable++;
};

Queue.prototype.dequeue = function() {
    var removed = this.storage[this.head];

    delete this.storage[this.head];

    this.head++;
    this.sizeVariable--;
    if (this.sizeVariable < 0) {
      this.sizeVariable = 0;
    }
    return removed;
};

Queue.prototype.size = function() {
    return this.sizeVariable;
  };

