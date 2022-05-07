/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let firstArr=[];
    let secondArr=[];
    for(let i= 0; i<s.length;i++){
        if(s[i]==='#')
           firstArr.pop();
        else firstArr.push(s[i]);
        
    }
      for(let i= 0; i<t.length;i++){
          if(t[i]==='#')
           secondArr.pop();
        else secondArr.push(t[i]);
    }
    return firstArr.join('')===secondArr.join('');
};