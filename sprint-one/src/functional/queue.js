var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var queueSize = 0;
  var firstKey = '0';
  var lastKey = '0';
  var lastDequeued;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (queueSize === 0) {
      storage[firstKey] = value;
      queueSize++;
    } else {
      lastKey = (Number(lastKey)+1).toString();
      storage[lastKey] = value;
      queueSize++;
    }
  };

  someInstance.dequeue = function() {
    if (queueSize > 0) {
      queueSize--;
    }
    lastDequeued = storage[firstKey];
    delete storage[firstKey];
    if (lastKey !== firstKey) {
      firstKey = (Number(firstKey)+1).toString();
    }
    return lastDequeued;
  };

  someInstance.size = function() {
    return queueSize;
  };

  return someInstance;
};
