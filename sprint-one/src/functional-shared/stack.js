var Stack = function() {
  var newInstance = {};
  newInstance.storage = {};
  newInstance.count = 0;
  newInstance.key = '0';
  newInstance.lastDeleted;
  _.extend(newInstance, stackMethods);
  return newInstance;
};

stackMethods = {};

stackMethods.push = function(value) {
  this.count++;
  this.key = (Number(this.key) + 1).toString();
  this.storage[this.key] = value;
};

stackMethods.pop = function() {
  if (this.count > 0) {
    this.count--;
  }
  this.key = (Number(this.key) - 1).toString();
  this.lastDeleted = this.storage[(Number(this.key) + 1).toString()];
  delete this.storage[(Number(this.key) + 1).toString()];
  return this.lastDeleted;
};

stackMethods.size = function() {
  return this.count;
};
