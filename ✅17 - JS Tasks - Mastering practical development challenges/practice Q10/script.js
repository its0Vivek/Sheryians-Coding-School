window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var scrollTop = document.documentElement.scrollTop;
  var scrollHeight = document.documentElement.scrollHeight ;
  var clientHeight = document.documentElement.clientHeight ;
  var scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}