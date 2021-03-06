/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word, root = this.root) {
    let currNode = root;
    for(let i = 0; i < word.length; i++){
        let char = word[i];
        if(!currNode[char]) currNode[char] = {};
        currNode = currNode[char]
    }
    currNode.isTerminal = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.searchNode(word);
    return node !== null ? node.isTerminal === true : false;
};

Trie.prototype.searchNode = function(word) {
    let node = this.root;
    for(let i = 0; i < word.length; i++){
        let char = word[i];
        if(node[char]){
            node = node[char]
        } else {
            return null;
        }
    }
    return node;
}

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.searchNode(prefix);
    return node !== null;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */