function IE(e) {
    if (navigator.appName == "Microsoft Internet Explorer" && (event.button == "2" || event.button == "3")) {
         alert('Ciężko pracowaliśmy nad tą stroną!!! Dla ciebie walczymy przed tym świnstwem! Więc proszę unikaj klikania prawego przycisku myszy. Dziękujemy!');
         return false;
    }
}
function NS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
         if (e.which == "2" || e.which == "3") {
              alert('Ciężko pracowaliśmy nad tą stroną!!! Dla ciebie walczymy przed tym świnstwem! Więc proszę unikaj klikania prawego przycisku myszy. Dziękujemy!');
              return false;
         }
    }
}
document.onmousedown=IE;document.onmouseup=NS;document.oncontextmenu=new Function("return false");