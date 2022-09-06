/*

Use parseInt() in the convertToInteger function so it converts 
a binary number to an integer and returns it.

function convertToInteger(str) {

}

convertToInteger("10011");

*/

function convertToInteger(str) {
  const a = parseInt(str, 2);
  return a;
}

convertToInteger("10011");
