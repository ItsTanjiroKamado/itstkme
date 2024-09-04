setTimeout(function(){
  document.querySelector(".justgotfofed").style.display = "block"
  b = false
  document.querySelector(".mlg").style.display = "block"
  setInterval(function(){
    if(b == false){
      document.body.style.backgroundColor = "red";
      b = true
    }
    else{
      document.body.style.backgroundColor = "white";
      b = false
    }
  }, 1000)
}, 3000)