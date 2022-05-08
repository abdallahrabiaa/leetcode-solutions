/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let cahce ={};
  let chars= s.split('')  
    for (let char of chars ){
        if(char in cahce)cahce[char]++;
        else cahce[char]=1;
        
    }
   for (let i = 0 ; i<chars.length;i++ ){
       if (cahce[chars[i]]>1) continue;
       return i;
        
    }
    
    return -1;
    
};