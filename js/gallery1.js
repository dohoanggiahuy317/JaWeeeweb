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
  TweenMax.to('#html', 0, {height: '500vw', ease: Power0.easeNone});
  TweenMax.to('#table', 1, {delay: 2, opacity: '1', top:'55vh', ease: Power0.easeNone});
  TweenMax.to('#table', 0, {display: 'table', ease: Power0.easeNone});
  TweenMax.to('#animation-ball-1', 0, {delay: 3.5, display: 'flex', ease: Power0.easeNone});
  TweenMax.to('#click', 0.5, {opacity: '0', ease: Power0.easeNone});
  TweenMax.to('#click', 0, {delay: 1, display: 'none', ease: Power0.easeNone});
})

var links = ['https://i.imgur.com/LuQYvrx.jpg',
  'https://i.imgur.com/zyf4lWo.jpg',
  'https://i.imgur.com/5xVVHkm.jpg',
  'https://i.imgur.com/hGnCXgV.jpg',
  'https://i.imgur.com/PeLWuoT.jpg',
  'https://i.imgur.com/RPYIFNl.jpg',
  'https://i.imgur.com/9YoFY3U.jpg',
  'https://i.imgur.com/2uYQn8b.jpg',
  'https://i.imgur.com/tZCTCLZ.jpg',
  'https://i.imgur.com/164FUcO.jpg',
  'https://i.imgur.com/Bp8jhPL.jpg',
  'https://i.imgur.com/x1Ixtkh.jpg',
  'https://i.imgur.com/yWiXcIn.jpg',
  'https://i.imgur.com/6zHAuH4.jpg',
  'https://i.imgur.com/ApmqAce.jpg',
  'https://i.imgur.com/uEiKKdZ.jpg',
  'https://i.imgur.com/pd0QHYm.jpg',
  'https://i.imgur.com/SI5kDlr.jpg',
  'https://i.imgur.com/kpsiBVt.jpg',
  'https://i.imgur.com/zyf4lWo.jpg',
  'https://i.imgur.com/mO3Ez1W.jpg',
  'https://i.imgur.com/zVqLgnm.jpg',
  'https://i.imgur.com/bUBLGbt.jpg',
  'https://i.imgur.com/RSDC9bG.jpg',
  'https://i.imgur.com/ry62PV4.jpg',
  'https://i.imgur.com/CFPg0t0.jpg',
  'https://i.imgur.com/tByeNn0.jpg',
  'https://i.imgur.com/IdJ00PS.jpg',
  'https://i.imgur.com/zcZWoMI.jpg',
  'https://i.imgur.com/pZEKFku.jpg',
  'https://i.imgur.com/gsrNZEw.jpg',
  'https://i.imgur.com/yL61MEj.jpg',
  'https://i.imgur.com/P9mCjKp.jpg',
  'https://i.imgur.com/0kAumK9.jpg',
  'https://i.imgur.com/3Qcvw2F.jpg',
  'https://i.imgur.com/AE48Uzy.jpg',
  'https://i.imgur.com/bZj18gg.jpg',
  'https://i.imgur.com/Q1cSq92.jpg',
  'https://i.imgur.com/W3VhVBJ.jpg',
  'https://i.imgur.com/uXxYRg9.jpg',
  'https://i.imgur.com/tz5ml6a.jpg',
  'https://i.imgur.com/fvduntv.jpg',
  'https://i.imgur.com/te0ITDg.jpg',
  'https://i.imgur.com/uGWGKGb.jpg',
  'https://i.imgur.com/WXirMU5.jpg',
  'https://i.imgur.com/s2ZbbSG.jpg',
  'https://i.imgur.com/sCcnxRg.jpg',
  'https://i.imgur.com/Sco2dCY.jpg',
  'https://i.imgur.com/n5ZXrL4.jpg',
  'https://i.imgur.com/AqqZk4a.jpg',
  'https://i.imgur.com/OyiK51v.jpg',
  'https://i.imgur.com/TCftZW2.jpg',
  'https://i.imgur.com/sJknXGU.jpg',
  'https://i.imgur.com/1oY7dOR.jpg',
  'https://i.imgur.com/LIhKujf.jpg',
  'https://i.imgur.com/wDVozyi.png',
  'https://i.imgur.com/Puwx1cD.jpg',
  'https://i.imgur.com/bHysJui.jpg',
  'https://i.imgur.com/2jdPQon.jpg',
  'https://i.imgur.com/zGlzdXM.jpg',
  'https://i.imgur.com/xQ8tkcP.jpg',
  'https://i.imgur.com/sKpSGJU.jpg',
  'https://i.imgur.com/xL80j4r.jpg',
  'https://i.imgur.com/UtgGVnm.jpg',
  'https://i.imgur.com/W2X5FkA.jpg',
  'https://i.imgur.com/kwe10U8.jpg',
  'https://i.imgur.com/6DN7KBQ.jpg',
  'https://i.imgur.com/Tn27n5Z.jpg',
  'https://i.imgur.com/iwsFGUm.jpg',
  'https://i.imgur.com/iyocsz6.jpg',
  'https://i.imgur.com/shGw88N.jpg',
  'https://i.imgur.com/ceuoS24.jpg',
  'https://i.imgur.com/dfhHjce.jpg',
  'https://i.imgur.com/15tlDFf.jpg',
  'https://i.imgur.com/lwWX7Gz.jpg',
  'https://i.imgur.com/9kusciz.jpg',
  'https://i.imgur.com/BWjgqJJ.jpg',
  'https://i.imgur.com/IemU5kX.jpg',
  'https://i.imgur.com/hSpeAnV.jpg',
  'https://i.imgur.com/z5Q7LO5.jpg',
  'https://i.imgur.com/zWWT4ha.jpg',
  'https://i.imgur.com/AAkqGHJ.jpg',
  'https://i.imgur.com/PSgTpxT.jpg',
  'https://i.imgur.com/pi26YBH.jpg',
  'https://i.imgur.com/3JqW4Mp.jpg',
  'https://i.imgur.com/DJhGMsw.jpg',
  'https://i.imgur.com/vDsYvAw.jpg',
  'https://i.imgur.com/WlCACM5.jpg',
  'https://i.imgur.com/15tlDFf.jpg',
  'https://i.imgur.com/lwWX7Gz.jpg',
  'https://i.imgur.com/9kusciz.jpg',
  'https://i.imgur.com/BWjgqJJ.jpg',
  'https://i.imgur.com/IemU5kX.jpg',
  'https://i.imgur.com/hSpeAnV.jpg',
  'https://i.imgur.com/z5Q7LO5.jpg',
  'https://i.imgur.com/zWWT4ha.jpg',
  'https://i.imgur.com/AAkqGHJ.jpg',
  'https://i.imgur.com/PSgTpxT.jpg',
  'https://i.imgur.com/pi26YBH.jpg'];
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





