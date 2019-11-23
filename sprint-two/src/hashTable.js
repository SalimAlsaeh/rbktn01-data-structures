

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageElm = this._storage.get(index); 
  var flag = false;

  if(storageElm === undefined) {
  	var bucket = [];
  	this._storage.set(index, bucket);
  }
  
  storageElm = this._storage.get(index)

  if (storageElm.length >= 1) {
  	storageElm.forEach(function(element, index) {
  		if (element[0] === k) {
  			element[1] = v;
        flag = true;
        return;
  		}
  	});
  }

  if(!flag) {
	  storageElm.push([k, v]);
    this._count++;
    if (this._count > this._limit * 0.75) {
      this.resize(this._limit * 2);
    }
  }
  	//this._storage.set(index, storageElm);
};

HashTable.prototype.retrieve = function(k) {
  var result;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if(bucket !== undefined) {
      if (bucket.length === 1) {
        return bucket[0][1];
      }
  } else {
    return null;
  }

  bucket.forEach(function(element){
  	if (element[0] === k) {
  		result = element[1];
  	}
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var hashTable = this;
  if(hashTable._storage.get(index) !== undefined) {
    if(hashTable._storage.get(index).length === 1) {
      hashTable._storage.get(index).splice(0,1);
      this._count--;
      // if (this._count < this._limit * 0.25) {
      //   this.resize(this._limit / 2);
      // }
    }else {
      hashTable._storage.get(index).forEach(function(element, index) {
        if(element[0] === k) {
          hashTable._storage.get(index).splice(index,1);
            this._count--;
            // if (this._count < this._limit * 0.25) {
            //   this.resize(this._limit / 2);
            // }
        }
      })
    } 
  }
};

HashTable.prototype.resize = function(newLimit) {
  var oldData = this._storage;
  this._limit = newLimit;
  this._storage = LimitedArray(newLimit);
  this._count = 0;
  console.log('old')
  console.log(oldData)

  var context = this;
  oldData.each(function(bucket) {
    console.log(bucket)
    for (var i = 0; i < bucket.length; i++) {
      context.insert(bucket[i][0], bucket[i][1]);
    }
  });

}



/*
 * Complexity: What is the time complexity of the above functions?
 */


