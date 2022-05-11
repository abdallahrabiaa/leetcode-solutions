/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    let total= 0;
    for(let row =0;row<grid.length;row++){
         for(let col =0;col<grid[0].length;col++){
             if(grid[row][col]==0)
             if(DFS(grid,row,col))
                 total++;
        
    }
    }
    
    return total;
};


function DFS(grid,row,col){
    if(row<0||col<0||row>=grid.length||col>=grid[0].length)return false;
    if (grid[row][col]==1)return true;
      grid[row][col]=1;
   let  bl = DFS(grid,row+1,col)&
      DFS(grid,row-1,col)&
      DFS(grid,row,col+1)&
      DFS(grid,row,col-1)
         return bl;
}