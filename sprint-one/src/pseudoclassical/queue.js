var Queue = function() {
  this.storage = {};
  this.queueSize = 0;
  this.firstKey = '0';
  this.currentKey = '0';
  this.lastDequeued;
};

Queue.prototype.enqueue = function(value) {
  if (this.queueSize === 0) {
    this.storage[this.firstKey] = value;
    this.queueSize++;
  } else {
    this.currentKey = (Number(this.currentKey) + 1).toString();
    this.storage[this.currentKey] = value;
    this.queueSize++;
  }
};

Queue.prototype.dequeue = function() {
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

Queue.prototype.size = function() {
  return this.queueSize;
};
