var Stack = function() {
  var newInstance = Object.create(stackMethods);
  newInstance.storage = {};
  newInstance.count = 0;
  newInstance.key = '0';
  newInstance.lastDeleted;
  return newInstance;
};

var stackMethods = {};

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
