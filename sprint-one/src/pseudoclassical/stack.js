var Stack = function() {

  this.storage = {};
  this.StackSize = 0;  
};


Stack.prototype.push = function(value) {
    this.storage[this.StackSize] = value;
    this.StackSize ++;
 };

Stack.prototype.pop = function() {
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
};

Stack.prototype.size = function() {
    return this.StackSize;
 };
