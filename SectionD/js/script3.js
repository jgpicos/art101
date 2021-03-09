// for (var i = 0; i < 10; i++){
//   //create 10 div elements with a class name box inside the container div
//   var boxEl = document.createElement("div");
//   boxEl.className = "box";
//   boxEl.id="box_id_"+i;
//   document.getElementById('container').appendChild(boxEl)
//   $("#div_1").appendTo($("<div class=container>") );
//   console.log("Added");
//
//   if (i%2 == 0){
//     $(.container).append(`<div id=box_id_${i} class=Box_even></div>`)
//   }
//   else{
//     $(.container).append(`<div id=box_id_${i} class=Box_even></div>`)
//   }
// }
var original_text = $("#must_match").text();

function matchingFunction(){
  var input_text = $("#inputed_text").val();
  var sub_string = original_text.substring(0,input_text.length);
  console.log("Typed: "+inputed_text+sub_string);
  if (inputed_text == original_text) {
    $("#inputed_text").css('border-color','green');
  }
  else if (inputed_text == sub_string) {
    $("#inputed_text").css('border-color','blue');
  }
  else {
    $("#inputed_text").css('border-color','red');

  }
}

$("#inputed_text").keyup(matchingFunction);
