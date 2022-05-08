/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
if (s.length!=t.length)return false;
    let cahce={};
    for (let i = 0 ; i<t.length;i++){
        if (cahce[t[i]])cahce[t[i]]++;
        else cahce[t[i]]=1; 
    }
    for (let i = 0 ; i<s.length;i++){
        if (!cahce[s[i]])return false;
        cahce[s[i]]--;
        
    }
    return true;
};