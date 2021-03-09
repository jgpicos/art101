/**
 * Author:    Jason Blecman, Jesus Picos
 * Created:   3/08/2021
 *
 * (c) Jason Blecman, Jesus Picos
 **/
 function GetRandomInt(min, max) {
   return min + Math.floor(Math.random()*(max - min));
 }

let comicObj = {
  num : GetRandomInt(1, 2434),
  title : "",
  img : "",
  alt : "",
};

function GetComic() {
 $.ajax({
   url:"https://xkcd.com/" + comicObj.num + "/info.0.json",
   type: "GET",
   datatype: "json",

   success: function(data){
     comicObj.title = data.title;
     comicObj.img = data.img;
     comicObj.alt = data.alt;

     let output = $("#output");
     output.empty();
     let title = $("<p id = \"title\">" + "(#" + comicObj.num + ")   " + comicObj.title + "</p>");
     let img = $("<img id = \"img\" src=" + comicObj.img + " alt=\"" + comicObj.alt + "\"></p>");
     output.append(title);
     output.append(img);
   },
   error: function(xhr, status, strErr,result){
     console.log("FAILED: " + strErr);
   },
 })
}

$("#next").click(function() {
  GetComic( Math.min(++comicObj.num, 2434) );
});

$("#back").click(function() {
  GetComic( Math.max(--comicObj.num, 0 ) );
});


GetComic();
