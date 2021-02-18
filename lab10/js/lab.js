/**
 * Authors:    Jason Blecman and Jesus Picos
 * Created:   02/15/2021
 **/

 function CapitalizeFirstLetter(str) {
   str = str.toLowerCase();
   return str.charAt(0).toUpperCase() + str.slice(1)
 }

 function ShuffleString(str) {
   return str.split('').sort(function(){return 0.5-Math.random()}).join('');
 }

 function CaseInsensitiveSort(str) {
   return str.split('').sort(function(a, b) {
     if (a.toLowerCase() < b.toLowerCase()) return -1;
     if (a.toLowerCase() > b.toLowerCase()) return 1;
     return 0;
   }).join("");
 }

let inputElement, results, input, shuffled, split

 function Anagram() {
   inputElement = document.getElementById("user-name");
   results = document.getElementById("output");
   input = inputElement.value;
   shuffled = CapitalizeFirstLetter(ShuffleString(input));

   results.innerHTML = "Your new government ID name is " + shuffled;
 }

function Sort() {
  inputElement = document.getElementById("user-name2");
  results = document.getElementById("output2");
  input = inputElement.value;
  sorted = CaseInsensitiveSort(input);

  results.innerHTML = "Your new sorted ID name is " + sorted;
}

function AnagramSort() {
  inputElement = document.getElementById("user-name3");
  results = document.getElementById("output3");
  input = inputElement.value;
  shuffled = CapitalizeFirstLetter(ShuffleString(input));
  sorted = CaseInsensitiveSort(shuffled);

  results.innerHTML = "Your new sorted shuffled ID name is " + sorted;
}
