document.getElementById("wp").onmouseover = function() {
    document.getElementById("whats").style.visibility = "visible";

}
document.getElementById("wp").onmouseout = function() {
    document.getElementById("whats").style.visibility = "hidden";

}
document.getElementById("ig").onmouseover = function() {
    document.getElementById("insta").style.visibility = "visible";

}
document.getElementById("ig").onmouseout = function() {
    document.getElementById("insta").style.visibility = "hidden";

}
document.getElementById("gm").onmouseover = function() {
    document.getElementById("gmail").style.visibility = "visible";

}
document.getElementById("gm").onmouseout = function() {
    document.getElementById("gmail").style.visibility = "hidden";

}

document.getElementById("wp").onclick = function() {
    var win = window.open(`https://wa.me/2494287139?text=Hola`, '_blank');
  }

document.getElementById("ig").onclick = function() {
    var win = window.open(`https://www.instagram.com/100focs/`, '_blank');
  }