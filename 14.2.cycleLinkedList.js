//https://leetcode.com/problems/linked-list-cycle/


  class Node{
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
}

function hasCycle(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next){

        fast = fast.next.next;
        slow = slow.next;

        if(fast == slow){
            return true;
        }
    }
    return false;
}

var head = new Node(3)
head.next = new Node(2)
head.next.next = new Node(0)
head.next.next.next = new Node(-4)
head.next.next.next.next = head.next


console.log(hasCycle(head))