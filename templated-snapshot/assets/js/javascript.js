
function submitBio() {
  var nameVar = document.getElementById("name").value;
  var emailVar = document.getElementById('email').value;
  console.log(emailVar);
  var messageVar = document.getElementById('message').value;
  console.log(messageVar);
  document.getElementById('name_email_id').innerHTML = "Name: "+nameVar+" Email: "+emailVar;
  document.getElementById('bio_id').innerHTML = messageVar;
  buttonHolder = document.createElement("button").innerHTML = "Color!!"
  document.getElementById('bio_id').appendChild(buttonHolder);
}
document.getElementById("submit_bio_id").addEventListener("click", submitBio);

function colorChange() {
  document.getElementById("name_email_id").style.color = "blue";
}

document.getElementById("colors").addEventListener("click", colorChange);
