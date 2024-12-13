let mybutton = document.getElementById("topBtn");

function topFunction() {
  document.documentElement.scrollTop = 0; 
}



function askPass(){
  let inputElement = document.getElementById('password');
        let name = inputElement.value;
        var element = document.getElementById('boxen');
        
  if (name == 14) {
    element.classList.remove("hide");
  }else{
    document.write('reload and try again');
  }      
}
