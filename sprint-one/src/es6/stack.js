class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
    this.key = '0';
    this.lastPop;
  }

  push(value) {
    this.count++;
    this.key = (Number(this.key) + 1).toString();
    this.storage[this.key] = value;
  }

  pop() {
    if (this.count > 0) {
      this.count--;
    }
    this.lastPop = this.storage[this.key];
    delete this.storage[this.key];
    this.key = (Number(this.key) - 1).toString();
    return this.lastPop;
  }

  size() {
    return this.count;
  }
}
