
 function init_style(){
      document.getElementById("change_theme").addEventListener("click", ChangeColors)
 }

 function ChangeColors() {
    document.querySelector("body").removeAttribute("class");
    document.querySelector("body").setAttribute("style","background-color: black");
 }
