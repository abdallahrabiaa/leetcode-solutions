/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let mCache= {};
    let rCache={};
    let isCon = true;
    for (let i  = 0 ; i<magazine.length;i++){
        if(mCache[magazine[i]])mCache[magazine[i]]++;
        else mCache[magazine[i]]=1; 
    }
      for (let i  = 0 ; i<ransomNote.length;i++){
        if(rCache[ransomNote[i]])rCache[ransomNote[i]]++;
        else rCache[ransomNote[i]]=1; 
    }
    
     for (let i  = 0 ; i<ransomNote.length;i++){
        if(mCache[ransomNote[i]]&&rCache[ransomNote[i]]<=mCache[ransomNote[i]])continue;
         isCon = false;
    }
    
    return isCon;
};