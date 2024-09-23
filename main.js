// FUNGSI LIKE1
function like() {
  let likeButton = document.getElementById('like1');
  let likeCount = document.getElementById('angkalike1');

  let storedcount = parseInt(localStorage.getItem('likeCount'));
  let count = storedcount !== null && !isNaN(storedcount) ? parseInt(storedcount) : 0;

  likeCount.textContent = count;

  if(count > 50) {
    document.getElementById('emoji-like1').style.visibility = 'visible';
  };

  likeButton.addEventListener('click', function() {
      count++; 
      likeCount.textContent = count; 
      localStorage.setItem('likeCount', count); 
  });
};
like();

// FUNGSI LIKE2
function like2() {
      let like = document.getElementById('like2');
      let angka = document.getElementById('angkalike2');

      let count = parseInt(localStorage.getItem('angka'));
      let storedcount = count !== null && !isNaN(count) ? parseInt(count) : 0;

      angka.textContent = storedcount
      if(count > 50) {
        document.getElementById('emoji-like2').style.visibility = 'visible'
      };

      like.addEventListener('click',() => {
        storedcount++
        angka.textContent = count;
        localStorage.setItem(count)
      });
};
like2();

// FUNGSI LIKE3
function like3() {
   const angka = document.getElementById('angkalike3');
   const emoji = document.getElementById('emoji-like3');
   const like = document.getElementById('like3');

   let save = parseInt(localStorage.getItem('angka'));
   let storedcount = save !== null && !isNaN(save) ? parseInt(save) : 0;

   angka.textContent = storedcount;

   if(save > 50) {
    emoji.style.visibility = 'visible';
   }

  like.addEventListener('click',() => {
      storedcount++
      angka.textContent = save;
      localStorage.setItem(save);
   });
};
like3();


// FUNGSI IKLAN DAN OVERLAY
function iklan() {
  const x = document.getElementById('x-iklan');

  const Hidden_overlay_iklan = () => {
    let iklan = document.getElementById('satu-iklan');
      iklan.style.visibility = 'hidden';

    let overlay = document.getElementById('overlay');
      overlay.style.position = 'absolute';
      overlay.style.background = 'none';
  }
  x.addEventListener('click', Hidden_overlay_iklan);
}
iklan();

// FUNGSI ANIMASI WHATSAPP 
function WhatApp() {
  const WA = document.getElementById('wa');
  const notif = document.getElementById('notif');
// FUNGSI NOTIF SHOW
const notif_show = () => {
    notif.style.visibility = 'visible';
    notif.style.opacity = '1';
    notif.style.transition = '0.5s';
};
WA.addEventListener('mouseover', notif_show);
  
// FUNGSI NOTIF HIDE
const notif_hide = () => {
    notif.style.visibility = 'hidden';
    notif.style.opacity = '0';
    notif.style.transition = '0.5s';
};
  WA.addEventListener('mouseout', notif_hide);
};
WhatApp();

//FUNGSI ANIMASI FACEBOOK
function FaceBook() {
  const fb = document.getElementById('fb');

  // FUNGSI NOTIF SHOW UNTUK FB
  const notif_show = () => {
    document.getElementById('notif').style.opacity = '1';
    document.getElementById('notif').style.transition = '0.5s';
    document.getElementById('notif').style.visibility = 'visible';  
  }
  fb.addEventListener('mouseover', notif_show);

  // FUNGSI NOTIF HIDE UNTUK FB
  const notif_hide = () => {
    document.getElementById('notif').style.opacity = '0';
    document.getElementById('notif').style.transition = '0.5s';
    document.getElementById('notif').style.visibility = 'hidden';  
  };
  fb.addEventListener('mouseout', notif_hide);
};
FaceBook();

// FUNCTION ANIMASI DISPLAY SEBELUM KONTEN2
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


// FUNCTION ANIMASI GAMBAR1
function gambar1() {
  const Animasi_gambar1 = document.getElementById('display-gambar1');  // CLASS GAMBAR1
  const scrollPosition = window.scrollY || document.documentElement.scrollTop; // INISIALISASI POSISI SCROLL
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight; // RUMUS SCROLL

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


// FUNCTION ANIMASI GAMBAR2
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


// FUNCTION ANIMASI GAMBAR3
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