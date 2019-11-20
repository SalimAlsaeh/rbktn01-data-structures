class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.StackSize = 0;
  }


	push(value) {
		this.storage[this.StackSize] = value;
		this.StackSize ++;
	}

	pop() {
		if(this.StackSize === 0) {
			return;
		}
		this.StackSize --;
		var removed = this.storage[this.StackSize];
		delete this.storage[this.StackSize];
		if (this.StackSize < 0) {
			this.StackSize = 0;
		}
		return removed;
	}

	size() {
		return this.StackSize;
	}

}