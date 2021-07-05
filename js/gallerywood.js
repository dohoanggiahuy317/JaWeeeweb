document.getElementById('contact-home').addEventListener('click', function(){
  TweenMax.to('#header-bottom', 0.5, {display: 'flex', opacity: '1'});

  TweenMax.to('.bottom', 0, {delay: '0.5', opacity: '1'});
  TweenMax.to('.bottom', 0.5, {height: '100vh', ease: Power2.easeInOut});
  TweenMax.to('#changecolor', 0.5, {delay: 0.5, width: '98vw', ease: Power2.easeInOut});
})

document.getElementById('exit').addEventListener('click', function(){
  TweenMax.to('.bottom', 0.5, {height: '0vh', ease: Power2.easeInOut});
  TweenMax.to('#changecolor', 0.5, {delay: 0.5, width: '0vw', ease: Power2.easeInOut});
})


document.getElementById('welcome-home').addEventListener('mouseover', function(){
  TweenMax.to('#fake-welcome-up', 0.3, {width: '13vh'});
  TweenMax.to('#fake-welcome-bottom', 0.3, {width: '13vh'});
  TweenMax.to('#fake-welcome-sideleft', 0.3, {height: '5vh'});
  TweenMax.to('#fake-welcome-sideright', 0.3, {height: '5vh'});
})
document.getElementById('welcome-home').addEventListener('mouseout', function(){
  TweenMax.to('#fake-welcome-up', 0.3, {width: '0vh'});
  TweenMax.to('#fake-welcome-bottom', 0.3, {width: '0vh'});
  TweenMax.to('#fake-welcome-sideleft', 0.3, {height: '0vh'});
  TweenMax.to('#fake-welcome-sideright', 0.3, {height: '0vh'});
})

document.getElementById('home-home').addEventListener('mouseover', function(){
  TweenMax.to('#fake-home-up', 0.3, {width: '13vh'});
  TweenMax.to('#fake-home-bottom', 0.3, {width: '13vh'});
  TweenMax.to('#fake-home-sideleft', 0.3, {height: '5vh'});
  TweenMax.to('#fake-home-sideright', 0.3, {height: '5vh'});
})
document.getElementById('home-home').addEventListener('mouseout', function(){
  TweenMax.to('#fake-home-up', 0.3, {width: '0vh'});
  TweenMax.to('#fake-home-bottom', 0.3, {width: '0vh'});
  TweenMax.to('#fake-home-sideleft', 0.3, {height: '0vh'});
  TweenMax.to('#fake-home-sideright', 0.3, {height: '0vh'});
})

document.getElementById('gallery-home').addEventListener('mouseover', function(){
  TweenMax.to('#fake-gallery-up', 0.3, {width: '13vh'});
  TweenMax.to('#fake-gallery-bottom', 0.3, {width: '13vh'});
  TweenMax.to('#fake-gallery-sideleft', 0.3, {height: '5vh'});
  TweenMax.to('#fake-gallery-sideright', 0.3, {height: '5vh'});
})
document.getElementById('gallery-home').addEventListener('mouseout', function(){
  TweenMax.to('#fake-gallery-up', 0.3, {width: '0vh'});
  TweenMax.to('#fake-gallery-bottom', 0.3, {width: '0vh'});
  TweenMax.to('#fake-gallery-sideleft', 0.3, {height: '0vh'});
  TweenMax.to('#fake-gallery-sideright', 0.3, {height: '0vh'});
})

document.getElementById('contact-home').addEventListener('mouseover', function(){
  TweenMax.to('#fake-contact-up', 0.3, {width: '13vh'});
  TweenMax.to('#fake-contact-bottom', 0.3, {width: '13vh'});
  TweenMax.to('#fake-contact-sideleft', 0.3, {height: '5vh'});
  TweenMax.to('#fake-contact-sideright', 0.3, {height: '5vh'});
})
document.getElementById('contact-home').addEventListener('mouseout', function(){
  TweenMax.to('#fake-contact-up', 0.3, {width: '0vh'});
  TweenMax.to('#fake-contact-bottom', 0.3, {width: '0vh'});
  TweenMax.to('#fake-contact-sideleft', 0.3, {height: '0vh'});
  TweenMax.to('#fake-contact-sideright', 0.3, {height: '0vh'});
})


