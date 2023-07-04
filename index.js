//Action for index page

var button = document.getElementById("buttonhp");

button.addEventListener("mouseenter", function (){
    button.classList.add("pop-out");
});

button.addEventListener("mouseleave", function() {
    button.classList.remove("pop-out");
});

//action for page 2_part 2

var buttom = document.getElementsByClassName("frames");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseenter", function() {
      this.classList.add("pop-out");
    });
  
    buttons[i].addEventListener("mouseleave", function() {
      this.classList.remove("pop-out");
    });
  }