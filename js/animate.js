
// JS is to make the text editable, not required for the effect. Thanks for the suggestion @chriscoyier! 
var logo = document.querySelector("logo");

logo.addEventListener("input", function() {
    this.setAttribute("data-heading", this.innerText);
});