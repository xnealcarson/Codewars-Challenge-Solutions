//INSTRUCTIONS//
/*Description:
You need to write a function that reverses the words in a given string. Words are always separated by a single space.

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"*/

//MY ANSWER//
function reverse(string){
  const words = string.split(' ');
  const revWords = words.reverse();
  return revWords.join(' ');
}