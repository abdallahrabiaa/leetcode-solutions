/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index= 0
    let temp = 0;
    for(let i= 0 ;i<nums.length;i++){
        if(!nums[i]) index++;
        else if (index){
let temp = nums[i];
  nums[i]=0;
  nums[i-index]=temp;          
            
        }
    }
    
};