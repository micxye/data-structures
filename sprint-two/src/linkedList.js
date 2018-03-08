var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  

  list.addToTail = function(value) {
    //takes a value and adds it to the end of the list
    var newNode = Node(value);
    if (list.head === null) { //first entry
      list.head = newNode;
      list.tail = newNode;
    } else if (list.head === list.tail) { //second entry
      list.tail = newNode;
      list.head.next = newNode;
    } else { // all other entries
      list.tail.next = newNode;
      list.tail = newNode;
    }
    
  };

  list.removeHead = function() {
    //removes the first node from the list and returns its value
    var removedVal = list.head.value;
    list.head = list.head.next;
    return removedVal;
  };

  list.contains = function(target) {
    // returns boolean reflecting whether or not the passed-in value is in the list
    var currentObj;
    
    var traverse = function (currentObj) {
      if (currentObj === list.tail && currentObj.value !== target) {
        return false;
      }
      
      if (currentObj === undefined) {
        currentObj = list.head;
      } else {
        currentObj = currentObj.next;
      }
      
      if (currentObj.value === target) {
        return true;
      } else {
        return traverse(currentObj);
      }
    };
    
    return traverse(currentObj);
  };

  return list;
};

var Node = function(value) {
  var node = {};
  
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail & removeHead are O(1) constant
 contains is O(n) linear
 */

// var newList = LinkedList();
