var tree;

function setup() {
    tree = new Tree();

    tree.addValue(5);

    tree.addValue(3);

    tree.addValue(7);

    tree.addValue(6);

    console.log(tree);

}

function Tree() {
    this.root = null;
}

Tree.prototype.addValue = function(val) {
    var n = new Node(val);

    //if no value is in the root of the tree, add the newly created node at the root
    //else, run addNode on the root with newly created node passed in
    if(this.root == null) {
        this.root = n;
    } else {
        this.root.addNode(n);
    }

    console.log("end of addValue:  tree:");
    console.table(tree);
}

Node.prototype.addNode = function(n) {

    //if passed in nodes' value is < 
    if(n.value < this.value) {
        if(this.left == null) {
            this.left = n;
        } else {
            this.left.addNode(n);
        }
    } else if(n.value > this.value){
        if(this.right == null) {
            this.right = n;
        } else {
            this.right.addNode(n);
        }
    }
}

//constructor function
function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}


setup();

