//INSTRUCTIONS//
/*Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]*/
//MY ANSWER//

function stringToArray(string){

  const wordArray = string.split(" ");
  
  return wordArray;
	
}