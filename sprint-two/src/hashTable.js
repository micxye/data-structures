

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!Array.isArray(this._storage[index])) {
    this._storage[index] = [];
  }
  var bucket = this._storage[index];
  if (bucket) {
    if (this.retrieve(k)) {
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === k) {
          bucket[i][1] = v;
        }
      }
    }
  }
  var toPush = [k, v];
  this._storage[index].push(toPush);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage[index] = undefined;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


