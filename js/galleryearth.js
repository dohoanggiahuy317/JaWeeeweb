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

var links = ['https://i.imgur.com/N4JHt0r.jpg',
'https://imgur.com/emThItP.jpg',
'https://imgur.com/0aWyOSW.jpg',
'https://imgur.com/XxqMVPP.jpg',
'https://imgur.com/79THQX6.jpg',
'https://imgur.com/oZZIIYe.jpg',
'https://imgur.com/rPWOEHd.jpg',
'https://imgur.com/BBL3zzm.jpg',
'https://imgur.com/dn2ZOQJ.jpg',
'https://imgur.com/mD3E3fX.jpg',
'https://imgur.com/4MX34Ha.jpg',
'https://imgur.com/lxvQftR.jpg',
'https://imgur.com/ACRWPaU.jpg',
'https://imgur.com/00Ncaf0.jpg',
'https://imgur.com/KDTKpOv.jpg',
'https://imgur.com/nbMd3lu.jpg',
'https://imgur.com/9tTKvN9.jpg',
'https://imgur.com/t3sZcl3.jpg',
'https://imgur.com/GnKXm7j.jpg',
'https://imgur.com/ePCLXAH.jpg',
'https://imgur.com/o4CIZdj.jpg'];
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






