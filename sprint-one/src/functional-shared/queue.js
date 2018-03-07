var Queue = function() {
  var newInstance = {};
  newInstance.storage = {};
  newInstance.queueSize = 0;
  newInstance.firstKey = '0';
  newInstance.lastKey = '0';
  newInstance.lastDequeued;
  _.extend(newInstance, queueMethods);
  return newInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  if (this.queueSize === 0) {
    this.storage[this.firstKey] = value;
    this.queueSize++;
  } else {
    this.lastKey = (Number(this.lastKey) + 1).toString();
    this.storage[this.lastKey] = value;
    this.queueSize++;
  }
};

queueMethods.dequeue = function() {
  if (this.queueSize > 0) {
    this.queueSize--;
  }
  this.lastDequeued = this.storage[this.firstKey];
  delete this.storage[this.firstKey];
  if (this.lastKey !== this.firstKey) {
    this.firstKey = (Number(this.firstKey) + 1).toString();
  }
  return this.lastDequeued;
};

queueMethods.size = function() {
  return this.queueSize;
};
