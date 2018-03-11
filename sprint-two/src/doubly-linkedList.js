var DoublyLinkedList = function() {
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
      var previous = list.head;
      list.tail = newNode;
      list.head.next = newNode;
      newNode.previous = previous;
    } else { // all other entries
      var previous = list.tail;
      list.tail.next = newNode;
      list.tail = newNode;
      newNode.previous = previous;
    }
    
  };

  list.addToHead = function(value) {
    //method which takes a value and adds it to the front of the list.
    var newNode = Node(value);
    if (list.head === null) { //first entry
      list.head = newNode;
      list.tail = newNode;
    } else if (list.head === list.tail) { //second entry
      list.head = newNode;
      newNode.next = list.tail;
      list.tail.previous = newNode;
    } else { // all other entries
      var lastHead = list.head;
      list.head = newNode;
      lastHead.previous = newNode;
      newNode.next = lastHead;
    }
  };

  list.removeHead = function() {
    //removes the first node from the list and returns its value
    var removedVal = list.head.value;
    list.head = list.head.next;
    return removedVal;
  };

  list.removeTail = function() {
    //method which removes the last node from the list and returns its value.
    var removedVal = list.tail.value;
    list.tail = list.tail.previous;
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
  node.previous = null;
  return node;
};