document.getElementById('animation-ball-2').addEventListener('click', function(){
TweenMax.to('#animation-ball-2', 2, {left: '120vw', ease: Power0.easeNone});
TweenMax.to('#animation-ball-2', 0, {delay: 3, display: 'none', ease: Power0.easeNone});
TweenMax.to('#hide', 1.5, {width: '0', display:'none', ease: Power0.easeNone});
TweenMax.to('#subtitle', 1, {delay: 2, top: '30vh', ease: Power0.easeNone});
TweenMax.to('#html', 0, {height: '100vw', ease: Power0.easeNone});
TweenMax.to('#table', 1, {delay: 2, opacity: '1', top:'55vh', ease: Power0.easeNone});
TweenMax.to('#table', 0, {display: 'table', ease: Power0.easeNone});
TweenMax.to('#animation-ball-1', 0, {delay: 3.5, display: 'flex', ease: Power0.easeNone});
TweenMax.to('#click', 0.5, {opacity: '0', ease: Power0.easeNone});
TweenMax.to('#click', 0, {delay: 1, display: 'none', ease: Power0.easeNone});
})






var links = ['https://i.imgur.com/eTvYT1G.jpg',
'https://i.imgur.com/QxfkBIv.jpg',
'https://i.imgur.com/ENV55wo.jpg',
'https://i.imgur.com/KhnR5Gg.jpg',
'https://i.imgur.com/wzlYSs9.jpg',
'https://i.imgur.com/frnuuzr.jpg',
'https://i.imgur.com/EBtog6G.jpg',
'https://i.imgur.com/Iwh2Qqc.jpg',
'https://i.imgur.com/wIWQlZL.jpg',
'https://i.imgur.com/UsDYQqe.jpg',
'https://i.imgur.com/IXzrywT.jpg',
'https://i.imgur.com/m78wIL7.jpg',
'https://i.imgur.com/ZQEOTah.jpg',
'https://i.imgur.com/itBzHB5.jpg',
'https://i.imgur.com/cbF5mZF.jpg',
'https://i.imgur.com/5G4gZHD.jpg',
'https://i.imgur.com/e86hFuy.jpg',
'https://i.imgur.com/WaSbgI2.jpg',
'https://i.imgur.com/u7lNg2Q.jpg',
'https://i.imgur.com/HBIlh7h.jpg',
'https://i.imgur.com/alFUJ2Y.jpg',
'https://i.imgur.com/oACe4Qh.jpg',
'https://i.imgur.com/yLt0diK.jpg',
'https://i.imgur.com/06UDAxY.jpg',
'https://i.imgur.com/zKEC0nW.jpg',
'https://i.imgur.com/FPYDMru.jpg',
'https://i.imgur.com/TpWuAuT.jpg',
'https://i.imgur.com/UlbuEpt.jpg',
'https://i.imgur.com/7EkaFuf.jpg',
'https://i.imgur.com/VLUGigg.jpg',
'https://i.imgur.com/cLVbNAw.jpg',
'https://i.imgur.com/Bnl1QMo.jpg',
'https://i.imgur.com/nwqXzyp.jpg',
'https://i.imgur.com/mbjBKm8.jpg',
'https://i.imgur.com/CsyuPNh.jpg',
'https://i.imgur.com/YFx6XJH.jpg'];
// function shuffle() {
//   for (let i = test.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [test[i], test[j]] = [test[j], test[i]];
//   }
// };
// shuffle();
links.sort(()=> Math.random()-0.5)
var test = document.getElementsByClassName("imagecontainer");
for (let i=0; i<test.length; i++){
  test[i].style.backgroundImage = "url(" + links[i] + ")"
};
console.log(test)






