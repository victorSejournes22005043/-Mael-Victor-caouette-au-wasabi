const head = document.querySelector('head');
document.getElementById("change_theme").addEventListener("click", ChangeColors);

let click = 0;
function ChangeColors() {
   click += 1
   if (click > 1) {
      const darkTheme = document.getElementById('darkTheme');
      head.removeChild(darkTheme);
      click = 0;
      return
   }
   const link = document.createElement('link');
   link.setAttribute('rel', 'stylesheet');
   link.setAttribute('href', 'css/style_dark.css');
   link.setAttribute('id', 'darkTheme')
   head.appendChild(link);
}
