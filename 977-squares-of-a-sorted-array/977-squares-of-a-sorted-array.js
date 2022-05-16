/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
   let start= 0; 
    let end= nums.length-1;
    let result = [];
  while(start<=end){
   if(nums[start]**2>nums[end]**2)result.unshift(nums[start++]**2);
      else result.unshift(nums[end--]**2);
}
    
   return result;
};