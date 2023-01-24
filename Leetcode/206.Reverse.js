class Node {

constructor(element)
{
    this.head = element;
}

add(element) {
    // creates a new node
    var node = new Node(element);

   
    // to store current node
    var current;

    // if list is Empty add the
    // element and make it head
    if (this.head == null)
        this.head = node;
    else {
        current = this.head;

        // iterate to the end of the
        // list
        
        while (current.next) {
            current = current.next;
        }
        // add node
        current.next = node;
    }
    this.size++;
    
}

reverseList(head) {
    var node = head;
    var previous = null;
  
    while(node) {
      // save next or you lose it!!!
      var save = node.next;
      // reverse pointer
      node.next = previous;
      // increment previous to current node
      previous = node;
      // increment node to next node or null at end of list
      node = save;

    }
    return previous;

};



}

let ll = new Node();

ll.add(10);
ll.add(20);
ll.add(30);

ll.reverseList();
