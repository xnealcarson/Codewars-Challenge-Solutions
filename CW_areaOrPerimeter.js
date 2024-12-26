//INSTRUCTIONS//
/*You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.*/


//MY ANSWER//
const areaOrPerimeter = function(l , w) {
  const area = l * w
  const perimeter = 2 * (l + w)
  
  if(l == w){
    return area
   }else{
    return perimeter
   }
}