/**
 * Authors:    Jason Blecman and Jesus Picos
 * Created:   02/08/2021
 **/

function docOutput(out) {
  var text = document.getElementById("jsOutput").innerHTML;
  document.getElementById("jsOutput").innerHTML = text + out + "<br>";
}

function firstThing(test, inCaps) { //define as traditional function
  if (!inCaps) {
    test = test.toLowerCase();
  } else if (inCaps) {
    test = test.toUpperCase();
  }
  console.log(test); //print the passed 'test' variable
  docOutput(test);
  //document.writeln(test);
}

var secondThing = function(test, callback) { //define function as a variable
  console.log(test); //print the passed 'test' variable
  docOutput(test);
  //document.writeln(test);
  callback(10, 10);
}

var thirdThing; //create undefined variable.
thirdThing = function(test) { //assign the variable to a new function.
  console.log(test); //print the passed 'test' variable
  //document.writeln(test);
}


firstThing("TEST 1", true); //call function 1
secondThing("TEST 1", function(a, b) { //call function 2
  console.log(a + b); //anonymous function call back
  docOutput(a + b);
  //document.writeln(a + b);
});
thirdThing("TEST 1");//call function 3

setTimeout(function() { //call anonymous function
  firstThing("TEST 2", false);
  secondThing("TEST 2", function(a, b) {
      console.log(a * b);
      docOutput(a * b);
      //document.writeln(a * b);
    });
  thirdThing("TEST 2");
}, 1000); // wait 1 second

setTimeout(function() {
  setTimeout(firstThing, 4000, "TEST 3", true); //wait 4 seconds
  setTimeout(secondThing, 1000, "TEST 3", function(a, b) {
      console.log(a / b);
      docOutput(a / b);
      //document.writeln(a / b);
    }); //wait 1 second
  setTimeout(thirdThing, 2500, "TEST 3"); //wait 2.5 seconds
}, 1000);
