var loading;
function loader() {
  loading = setTimeout(showPage, 727+Math.random()*1000)
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("index").style.display = "block";
}