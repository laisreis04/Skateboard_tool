//Button_index
var buttom = document.getElementById("botaohp");

buttom.addEventListener("mouseover", function (){
    buttom.classList.add("pop-out");
});

buttom.addEventListener("mouseout", function() {
    buttom.classList.remove("pop-out");
});

//Imagens_Page_2
var buttom = document.getElementsByClassName("frame-button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", function() {
      this.classList.add("pop-out");
    });
  
    buttons[i].addEventListener("mouseout", function() {
      this.classList.remove("pop-out");
    });
  }