/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let island=0;  
    for(let r=0;r<grid.length;r++ ){
          for(let c=0;c<grid[r].length;c++ ){
        if(grid[r][c]=="1")
            {
             traverse(grid,r,c);
              island++;

            }
    }
    }
    
    return island;
    
};


function traverse(grid,r,c){
    if(r<0||c<0||r>=grid.length||c>=grid[r].length||grid[r][c]=="0"||!grid[r][c]) return;
     grid[r][c]="0"
    traverse(grid,r+1,c)
    traverse(grid,r-1,c)
    traverse(grid,r,c+1)
    traverse(grid,r,c-1);
    
    
    
    
}