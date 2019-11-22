var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
    var index = getIndexBelowMaxForKey(k, this._limit);
    var storageElm = this._storage.get(index);
    var flag = false;
    if(storageElm === undefined) {
    var bucket = [];
    this._storage.set(index, bucket);
  }

  storageElm = this._storage.get(index);

    if (storageElm.length >= 1) {
  	storageElm.forEach(function(element, index) {
  		if (element[0] === k) {
            flag = true;
            element[1] = v;
  		}
  	});

  }
    if (!flag) {

        var subBucket = [];
      subBucket.push(k, v);
      storageElm.push(subBucket);

    }
  	this._storage.set(index, storageElm);


};

HashTable.prototype.retrieve = function(k) {
    var result;
    var index = getIndexBelowMaxForKey(k, this._limit);

    if (this._storage.get(index) !== undefined){
      if ( this._storage.get(index).length === 1) {
          return this._storage.get(index)[0][1];
      }
    }

    this._storage.get(index).forEach(function(element){
    if (element[0] === k) {
        result = element[1]
    }
    });
    return  result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var hashTable = this;
    if (hashTable._storage.get(index) !== undefined){
        if ( hashTable._storage.get(index).length === 1) {
            hashTable._storage.get(index).splice(0, 1);

        } else {
            hashTable._storage.get(index).forEach(function(element, index){
                if (element[0] === k) {
                    hashTable._storage.get(index).splice(index, 1);

                }
            });
        }
    }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


