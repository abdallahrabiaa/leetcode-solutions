/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    if(!num)return true;
    let reversed= "";
    let strNum = `${num}`;
    let end = strNum.length-1;
    while(end>=0){
        reversed+=   strNum[end];
         end--;
    }
    if(reversed[0]=='0')return false;
    if(num== parseInt(reversed.split('').reverse().join('')))return true;
    return false;
};