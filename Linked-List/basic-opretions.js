// Node 

class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }

}

class linkedList {

    insertAtStart(){
        // THis is the head of the linked list class 
        this.head = null
    }


    // helper
    size(){
        let counter = 0;
        let current = this.head;

        while(current.next !== null){
            counter++;
            current = current.next;
        }
        return counter;
    }

    // add first 
    addFirst(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode 
    }

    // add last

    addLast(data){
        const newNode = data;

        if(this.head === null){
            this.addFirst(data);
            return;
        }

        let current = this.head;
        while(current.next !== null){
            current=current.next
        }
        current.next = new Node(data);
    }

    // Add at index
    addAtIndex(data,index){
        if(index < 0 || index > this.size()){
            console.error("This is the out of bound");
            return;
        }

        if(index === 0){
            this.addFirst(data)
        }

        const newNode = new Node(data);

        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            current=current.next
        }
        newNode.next = current.next;
        current.next = newNode;
    }

    // remove at the start
    removeAtStart(){
        if(this.head === null){
            return;
        }

        this.head = this.head.next;
    }

}

