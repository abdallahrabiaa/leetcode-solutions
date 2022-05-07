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
 * @return {number[]}
 */

var postorderTraversal = function(root) {
    
    let num=[];
    traverseAndCollect(root,num);
    return num ;
};


function traverseAndCollect(root,array){ 
     if(!root) return ; 
         traverseAndCollect(root.left,array)
      traverseAndCollect(root.right,array)
               if(root.val!=null) array.push(root.val)


}