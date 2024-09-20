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

