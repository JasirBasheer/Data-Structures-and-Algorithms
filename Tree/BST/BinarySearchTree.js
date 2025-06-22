class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class binarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){   // Complexity : average case = O(logn) , worst case = O(N)
        let newNode = new Node(value)
        if(this.root == null){
            this.root = newNode
        }else{
            this.insertHelper(newNode)
        }
    }

    insertHelper(newNode,root = this.root){
        if(newNode.value < root.value){
            if(root.left == null){
                root.left = newNode
            }else{
                this.insertHelper(root.left,newNode)
            }
        }else{
            if(root.right == null){
                root.right = newNode
            }else{
                this.insertHelper(root.right,newNode)
            }
        }
    }


    search(root,value){         // Complexity : average case = O(logn) , worst case = O(N)
        if(!root){
            return false
        }else{
            if(root.value == value){
                return true
            }else if(value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }

        }
    }

   preOrder(root=this.root){    // Complexity : O(N)
    if(root){
    console.log(root.value)
    this.preOrder(root.left)
    this.preOrder(root.right)
    }
   }

   inOrder(root=this.root){     // Complexity : O(N)
    if(root){
        this.inOrder(root.left)
        console.log(root.value)
        this.inOrder(root.right)
    }
   }

   postOrder(root=this.root){   // Complexity : O(N)
    if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value)
    }
   }

  
    isEmpty(){
        return this.root ===  null
    }


    bfs(){                      // Complexity : O(N)
       let queue =[]
       queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }

    }

    min(root = this.root){  // Complexity : average case = O(logn) , worst case = O(N)
        if(!root.left){
            return root.value
        }else{
           return this.min(root.left)
        }
        
    }
    max(root = this.root){       // Complexity : average case = O(logn) , worst case = O(N)
        if(!root.right){
            return root.value
        }else{
           return this.max(root.right)
        }
    }


    delete(value){           // Complexity : average case = O(logn) , worst case = O(N)
        if(this.root == null){
            return null
        }else{
            this.root = this.deleteNode(this.root,value)
        }
    }


    deleteNode(root,value){ 
        if(root === null){
            return root
        }

        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            
            if(!root.left){
                return root.right
            }
            
            if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }


    

    sumOfNodes(root = this.root){        // Complexity : O(N)
        if(root == null)return 0
        return root.value + this.sumOfNodes(root.left) + this.sumOfNodes(root.right)
    }

    countNodes(root = this.root) {       // Complexity : O(N)
        if (root == null) return 0;
        return 1 + (this.countNodes(root.left)) + (this.countNodes(root.right));
    }

    countLeafs(root = this.root){        // Complexity : O(N)
        if(root == null){
            return 0
        }
        if(root.left == null && root.right == null){
            return 1
        }
        return this.countLeafs(root.left) + this.countLeafs(root.right)
    }

    isBST(root = this.root,min =-Infinity,max = Infinity){  // Complexity : O(N)
        if(root == null){
            return true
        }
        if(min>= root.value || max<= root.value){
            return false
        }
        return this.isBST(root.left) && this.isBST(root.right)
    }
    

    height(root = this.root){       // Complexity : O(N)
        if(root==null)return -1
        let left = this.height(root.left)
        let right = this.height(root.right)
        return 1+ Math.max(left,right)
    }

                //3           root       root.value
    closestValue(tar,root = this.root,closest = root.value){   // Complexity : average case = O(logn) , worst case = O(N)
        if(root == null){
            return closest;
        }
        
        if(Math.abs(tar - closest)>Math.abs(tar-root.value)){
                closest = root.value
        }

            if(tar < root.value){
                return this.closestValue(tar,root.left,closest)
            }else if(tar>root.value){
                return this.closestValue(tar,root.right,closest)
            }else{
                return closest
            }  
    }




}




const bst = new binarySearchTree()

// inserting values into bst
bst.insert(10)  
bst.insert(5)
bst.insert(15)
bst.insert(13)


// traversals
bst.preOrder() 
bst.inOrder() 
bst.postOrder()

bst.bfs() // Breadth first search

bst.delete(13) // deleting an element
bst.preOrder() // after elements after deletion

console.log(bst.sumOfNodes()) // sum of all Nodes
console.log(bst.countNodes()) // count of nodes in a bst
console.log(bst.isBST()); // checks its a bst or not returns true of false
console.log(bst.countLeafs()) // returns the number of leaf nodes
console.log(bst.height()) // returns the heigth of the tree 
console.log(bst.closestValue(3)) //returns the closest value