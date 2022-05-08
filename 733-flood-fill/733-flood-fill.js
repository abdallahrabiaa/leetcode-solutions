/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    fill(image,sr,sc,newColor,image[sr][sc]);
    return image;
};


function fill(image,sr,sc,newColor,oldColor){
if(sr<0||sc<0||sr>=image.length||sc>=image[0].length|| image[sr][sc]!=oldColor||image[sr][sc]===newColor)return; 
    image[sr][sc]=newColor;
    fill(image,sr+1,sc,newColor,oldColor)
    fill(image,sr-1,sc,newColor,oldColor)
    fill(image,sr,sc+1,newColor,oldColor)
    fill(image,sr,sc-1,newColor,oldColor)

}