/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let biggest=0;
    for (let row= 0; row<grid.length;row++){
       for (let col= 0; col<grid[0].length;col++){
        if(grid[row][col]===1){
          biggest= Math.max( biggest ,traverse(grid,row,col))
        
        }
    
    } 
    
    }
    return biggest;
};


function traverse(grid,row,col){
    if(!grid||row<0||col<0||row>=grid.length||col>=grid[0].length|| grid[row][col]===0)return 0 ;
        grid[row][col]=0;
    let up= traverse(grid,row+1,col)
    let down= traverse(grid,row-1,col)
    let right= traverse(grid,row,col+1)
    let left=  traverse(grid,row,col-1);
    return  1 +up+down+right+left;
    
}