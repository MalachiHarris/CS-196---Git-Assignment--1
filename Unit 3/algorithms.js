
class Leaf {
    //leaf object, acts as nodes for the binary tree object
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
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


//make the BinaryTree object, add 10 values
var learningTree = new BinaryTree();
learningTree.insert(50);
learningTree.insert(48);
learningTree.insert(75);
learningTree.insert(52);
learningTree.insert(51);
learningTree.insert(54);
learningTree.insert(52);
learningTree.insert(13);
learningTree.insert(42);
learningTree.insert(58);
learningTree.insert(40);
learningTree.insert(60);


  
  




//----------------INSERTING DIVS

//add divs to represent items in the tree

//target div for all items
let ctr_box = document.querySelector(".central_box");

//add row for head item
ctr_box_row = document.createElement("div");
ctr_box_row = document.createElement("div");
ctr_box_row.classList.add("cb_row");
ctr_box.appendChild(ctr_box_row);

//add head item
treeItem = document.createElement("div");
treeItem.classList.add("item");
treeItem.textContent = learningTree.root.value;
ctr_box_row.appendChild(treeItem);




//make array to step through tree starting with head
var toCheckArray = [learningTree.root];
toCheckArray.push(toCheckArray[0].left);
toCheckArray.push(toCheckArray[0].right);
toCheckArray.shift();



//Loop to run through array
var finishedPopulating = false;
while(finishedPopulating == false){
    

    //add row for current level of learningTree
    ctr_box_row = document.createElement("div");
    ctr_box_row = document.createElement("div");
    ctr_box_row.classList.add("cb_row");
    ctr_box.appendChild(ctr_box_row);
        

    // add item divs for each value
    for (i = 0; i < toCheckArray.length; i++){
    
        var value;
        if (toCheckArray[i] != null)
            value = toCheckArray[i].value;
        else
            value = null;



        if (value !== null) {
            treeItem = document.createElement("div");
            treeItem.classList.add("item");
            treeItem.textContent = value;
            ctr_box_row.appendChild(treeItem);
        } else {
            treeItem = document.createElement("div");
            treeItem.classList.add("item");
            treeItem.textContent = "-";
            ctr_box_row.appendChild(treeItem);
        }
    }

    
    //add left & right children to toCheckArray then remove parent node
    //tracks nulls and keeps track of their place with a null value in the array
    initialLength = toCheckArray.length;
    for (i = 0; i < initialLength; i++){
        if (toCheckArray[0] != null){
            toCheckArray.push(toCheckArray[0].left);
            toCheckArray.push(toCheckArray[0].right);
            toCheckArray.shift();
        }  
        else{
            toCheckArray.push(null);
            toCheckArray.push(null);
            toCheckArray.shift();
        }


    }
    

    //check if there are children and then set isThereChildren flag
    var isThereChildren = false;
    for (i = 0; i < toCheckArray.length; i++){
        if (toCheckArray[i] !=null){
            if (toCheckArray[i].left != null)
                
                isThereChildren = true;
            


        ctr_box_row.offsetHeight; 
        isThereChildren = true;


        //seeming issue with rendering, using this as a workaround for slight delay to fix
        }
    }

    //if there's no children, end loop
    if(isThereChildren == false)
    finishedPopulating = true;
}



//-------------Code for depth Search

var depthArray = [];
function depthSearchToArray(node, array) {
    // depthArray.push(head.value)

    if (node == null){
        return;
    }
    array.push(node.value);

    if (node.left !== null){
        depthSearchToArray(node.left, array);
    }

    if (node.right !== null){
    depthSearchToArray(node.right, array);
    }
}





//-------------Code for Breadth Search



var breadthArray = [];

function breadthSearchToArray(root, array) {

    //in case root is null
    if (root === null) {
        return;
    }

    //tracks next node to process, starting with root
    const toPushQueue = [root];

    //loop through queque, 
    while (toPushQueue.length > 0) {
        const currentNode = toPushQueue.shift();
        array.push(currentNode.value);

        if (currentNode.left !== null) {
            toPushQueue.push(currentNode.left);
        }

        if (currentNode.right !== null) {
            toPushQueue.push(currentNode.right);
        }
    }
}





// Buttons
var breadthButton = document.getElementById("breadth_a");
var depthButton = document.getElementById("depth_a")
breadthButton.addEventListener("click", () => {
    // calls breadthSearchToArray and uses modified array to add a paragraph to the page
    
    breadthArray = [];
    breadthSearchToArray(learningTree.root, breadthArray);
    

    targetDiv = document.getElementById("breadth");
    var existingP = targetDiv.querySelector("p");

    if (existingP) {
        // Update the existing <p> element's text content
        existingP.textContent = "The Result of the Breadth Search:\t" + breadthArray;
    } else {
        // Create a new <p> element if none exists
        elementToInsert = document.createElement("p");
        elementToInsert.classList.add("breadth");
        elementToInsert.textContent = "The Result of the Breadth Search:\t" + breadthArray;
        targetDiv.appendChild(elementToInsert);
    }
});

depthButton.addEventListener("click", () => {
    // calls depthSearchToArray and uses modified array to add a paragraph to the page
    depthArray = [];
    depthSearchToArray(learningTree.root, depthArray);

    targetDiv = document.getElementById("depth");
    var existingP = targetDiv.querySelector("p"); 

    if (existingP) {
        // Update the existing <p> element's text content
        existingP.textContent = "The Result of the Depth Search:\t" + depthArray;
    } else {
        // Create a new <p> element if none exists
        elementToInsert = document.createElement("p");
        elementToInsert.classList.add("depth");
        elementToInsert.textContent = "The Result of the Depth Search:\t" + depthArray;
        targetDiv.appendChild(elementToInsert);
    }
});
