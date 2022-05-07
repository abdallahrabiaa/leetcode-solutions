/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let solution = [];
    nums.forEach((num,i)=>{
        for(let index = 0;index<nums.length;index++)
            if(num+nums[index]===target&&i!==index){
                    solution.push(i,index)
        nums.splice(i,1)
                        nums.splice(index,1)

            }
            
    })
    return solution ;
};