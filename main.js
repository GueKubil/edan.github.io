// ANIMASI HOVER PADA ICON NAVBAR
document.addEventListener("DOMContentLoaded", function() {
    const notif = document.getElementById('notif');
    const wa = document.getElementById('wa');
    const fb = document.getElementById('fb');
    
   wa.addEventListener('mouseover', function() { // visible
        notif.style.visibility = 'visible';
        notif.style.transition = '0.5s';
        notif.style.opacity = '1';
    });
    
    wa.addEventListener('mouseout', function() { // hide
       notif.style.visibility = 'hidden';
       notif.style.transition = '1s';
       notif.style.opacity = '0';
    });

    fb.addEventListener('mouseover', function() { // hide
        notif.style.visibility = 'visible';
        notif.style.transition = '0.5s';
        notif.style.opacity = '1';
           
    fb.addEventListener('mouseout', function() { // visible
         notif.style.visibility = 'hidden';
         notif.style.transition = '1s';
         notif.style.opacity = '0';
        });
    });
  });

  // HIDDEN ANIMASI SEBELUM KONTEN2
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

  