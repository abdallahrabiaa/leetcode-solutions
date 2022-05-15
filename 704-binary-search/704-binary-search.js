/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    return BS(nums,target,0,nums.length-1)
};


function BS(nums,target,min,max){
    if(min>max) return -1;
    let mid= Math.floor((min+max)/2);
    if(nums[mid]===target)return mid;
    else if(nums[mid]>target) return BS(nums,target,min,mid-1);
    return BS(nums,target,mid+1,max);
}