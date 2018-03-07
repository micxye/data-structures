var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var key = '0';
  var lastDeleted;
  // Implement the methods below
  someInstance.push = function(value) {
    count++;
    key = (Number(key)+1).toString();
    storage[key] = value;
  };

  someInstance.pop = function() {
    if (count > 0) {
      count--;
    }
    key = (Number(key)-1).toString();
    lastDeleted = storage[(Number(key)+1).toString()];
    delete storage[(Number(key)+1).toString()];
    return lastDeleted;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
