/**
 * Author:    Jason Blecman, Jesus Picos
 * Created:   2/22/2021
 *
 * (c) Jason Blecman, Jesus Picos
 **/

const houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];

function isLetter(c) {
   return c.toLowerCase() != c.toUpperCase();
}

function sortingHat(str) {
    let count = 0;
    for ( let i = 0; i < str.length - 1; i++ ) {
      if ( isLetter( str.charAt(i) ) ) {
        ++count;
      }
    }
    return houses[count % houses.length];
}

var $button = $("#button");
$button.click(function() {
    var house = sortingHat( $("#input").val() );
    $("#output").append("The Sorting Hat has sorted you into " + house + "!<br>");
});
