function changeText() {
  var btn = document.getElementById("resumeBtn");
  if(btn.value == "View Resume"){
    btn.textContent= "Collapse Resume";
    btn.value = "Collapse Resume";
  }else{
    btn.value = "View Resume";
    btn.textContent= "View Resume";
  }
}
