//Show message on focus
document.getElementsByClassName("mobile")[0].addEventListener("focus",
  function() {
  document.getElementsByClassName("mobile-message")[0].style.display = "inline";
}
);

//Hide message on blur
document.getElementsByClassName("mobile")[0].addEventListener("blur",
  function() {
  document.getElementsByClassName("mobile-message")[0].style.display = "none";
}
);