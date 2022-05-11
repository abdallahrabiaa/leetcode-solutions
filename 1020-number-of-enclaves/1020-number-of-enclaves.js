/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    let sumOftheEland=0;
    let temp=0;
    for(let row=0; row<grid.length;row++){
        for(let col=0; col<grid[0].length;col++){
          temp= reverse(grid,row,col)
            if(temp>0)
                sumOftheEland+=temp;
    }
    }
    
    return sumOftheEland;
};


function reverse(grid,row,col){
    if(row<0||row>=grid.length||col<0||col>=grid[0].length)return -1;
        if(grid[row][col]==0)return 0;
         grid[row][col]=0;
let top= reverse(grid,row+1,col);
let bottom = reverse(grid,row-1,col)
let left= reverse(grid,row,col+1);
    let right= reverse(grid,row,col-1)
    if(top==-1||bottom==-1||left==-1||right==-1)return -1;
    
    return 1 +top+bottom+right+left;
    
}