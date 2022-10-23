function textPosting() {

  var text = document.getElementById("text");
  var textarea = document.createElement("p");
  var paraText = document.createTextNode(text.value);
  textarea.setAttribute("class", "attt");
  textarea.appendChild(paraText);
  div4.appendChild(textarea);
  div4.style.fontSize = "30px"
  text.style.backgroundColor = "white"
  div4.style.height = "100px"

  text.value = " ";
  div1.style.display = "block";
  var name = document.getElementById("hamza");
  name.style.display = "none";

}

function red() {
  var text = document.getElementById("text");
  text.style.color = "white";
  text.style.backgroundColor = "red";
  div3.style.backgroundColor = "red";
  div3.style.color = "white"
  div3.style.height = "100px"
}

function green() {
  var text = document.getElementById("text");
  text.style.color = "white";
  text.style.backgroundColor = "green";
  div3.style.backgroundColor = "green";
  div3.style.height = "100px"
}

function yellow() {
  var text = document.getElementById("text");
  text.style.color = "white";
  text.style.backgroundColor = "yellow";
  div3.style.backgroundColor = "yellow"
  div3.style.height = "100px"
}

function blue() {
  var text = document.getElementById("text")
  text.style.color = "white";
  text.style.backgroundColor = "blue";
  div3.style.backgroundColor = "blue";
  div3.style.height = "100px"
}

function pink() {
  var text = document.getElementById("text");
  text.style.color = "white";
  text.style.backgroundColor = "pink";
  div3.style.backgroundColor = "pink"
  div3.style.height = "100px"

}

function orange() {
  var text = document.getElementById("text");
  text.style.color = "white";
  text.style.backgroundColor = "orange";
  div3.style.backgroundColor = "orange"
  div3.style.height = "100px"

}