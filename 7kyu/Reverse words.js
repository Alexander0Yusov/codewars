// Description:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// Solution

function myFunction(text) {
  return String(text)
    .split(" ")
    .map((word) => String(word).split("").reverse().join(""))
    .join(" ");
}

console.log(myFunction("This is an example!")); // sihT si na !elpmaxe
