// ======= FIXED NAVBAR AT BANNER HEIGHT ========= 

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
    
// ======= FIXED NAVBAR AT BANNER HEIGHT END//==== 




// =============== MENU ICON ================== 

function iconSwap(x) {
    x.classList.toggle("change");
}

// ============= MENU ICON END// ============== 