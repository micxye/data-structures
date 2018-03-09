

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!Array.isArray(this._storage.get(index))) {
    this._storage.set(index, [[k,v]]);
  } else {
    var bucket = this._storage.get(index);
    if (bucket) {
      if (this._storage.get(index)) {
        for (var i = 0; i < bucket.length; i++) {
          if (bucket[i][0] === k) {
            bucket[i][1] = v;
          }
        }
      }
      bucket.push([k,v]);
    }
  }
};
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


