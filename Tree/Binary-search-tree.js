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

    insert(value){
        let newNode = new Node(value)
        if(this.root == null){
            this.root = newNode
        }else{
            this.insertNewNode(this.root,newNode)
        }
    }

    insertNewNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left == null){
                root.left = newNode
            }else{
                this.insertNewNode(root.left,newNode)
            }
        }else{
            if(root.right == null){
                root.right = newNode
            }else{
                this.insertNewNode(root.right,newNode)
            }
        }
    }


    search(root,value){
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

   preOrder(root){
    if(root){
    console.log(root.value)
    this.preOrder(root.left)
    this.preOrder(root.right)
    }
   }

   inOrder(root){
    if(root){
        this.inOrder(root.left)
        console.log(root.value)
        this.inOrder(root.right)
    }
   }

   postOrder(root){
    if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value)
    }
   }

  
    isEmpty(){
        return this.root ===  null
    }


    levelOrder(){
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

    min(root = this.root){
        if(!root.left){
            return root.value
        }else{
           return this.min(root.left)
        }
        
    }
    max(root = this.root){
        if(!root.right){
            return root.value
        }else{
           return this.max(root.right)
        }
    }


    delete(value){
        this.root = this.deleteNode(this.root,value)
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




}




const binarySearch = new binarySearchTree()
binarySearch.insert(10)
binarySearch.insert(5)
binarySearch.insert(15)
binarySearch.insert(13)
binarySearch.delete(10)



console.log(binarySearch.levelOrder())

console.log(binarySearch)


