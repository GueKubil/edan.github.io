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
function backAnimasi() {
    const back_animasi = document.getElementById('back-animasi');
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var documentHeight = document.documentElement.scrollHeight - window.innerHeight;

    if ((scrollPosition / documentHeight) >= 0.30 && (scrollPosition / documentHeight) <= 0.42) {
      back_animasi.style.transition = '2s';
      back_animasi.style.visibility = 'visible';
      back_animasi.style.opacity = "1";
    } 
    else {
      back_animasi.style.transition = '1s';
      back_animasi.style.visibility = 'hidden';
      back_animasi.style.opacity = "0";  
     }
  }
window.addEventListener("scroll", backAnimasi);

// fungsi animasi gambar1
function gambar1() {
  const Animasi_gambar1 = document.getElementById('display-gambar1');  // CLASS GAMBAR1
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

  if((scrollPosition / documentHeight) >= 0.40 && (scrollPosition / documentHeight) <= 0.54) {
    Animasi_gambar1.style.visibility = 'visible'
    Animasi_gambar1.style.transition = '1s'
    Animasi_gambar1.style.opacity = '1'
  }
  else {
    Animasi_gambar1.style.visibility = 'hidden'
    Animasi_gambar1.style.transition = '1s'
    Animasi_gambar1.style.opacity = '0'
  }
}

window.addEventListener("scroll", gambar1)

// funsgi gambar2 
function gambar2 () {
  const Animasi_gambar2 = document.getElementById('display-gambar2');
  const scroll = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

  if((scroll / scrollHeight) >= 0.58 && (scroll / scrollHeight) <= 0.70) {
    Animasi_gambar2.style.visibility = 'visible';
    Animasi_gambar2.style.opacity = '1';
    Animasi_gambar2.style.transition = '1s';
  }
  else {
    Animasi_gambar2.style.visibility = 'hidden';
    Animasi_gambar2.style.opacity = '0';
    Animasi_gambar2.style.transition = '1s';
  }
}
window.addEventListener('scroll', gambar2);

// animasi gambar3
function gambar3() {
  const Animasi_gambar3 = document.getElementById('display-gambar3');
  const scroll = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

  if((scroll / scrollHeight) >= 0.76 && (scroll / scrollHeight) <= 0.87) {
    Animasi_gambar3.style.opacity = '1';
    Animasi_gambar3.style.transition = '1s';
    Animasi_gambar3.style.visibility = 'visible';
  }
  else {
    Animasi_gambar3.style.opacity = '0';
    Animasi_gambar3.style.transition = '1s';
    Animasi_gambar3.style.visibility = 'hidden';
  }
}
window.addEventListener('scroll', gambar3);