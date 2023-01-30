  // DOMContentLoaded START
  document.addEventListener("DOMContentLoaded", function(){
      
    window.addEventListener('scroll', function() {
      
        let logo_height = document.querySelector('.logo').offsetHeight;
        //preset height to fix navbar at

      if (window.scrollY > logo_height) {
        document.getElementById('navBar').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.nav-bar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navBar').classList.remove('fixed-top');
        // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
    });
  }); 
  // DOMContentLoaded  END