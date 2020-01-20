document.addEventListener("DOMContentLoaded", function() {
  var $element = $("footer");
  document.querySelector(".sticky").style.right = `${document
    .querySelector(".block-with-text")
    .getBoundingClientRect().left - 50}px`;
  $(window).scroll(function() {
    var scroll = $(window).scrollTop() + $(window).height();
    var offset = $element.offset().top;

    if (scroll > offset) {
      document.querySelector("footer .text").style.transform =
        "translate(-50%, 0)";
      document.querySelector(".footer").style.padding = "0 2% 0 125px";
    } else {
      document.querySelector("footer .text").style.transform = "";
      document.querySelector(".footer").style.padding = "0 125px";
    }
  });
});
