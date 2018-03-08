var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.queueSize = 0;
  someInstance.firstKey = '0';
  someInstance.currentKey = '0';
  someInstance.lastDequeued;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  if (this.queueSize === 0) {
    this.storage[this.firstKey] = value;
    this.queueSize++;
  } else {
    this.currentKey = (Number(this.currentKey) + 1).toString();
    this.storage[this.currentKey] = value;
    this.queueSize++;
  }
};

queueMethods.dequeue = function() {
  if (this.queueSize > 0) {
    this.queueSize--;
  }
  this.lastDequeued = this.storage[this.firstKey];
  delete this.storage[this.firstKey];
  if (this.currentKey !== this.firstKey) {
    this.firstKey = (Number(this.firstKey) + 1).toString();
  }
  return this.lastDequeued;
};

queueMethods.size = function() {
  return this.queueSize;
};
