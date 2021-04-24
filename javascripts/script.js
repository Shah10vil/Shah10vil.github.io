var i = 0;
var txt = "Infamous Serial Killers";
var speed = 70;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("code").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function handleTime() {
  var date = new Date();
  return `${date.toLocaleDateString()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

typeWriter();

function saveData() {
  var formData = new FormData(document.querySelector("#id_form"));
  var resultElem = document.querySelector("#form-result");
  var dateString = `Submit time: ${handleTime()}`;
  var resultString = `<fieldset> <div>${dateString}</div> <legend> Form Results </legend>`;
  for (var pair of formData.entries()) {
    resultString += `<p> ${pair[0]} : ${pair[1]}`;
  }
  resultString += "</fieldset>";

  resultElem.innerHTML = resultString;
}

function validateData() {
  var formData = new FormData(document.querySelector("#id_form"));
  var resultElem = document.querySelector("#form-error");
  resultElem.innerHTML = "";

  let hasError = false;
  for (var pair of formData.entries()) {
    if (pair[1] === "") {
      console.log("empty:", pair[0], pair[1]);
      hasError = true;
    }
    // resultString += `<p> ${pair[0]} : ${pair[1]}`;
    console.log("pair", pair);
  }
  if (hasError) {
    resultElem.innerHTML = "Please compelete the inputs.";
  }
}
