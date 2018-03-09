var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  
  var child = Tree(value);
  this.children.push(child);
  
};

treeMethods.contains = function(target) {
  var checkChildren = function(children) {
    for (var i = 0; i < children.length; i++) {
      if (children[i].value === target) {
        return true;
      } else if (checkChildren(children[i].children)) {
        return true;
      }
    } 
    return false;
  };
  return checkChildren(this.children);
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild is constant O(1)
 contains is linear O(n)
 */
