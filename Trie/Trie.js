class Node {
    constructor(){
        this.children = new Map()
        this.isWordEnd = false
    }
}

class Trie{


    constructor(){
        this.root = new Node()
    }



    insert(word){
        let curr = this.root;

        for (let i = 0; i < word.length; i++) {
           let charToInsert = word[i]
           if(!(curr.children.has(charToInsert))){
              curr.children.set(charToInsert,new Node())
        } 
            curr = curr.children.get(charToInsert)
        }
        curr.isWordEnd = true
    }


    contains(word){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            let charToFind = word[i]
            if(!(curr.children.has(charToFind))){
                return false
            }
            curr = curr.children.get(charToFind)
        }
        return curr.isWordEnd
    }

    startsWithPrefix(prefix){
        let curr = this.root
        for(let i =0;i<prefix.length;i++){
            let charToFind = prefix[i]
            if(!(curr.children.has(charToFind))){
                return false
            }
            curr = curr.children.get(charToFind)
        }
        return true
    }

    suggestion(search) {
        let curr = this.root;

        for (let i = 0; i < search.length; i++) {
            let charToFind = search[i];
            if (!curr.children.has(charToFind)) {
                return [];
            }
            curr = curr.children.get(charToFind);
        }


        let result = [];


        function collectWords(node, currentWord) {
            if (node.isWordEnd) {
                result.push(currentWord);
            }

            for (let [char, childNode] of node.children) {
                collectWords(childNode, currentWord + char);
            }
        }

        collectWords(curr, search);

        return result;
    }


    delete(word, current = this.root, depth = 0) {
    
        if (depth === word.length) {

            if (!current.isWordEnd) {
                return false; 
            }
            current.isWordEnd = false; 

            return current.children.size === 0;
        }

        let char = word[depth];
        let node = current.children.get(char);

        if (!node) {
            return false; 
        }

        let shouldDeleteChild = this.delete(word, node, depth + 1);

        if (shouldDeleteChild) {
        
            current.children.delete(char);
                       
            return current.children.size === 0 && !current.isWordEnd;
        }

        return false;
    }




    bfs() {
        let result = [];
        let queue = [];
    
        while (queue.length > 0) {
            let { node, word } = queue.shift(); // Dequeue the front element
    
            if (node.isWordEnd) {
                result.push(word); // Add to result if it's a word
            }
    
            for (let [char, childNode] of node.children) {
                queue.push({ node: childNode, word: word + char }); // Add children to the queue
            }
        }
    
        return result;
    }
    


}

let trie = new Trie()

let str = "jasir"
    trie.insert(str)
    trie.insert("jaseena")
    trie.insert("jasezm")




// console.log(trie.root)
console.log(trie.bfs())


