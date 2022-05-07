/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let cache={};
    for (let num of nums  ){
        if (cache[num]) 
         return true;   
        
       cache[num]=1;
    }
    
    
   return false;
};