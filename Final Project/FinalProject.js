
class Leaf {
    //leaf object, acts as nodes for the binary tree object
    constructor(value, quantity, leftLeaf = null, rightLeaf = null) {
        this.value = value;
        this.quantity = quantity;
        this.left = leftLeaf || null;
        this.right = rightLeaf || null;
    }

  }
  
class BinaryTree {
    //binary tree object
    constructor() {
        this.root = null;
    }
  
    insert(value) {
        const newLeaf = new Leaf(value);

        //if  the root is null, make newLeaf the root
        if (this.root == null) {
            this.root = newLeaf;
            return;
        }
        let current = this.root;

        // check for < or > current, and then if the branch is empty, 
        //if not step down that way and iterate loop from that node
        while (true) {
            if (value < current.value) {
                if (current.left == null) {
                    current.left = newLeaf;
                    return;
                }
                current = current.left;
            } 
            else {
                if (current.right == null) {
                    current.right = newLeaf;
                    return;
                }
                current = current.right;
            }
        }
    }
}


//make the BinaryTree object,
var huffmanTree = new BinaryTree();


var inputString
function getInput(){
    let inputTextbox = document.getElementById("user_input");
    const userInput = inputTextbox.value;
    inputString = userInput;
    return userInput;
}

var button = document.getElementById("get_user_input");
button.addEventListener("click",() => {
        const input = getInput();

        //put input's unique characters into an array with a count of each amount of occurances
        var charCountArray = inputCharCountArrayConstruct();
      
        //make an array of nodes from char count array;
        var arrayOfNodes = MakeNodesFromArray(charCountArray);
        
        let huffmanTreeNode;
        huffmanTreeNode = BuildHuffmanTreeFromNodes(arrayOfNodes);
    
        //set Tree objects root to the head node built from tree
        huffmanTree.root = huffmanTreeNode
        
        //create an array that will hold the key for the huffamn tree to encode
        //[0] is the value(character)
        //[1] is the bit signature for the encoding
        let huffTreeKeyArray = [];
        buildKeyToHuffmanTree(huffmanTreeNode, huffTreeKeyArray);
        
        let outputString = "";
        //Use the key to step through the input string and
        //make a string representing the huffman code bits it would encode to
        for (let i = 0; i < input.length; i++) {
            const char = input.charAt(i);
            huffTreeKeyArray.forEach (innerArray => {
                if (innerArray[0] == char){
                    outputString += innerArray[1];
                }
            });
        }
        targetDiv = document.getElementById("output");
        targetDiv.value = outputString;
});

let bitSignature = "";
function buildKeyToHuffmanTree(node, keyArray){
    if (node === null)
        return;
    
    if (node.value != null)
        keyArray.push([node.value, bitSignature]);

    if (node.left != null){
        bitSignature += "0";
        buildKeyToHuffmanTree(node.left, keyArray)
        bitSignature = bitSignature.substring(0, bitSignature.length-1);
    }
    if (node.right != null){
        bitSignature += "1";
        buildKeyToHuffmanTree(node.right, keyArray)
        bitSignature = bitSignature.substring(0, bitSignature.length-1);
    }

}



function BuildHuffmanTreeFromNodes(inputArrayOfNodes) {
    //if statement to end recursion when 1 node left in array
    //returns the node that is the head of the tree.
    if (inputArrayOfNodes.length === 1) {
        return inputArrayOfNodes[0];
    }

    //sort in ascending order at start of every iteration
    inputArrayOfNodes.sort((a, b) => a.quantity - b.quantity);

    //assign lowest to left and next lowest to right
    let leftChild = inputArrayOfNodes[0];
    let rightChild = inputArrayOfNodes[1];

    //make a parent node w/ a null value, quantity of the sum of its children's values, and set left/right child
    const parentNode = new Leaf(null, leftChild.quantity + rightChild.quantity, leftChild, rightChild);

    //remove 2 from the array, then add the newly made parent to the array
    inputArrayOfNodes.splice(0, 2);
    inputArrayOfNodes.push(parentNode);

    //recur until if statement at top returns
    return BuildHuffmanTreeFromNodes(inputArrayOfNodes);
}



function MakeNodesFromArray(inputArray){
    //takes array of characters and quantities and makes a node for each
    var arrayOfNodes = [];
    inputArray.forEach (innerArray => {
        var newNode = new Leaf(innerArray[0],innerArray[1]);
        arrayOfNodes.push(newNode);
    });

    return arrayOfNodes;
}


function inputCharCountArrayConstruct(){
    
    //array to track characters occurance
    var stringToSortArray = [];
    const input = getInput();

    //step through string
    for (let i = 0; i < input.length; i++) {
        //for each character, check if it has a match, 
        //if not add to array,
        // if so add to its count

        const char = input.charAt(i);
        var hasMatchingChar = false;
        stringToSortArray.forEach (innerArray =>{
            if (innerArray[0] == char){
                innerArray[1] +=1;
                hasMatchingChar = true;
            }
        });
        if (!hasMatchingChar){
            stringToSortArray.push([char, 1]);
        }
    }
    return(stringToSortArray);
}












// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

