class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.head = 0;
  	this.tail = 0;
  	this.sizeVariable = 0;
  }

  enqueue(value) {
  	this.storage[this.tail] = value;
  	this.tail++;
  	this.sizeVariable++;
  }

  dequeue() {
  	var removed = this.storage[this.head];
  	delete this.storage[this.head];

  	this.head++;
  	this.sizeVariable--;
  	if (this.sizeVariable < 0) {
  		this.sizeVariable = 0;
  	}

  	return removed;
  }

  size() {
  	return this.sizeVariable;
  }

}
