var BinarySearchTree = function(value) {
  
  this.value = value;
  // this.left;//a BST where all values are lower than the current value.;
  // this.right; //a BST where all values are higher than the current value.
  
};

BinarySearchTree.prototype.insert = function(value) {
  //accepts a value and places it in the tree in the correct position.
  if (value > this.value) {
    if (this.right) {
      this.right.insert(value) ;
    } else {
      this.right = new BinarySearchTree(value);
    }
  } else {
    if (this.left) {
      this.left.insert(value) ;
    } else {
      this.left = new BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  // accepts a value and returns a boolean reflecting 
  // whether or not the value is contained in the tree.
  if (this.value === value) {
    return true;
  } else {
    if (value > this.value) {
      if (this.right) {
        return this.right.contains(value);
      }
    } else {
      if (this.left) {
        return this.left.contains(value); 
      }
    }
  }
  return false;
  // returns a boolean
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  // accepts a callback and executes it on every value contained in the tree.
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
