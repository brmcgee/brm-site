// ======= FIXED NAV-BAR AT BANNER HEIGHT ========= 

document.addEventListener("DOMContentLoaded", function(){
      
  window.addEventListener('scroll', function() {

  let bannerHeight = document.querySelector('.banner').offsetHeight;
              //fixes navBar at banner height
  if (window.scrollY > bannerHeight) {
      document.getElementById('navBar').classList.add('fixed-top');
              // add padding top to show content behind navbar
      let navBarHeight = document.querySelector('.nav-bar').offsetHeight;
      document.body.style.paddingTop = (navBarHeight - 3) + 'px';
  } else {
        document.getElementById('navBar').classList.remove('fixed-top');
              // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
    });
  }); 
  
// ======= FIXED NAV-BAR  END// =============== 




// =============== MENU ICON ================== 

function iconSwap(x) {
  x.classList.toggle("change");
}

// ============= MENU ICON END// ============== 

/* ======= CONNECT WIDGET ========  */
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
modal.style.display = "block";
}

span.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}

/* ===== CONNECT WIDGET END/ =====  */