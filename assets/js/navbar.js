// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("naglowek").style.fontSize = "30px";
  } else {
    document.getElementById("naglowek").style.fontSize = "90px";
  }
}