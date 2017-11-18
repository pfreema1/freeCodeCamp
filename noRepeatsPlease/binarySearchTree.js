function Node(val) {
    this.value = val;
    this.leftChild = null;
    this.rightChild = null;
}

function insert(root, insNode) {
    if(insNode.value < root.value) {
        if(root.leftChild == null) {
            root.leftChild = insNode;
        } else {
            insert(root.leftChild, insNode);
        }
    } else if(insNode.value > root.value) {
        if(root.rightChild == null) {
            root.rightChild = insNode;
        } else {
            insert(root.rightChild, insNode);
        }
    }
}

//Problem here
function contains(root, val) {
    if(root.value == val) {
        return true;
    } else if(val < root.value) {
        if(root.leftChild) {
            return contains(root.leftChild, val);
        } else {
            return false;
        }
    } else if(val > root.value) {
        if(root.rightChild) {
            return contains(root.rightChild, val);
        } else {
            return false;
        }
        
    } 
    return false;
}


var Tree = new Node(10);

insert(Tree, new Node(5));
insert(Tree, new Node(7));
insert(Tree, new Node(13));

//this should print true since 5 was inserted above
console.log(contains(Tree, 15));