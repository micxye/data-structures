var Stack = function() {
  this.storage = {};
  this.count = 0;
  this.key = '0';
  this.lastDeleted;
};

Stack.prototype.push = function(value) {
  this.count++;
  this.key = (Number(this.key) + 1).toString();
  this.storage[this.key] = value;
};

Stack.prototype.pop = function() {
  if (this.count > 0) {
    this.count--;
  }
  this.key = (Number(this.key) - 1).toString();
  this.lastDeleted = this.storage[(Number(this.key) + 1).toString()];
  delete this.storage[(Number(this.key) + 1).toString()];
  return this.lastDeleted;
};

Stack.prototype.size = function() {
  return this.count;
};
