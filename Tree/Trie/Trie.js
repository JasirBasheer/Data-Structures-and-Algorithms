class Node {
    constructor() {
        this.children = new Map()
        this.isWordEnd = false
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }


    insert(word) {  // Complexity = O(L) where L is the length of the word -'time and space' 

        let curr = this.root;

        for (let i = 0; i < word.length; i++) {
            let charToInsert = word[i]
            if (!(curr.children.has(charToInsert))) {
                curr.children.set(charToInsert, new Node())
            }
            curr = curr.children.get(charToInsert)
        }
        curr.isWordEnd = true
    }


    contains(word) {  // Complexity = Time - O(L) where L is the length of the word , Space = 0(1)
        let curr = this.root
        for (let i = 0; i < word.length; i++) {
            let charToFind = word[i]
            if (!(curr.children.has(charToFind))) {
                return false
            }
            curr = curr.children.get(charToFind)
        }
        return curr.isWordEnd
    }

    startsWithPrefix(search) {  // Complexity = Time - O(L) where L is the length of the prefix , Space = 0(1)
        let curr = this.root
        for (let i = 0; i < search.length; i++) {
            let charToFind = search[i]
            if (!(curr.children.has(charToFind))) {
                return false
            }
            curr = curr.children.get(charToFind)
        }
        return true
    }

    suggestion(search) {    // Complexity = Time - O(L+N) where L is the length of the search and number of word in the tree according to search
        let curr = this.root;

        for (let i = 0; i < search.length; i++) {
            let charToFind = search[i];
            if (!curr.children.has(charToFind)) {
                return [];
            }
            curr = curr.children.get(charToFind);
        }


        let result = [];

        function suggestions(node, currentWord) {
            if (node.isWordEnd) {
                result.push(currentWord);
            }

            for (let [char, childNode] of node.children) {
                suggestions(childNode, currentWord + char);
            }
        }

        suggestions(curr, search);
        return result;
    }


    delete(word, current = this.root, depth = 0) { // Complexity = O(L) where L is the length of the word to be deleted
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

        let itemToDelete = this.delete(word, node, depth + 1);

        if (itemToDelete) {

            current.children.delete(char);

            return current.children.size === 0 && !current.isWordEnd;
        }

        return false;
    }


 
    bfs() {                       // Complexity = O(N) where N is the Number of all char in the tire
        const result = []; 
        const queue = [{ node: this.root, word: '' }]; 

        while (queue.length > 0) {
            const { node, word } = queue.shift();

            if (node.isWordEnd) {
                result.push(word); 
            }

            for (let [char, childNode] of node.children) {
                queue.push({ node: childNode, word: word + char });
            }
        }

        return result;
    }


     dfs(node = this.root, word = '', result = []) {   // Complexity = O(N) where N is the Number of all char in the tire
        if (node.isWordEnd) {
            result.push(word);
        }
        for (let [char, childNode] of node.children) {
            this.dfs(childNode, word + char, result);
        }
        return result;
    }

}

let trie = new Trie()


trie.insert("hello")  // inserting words into trie
trie.insert("hi")
trie.insert("heyy")


console.log(trie.bfs()) // traversal Breadth first search
console.log(trie.dfs()) // traversal Deapth first search

console.log(trie.contains('hi'))  // checks if the word is present; returns true or false
console.log(trie.startsWithPrefix('h')) // check if the prefix is present; returns true or false

console.log(trie.suggestion('h')) // check if the prefix is present; returns array of words

trie.delete('hi') // deletes the given word
console.log(trie.contains('hi')) // returns false