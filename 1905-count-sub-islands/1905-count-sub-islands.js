/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
     let total= 0;
    for(let row =0;row<grid2.length;row++){
         for(let col =0;col<grid2[0].length;col++){
             if(grid2[row][col]&&DFS(grid1,grid2,row,col))
                 total++;
        
    }
    }
    
    return total;
};
var closedIsland = function(grid) {
   
};


function DFS(grid,grid1,row,col){
    let isI=true
    if(row<0||col<0||row>=grid1.length||col>=grid1[0].length||grid1[row][col]==0)return true;
    if(grid[row][col]!=1)return false;
      grid1[row][col]=0;
      let top =DFS(grid,grid1,row+1,col)
      let down= DFS(grid,grid1,row-1,col)
     let right= DFS(grid,grid1,row,col+1)
      let left= DFS(grid,grid1,row,col-1)
      if(top&&down&&right&&left)
         return true;
    return false;
}

