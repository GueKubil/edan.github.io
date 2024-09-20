// ANIMASI HOVER PADA ICON NAVBAR
document.addEventListener("DOMContentLoaded", function() {
    var notif = document.getElementById('notif');
    var wa = document.getElementById('wa');
    var fb = document.getElementById('fb');
    
    wa.addEventListener('mouseover', function() {
        notif.style.display = 'block';
    });
    
    wa.addEventListener('mouseout', function() {
       notif.style.display = 'none'
    });

    fb.addEventListener('mouseover', function() {
        notif.style.display = 'block';
           
    fb.addEventListener('mouseout', function() {
         notif.style.display = 'none'
        });
    });
  });


  
  
  
  
  function checkScroll() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var documentHeight = document.documentElement.scrollHeight - window.innerHeight;

    if ((scrollPosition / documentHeight) > 0.35) {
      document.getElementById("back-animasi").style.opacity = "1"; 
    } else {
      document.getElementById("back-animasi").style.opacity = "0";  
    }
  }

  window.addEventListener("scroll", checkScroll);
