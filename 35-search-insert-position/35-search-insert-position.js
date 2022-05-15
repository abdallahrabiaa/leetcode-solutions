/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(array, element) {
 if(!array.length) return -1;
  let min = 0;
  let height = array.length-1;
  while(min<=height){
    let midPoint= Math.round((min+height)/2)
 
     if( element == array[midPoint] ){
      return midPoint;
    }
     else if( element < array[midPoint] ) {
       height=midPoint-1;
  }else {
    min= midPoint+1;
  }
                    
}
    return min ; 

}