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
 * @return {number[][]}
 */
var levelOrder = function(root) {
        if (!root) return [];
    let nums =[];
    let queue=[root];
    while(queue.length){
        let level=[]
        let queLength= queue.length;
        for(let i =0; i<queLength;i++){
               let last = queue.shift();
                level.push(last.val)
                    if(last.left) queue.push(last.left);
            if (last.right) queue.push(last.right);

        

}
                                            nums.push(level)     


    }
    return nums;
};

