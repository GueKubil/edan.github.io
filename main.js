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

function backAnimasi(scrollPosition, documentHeight) {
    const back_animasi = document.getElementById('back-animasi');
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var documentHeight = document.documentElement.scrollHeight - window.innerHeight;

    if ((scrollPosition / documentHeight) >= 0.35 && (scrollPosition / documentHeight) <= 0.42) {
      back_animasi.style.transition = '2s'
      back_animasi.style.visibility = 'visible'
      back_animasi.style.opacity = "1";
    } 
    else {
      back_animasi.style.transition = '1s'
      back_animasi.style.visibility = 'hidden'
      back_animasi.style.opacity = "0";  
     }
  }
window.addEventListener("scroll", backAnimasi);

  