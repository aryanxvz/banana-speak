var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// translateButton.addEventListener("click", buttonClickHandler);

// var translateInput = document.querySelector("#translate-intput");
// var translateOutput = document.querySelector("#translate-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("erroe occured!", error);
  alert("server down! try again later");
}

function clickHandler() {
  var inputText = txtInput.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);

// function buttonClickHandler(event) {
//     console.log("button clicked");
//     var input = translateInput.value;
//     var finalURL = constructURL(input);
//     console.log(finalURL);
//     fetch(finalURL);
//         .then(response => response.json())
//         .then(json => {
//             translateOutput.innerText = json.contents.translated;
//         })
//         .catch(() => alert("server down"))
// }

// function constructURL(inputText) {
//     var encodedURI = encodeURI(inputText);
//     return `${url}?text=${encodedURI}`;
// }
