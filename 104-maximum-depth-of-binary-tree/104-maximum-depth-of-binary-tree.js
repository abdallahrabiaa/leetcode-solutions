/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    return inorder(root,0)
};

function inorder(root,depth){
    if(!root) return depth; 
    let left=   inorder(root.left,depth+1);
 
    let right=   inorder(root.right,depth+1);

return Math.max(left,right)
}
