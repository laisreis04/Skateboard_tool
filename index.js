
var button = document.getElementById("buttonhp");

button.addEventListener("mouseenter", function (){
    button.classList.add("pop-out");
});

button.addEventListener("mouseleave", function() {
    button.classList.remove("pop-out");
});


var buttom = document.getElementsByClassName("frame-button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", function() {
      this.classList.add("pop-out");
    });
  
    buttons[i].addEventListener("mouseout", function() {
      this.classList.remove("pop-out");
    });
  }