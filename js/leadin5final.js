document.getElementById('media-right').addEventListener('click', function(){
    TweenMax.to('#left', 1, {delay: 0.5, width: '100vw', ease: Power3.easeInOut});
    TweenMax.to('#right', 1, {delay: 0.5, width: '0vw', ease: Power3.easeInOut});

    TweenMax.to('#left-title', 1, {delay: 0.5, marginRight: '92vh', ease: Power3.easeInOut});
    TweenMax.to('#right-title', 1, {delay: 0.5, marginRight: '92vh', ease: Power3.easeInOut});
    TweenMax.to('#left-title', 0, {delay: 1, display: 'flex'});
    TweenMax.to('#right-title', 0, {delay: 1, display: 'none'});

    TweenMax.to('#header-right', 0.5, {display: 'none', opacity: '0'});
    TweenMax.to('#header-left', 0.5, {display: 'flex', opacity: '1'});
    TweenMax.to('#control-right', 0.5, {display: 'none', opacity: '0'});
    TweenMax.to('#control-left', 0.5, {display: 'flex', opacity: '1'});
    TweenMax.to('#text-bio', 0.5, {opacity: '0'});
    TweenMax.to('#icon', 0.5, {opacity: '1'});
    TweenMax.to('#text-name', 0.5, {opacity: '1'});
    TweenMax.to('#animation-land-1', 0.5, {display: 'none', opacity: '0'});
    TweenMax.to('#animation-ball-1', 0.5, {display: 'none', opacity: '0'});
})

document.getElementById('bio-left').addEventListener('click', function(){
    TweenMax.to('#right', 1, {delay: 0.5, width: '100vw', ease: Power3.easeInOut});
    TweenMax.to('#left', 1, {delay: 0.5, width: '0vw', ease: Power3.easeInOut});
    TweenMax.to('#right-title', 1, {delay: 0.5, marginRight: '10vh', ease: Power3.easeInOut});
    TweenMax.to('#left-title', 1, {delay: 0.5, marginRight: '10vh', ease: Power3.easeInOut});
    TweenMax.to('#right-title', 0, {delay: 1, display: 'flex'});
    TweenMax.to('#left-title', 0, {delay: 1, display: 'none'});
    TweenMax.to('#header-left', 0.5, {display: 'none', opacity: '0'});
    TweenMax.to('#header-right', 0.5, {display: 'flex', opacity: '1'});
    TweenMax.to('#control-left', 0.5, {display: 'none', opacity: '0'});
    TweenMax.to('#control-right', 0.5, {display: 'flex', opacity: '1'});
    TweenMax.to('#text-bio', 0.5, {opacity: '1'});
    TweenMax.to('#icon', 0.5, {opacity: '0'});
    TweenMax.to('#text-name', 0.5, {opacity: '0'});
    TweenMax.to('#animation-land-1', 1, {delay: 1.25, display: 'flex', opacity: '1'});
    TweenMax.to('#animation-ball-1', 1, {delay: 1.25, display: 'flex', opacity: '1'});
})

document.getElementById('contact-right').addEventListener('click', function(){
      TweenMax.to('.main-title', 0.5, {opacity: '0'});
      TweenMax.to('.main-title', 0.5, {opacity: '0'});
      
      TweenMax.to('#header-left', 0.5, {display: 'none', opacity: '0'});
      TweenMax.to('#header-right', 0.5, {display: 'none', opacity: '0'});
      TweenMax.to('#header-bottom', 0.5, {display: 'flex', opacity: '1'});

      TweenMax.to('#text-bio', 0.5, {opacity: '0'});

      TweenMax.to('.control', 0.5, {opacity: '0'});

      TweenMax.to('.bottom', 0, {delay: '0.5', opacity: '1'});
      TweenMax.to('.bottom', 0.5, {height: '100vh', ease: Power2.easeInOut});
      TweenMax.to('.main', 0.5, {delay: '0.5', height: '0', ease: Power2.easeInOut});
      
      TweenMax.to('#left', 0, {delay: 0.5, width: '0'});
      TweenMax.to('#right', 0, {delay: 0.5, width: '100vw'});
      TweenMax.to('#right-title', 0, {delay: 0.5, marginRight: '10vh', ease: Power3.easeInOut});
      TweenMax.to('#left-title', 0, {delay: 0.5, marginRight: '10vh', ease: Power3.easeInOut});
      TweenMax.to('#right-title', 0, {delay: 0.5, display: 'flex'});
      TweenMax.to('#left-title', 0, {delay: 0.5, display: 'none'});

      TweenMax.to('#control-left', 0, {delay: 0.5, display: 'none', opacity: '0'});
      TweenMax.to('#control-right', 0.5, {delay: 0.5, display: 'flex', opacity: '1'});
      TweenMax.to('#text-bio', 0, {delay: 0.5, opacity: '1'});
      TweenMax.to('#icon', 0, {delay: 0.5, opacity: '0'});
      TweenMax.to('#text-name', 0, {delay: 0.5, opacity: '0'});

      TweenMax.to('#animation-land-1', 0.5, {display: 'none', opacity: '0'});
      TweenMax.to('#animation-ball-1', 0.5, {display: 'none', opacity: '0'});
})

document.getElementById('contact-left').addEventListener('click', function(){
      TweenMax.to('.main-title', 0.5, {opacity: '0'});

      TweenMax.to('#header-left', 0.5, {display: 'none', opacity: '0'});
      TweenMax.to('#header-right', 0.5, {display: 'none', opacity: '0'});
      TweenMax.to('#header-bottom', 0.5, {display: 'flex', opacity: '1'});

      TweenMax.to('#text-bio', 0.5, {opacity: '0'});
      TweenMax.to('.control', 0.5, { opacity: '0'});

      TweenMax.to('#icon', 0.5, {opacity: '0'});
      TweenMax.to('#text-name', 0.5, {opacity: '0'});

      TweenMax.to('.bottom', 0, {delay: '0.5', opacity: '1'});
      TweenMax.to('.bottom', 0.5, {height: '100vh', ease: Power2.easeInOut});
      TweenMax.to('.main', 0.5, {delay: '0.5', height: '0', ease: Power2.easeInOut});

      TweenMax.to('#left', 0, {delay: 0.5, width: '0'});
      TweenMax.to('#right', 0, {delay: 0.5, width: '100vw'});
      TweenMax.to('#right-title', 0, {delay: 0.5, marginRight: '10vh', ease: Power3.easeInOut});
      TweenMax.to('#left-title', 0, {delay: 0.5, marginRight: '10vh', ease: Power3.easeInOut});
      TweenMax.to('#right-title', 0, {delay: 0.5, display: 'flex'});
      TweenMax.to('#left-title', 0, {delay: 0.5, display: 'none'});

      TweenMax.to('#control-left', 0, {delay: 0.5, display: 'none', opacity: '0'});
      TweenMax.to('#control-right', 0.5, {delay: 0.5, display: 'flex', opacity: '1'});
      TweenMax.to('#text-bio', 0, {delay: 0.5, opacity: '1'});
      TweenMax.to('#icon', 0, {delay: 0.5, opacity: '0'});
      TweenMax.to('#text-name', 0, {delay: 0.5, opacity: '0'});
})

document.getElementById('exit').addEventListener('click', function(){
  TweenMax.to('.main-title', 0.5, {opacity: '1'});

  TweenMax.to('#header-left', 0.5, {display: 'none', opacity: '0'});
  TweenMax.to('#header-right', 0.5, {display: 'flex', opacity: '1'});
  TweenMax.to('#header-bottom', 0.5, {display: 'none', opacity: '0'});

  TweenMax.to('.bottom', 0.5, {height: '0vh', ease: Power2.easeInOut});
  TweenMax.to('.main', 0.5, {height: '100vh', ease: Power2.easeInOut});

  TweenMax.to('#animation-land-1', 0.5, {delay: 0.5, display: 'flex', opacity: '1'});
  TweenMax.to('#animation-ball-1', 0.5, {delay: 0.5, display: 'flex', opacity: '1'});
  
})

//Des fakeborder right
//Des fakeborder right
//Des fakeborder right
//Des fakeborder right
//Des fakeborder right

document.getElementById('welcome-right').addEventListener('mouseover', function(){
  TweenMax.to('#fake-welcomeright-up', 0.3, {width: '13vh'});
  TweenMax.to('#fake-welcomeright-bottom', 0.3, {width: '13vh'});
  TweenMax.to('#fake-welcomeright-sideleft', 0.3, {height: '5vh'});
  TweenMax.to('#fake-welcomeright-sideright', 0.3, {height: '5vh'});
})
document.getElementById('welcome-right').addEventListener('mouseout', function(){
  TweenMax.to('#fake-welcomeright-up', 0.3, {width: '0vh'});
  TweenMax.to('#fake-welcomeright-bottom', 0.3, {width: '0vh'});
  TweenMax.to('#fake-welcomeright-sideleft', 0.3, {height: '0vh'});
  TweenMax.to('#fake-welcomeright-sideright', 0.3, {height: '0vh'});
})

document.getElementById('home-right').addEventListener('mouseover', function(){
  TweenMax.to('#fake-homeright-up', 0.3, {width: '13vh'});
  TweenMax.to('#fake-homeright-bottom', 0.3, {width: '13vh'});
  TweenMax.to('#fake-homeright-sideleft', 0.3, {height: '5vh'});
  TweenMax.to('#fake-homeright-sideright', 0.3, {height: '5vh'});
})
document.getElementById('home-right').addEventListener('mouseout', function(){
  TweenMax.to('#fake-homeright-up', 0.3, {width: '0vh'});
  TweenMax.to('#fake-homeright-bottom', 0.3, {width: '0vh'});
  TweenMax.to('#fake-homeright-sideleft', 0.3, {height: '0vh'});
  TweenMax.to('#fake-homeright-sideright', 0.3, {height: '0vh'});
})

document.getElementById('gallery-right').addEventListener('mouseover', function(){
  TweenMax.to('#fake-galleryright-up', 0.3, {width: '13vh'});
  TweenMax.to('#fake-galleryright-bottom', 0.3, {width: '13vh'});
  TweenMax.to('#fake-galleryright-sideleft', 0.3, {height: '5vh'});
  TweenMax.to('#fake-galleryright-sideright', 0.3, {height: '5vh'});
})
document.getElementById('gallery-right').addEventListener('mouseout', function(){
  TweenMax.to('#fake-galleryright-up', 0.3, {width: '0vh'});
  TweenMax.to('#fake-galleryright-bottom', 0.3, {width: '0vh'});
  TweenMax.to('#fake-galleryright-sideleft', 0.3, {height: '0vh'});
  TweenMax.to('#fake-galleryright-sideright', 0.3, {height: '0vh'});
})

document.getElementById('contact-right').addEventListener('mouseover', function(){
  TweenMax.to('#fake-contactright-up', 0.3, {width: '13vh'});
  TweenMax.to('#fake-contactright-bottom', 0.3, {width: '13vh'});
  TweenMax.to('#fake-contactright-sideleft', 0.3, {height: '5vh'});
  TweenMax.to('#fake-contactright-sideright', 0.3, {height: '5vh'});
})
document.getElementById('contact-right').addEventListener('mouseout', function(){
  TweenMax.to('#fake-contactright-up', 0.3, {width: '0vh'});
  TweenMax.to('#fake-contactright-bottom', 0.3, {width: '0vh'});
  TweenMax.to('#fake-contactright-sideleft', 0.3, {height: '0vh'});
  TweenMax.to('#fake-contactright-sideright', 0.3, {height: '0vh'});
})


//Des fakeborder left
//Des fakeborder left
//Des fakeborder left
//Des fakeborder left
//Des fakeborder left
//Des fakeborder left


document.getElementById('welcome-left').addEventListener('mouseover', function(){
  TweenMax.to('#fake-welcomeleft-up', 0.3, {width: '13vh'});
  TweenMax.to('#fake-welcomeleft-bottom', 0.3, {width: '13vh'});
  TweenMax.to('#fake-welcomeleft-sideleft', 0.3, {height: '5vh'});
  TweenMax.to('#fake-welcomeleft-sideright', 0.3, {height: '5vh'});
})
document.getElementById('welcome-left').addEventListener('mouseout', function(){
  TweenMax.to('#fake-welcomeleft-up', 0.3, {width: '0vh'});
  TweenMax.to('#fake-welcomeleft-bottom', 0.3, {width: '0vh'});
  TweenMax.to('#fake-welcomeleft-sideleft', 0.3, {height: '0vh'});
  TweenMax.to('#fake-welcomeleft-sideright', 0.3, {height: '0vh'});
})

document.getElementById('home-left').addEventListener('mouseover', function(){
  TweenMax.to('#fake-homeleft-up', 0.3, {width: '13vh'});
  TweenMax.to('#fake-homeleft-bottom', 0.3, {width: '13vh'});
  TweenMax.to('#fake-homeleft-sideleft', 0.3, {height: '5vh'});
  TweenMax.to('#fake-homeleft-sideright', 0.3, {height: '5vh'});
})
document.getElementById('home-left').addEventListener('mouseout', function(){
  TweenMax.to('#fake-homeleft-up', 0.3, {width: '0vh'});
  TweenMax.to('#fake-homeleft-bottom', 0.3, {width: '0vh'});
  TweenMax.to('#fake-homeleft-sideleft', 0.3, {height: '0vh'});
  TweenMax.to('#fake-homeleft-sideright', 0.3, {height: '0vh'});
})

document.getElementById('gallery-left').addEventListener('mouseover', function(){
  TweenMax.to('#fake-galleryleft-up', 0.3, {width: '13vh'});
  TweenMax.to('#fake-galleryleft-bottom', 0.3, {width: '13vh'});
  TweenMax.to('#fake-galleryleft-sideleft', 0.3, {height: '5vh'});
  TweenMax.to('#fake-galleryleft-sideright', 0.3, {height: '5vh'});
})
document.getElementById('gallery-left').addEventListener('mouseout', function(){
  TweenMax.to('#fake-galleryleft-up', 0.3, {width: '0vh'});
  TweenMax.to('#fake-galleryleft-bottom', 0.3, {width: '0vh'});
  TweenMax.to('#fake-galleryleft-sideleft', 0.3, {height: '0vh'});
  TweenMax.to('#fake-galleryleft-sideright', 0.3, {height: '0vh'});
})

document.getElementById('contact-left').addEventListener('mouseover', function(){
  TweenMax.to('#fake-contactleft-up', 0.3, {width: '13vh'});
  TweenMax.to('#fake-contactleft-bottom', 0.3, {width: '13vh'});
  TweenMax.to('#fake-contactleft-sideleft', 0.3, {height: '5vh'});
  TweenMax.to('#fake-contactleft-sideright', 0.3, {height: '5vh'});
})
document.getElementById('contact-left').addEventListener('mouseout', function(){
  TweenMax.to('#fake-contactleft-up', 0.3, {width: '0vh'});
  TweenMax.to('#fake-contactleft-bottom', 0.3, {width: '0vh'});
  TweenMax.to('#fake-contactleft-sideleft', 0.3, {height: '0vh'});
  TweenMax.to('#fake-contactleft-sideright', 0.3, {height: '0vh'});
})

//Des fakeborder bottom
//Des fakeborder bottom
//Des fakeborder bottom
//Des fakeborder bottom
//Des fakeborder bottom
//Des fakeborder bottom

document.getElementById('welcome-bottom').addEventListener('mouseover', function(){
  TweenMax.to('#fake-welcomebottom-up', 0.3, {width: '13vh'});
  TweenMax.to('#fake-welcomebottom-bottom', 0.3, {width: '13vh'});
  TweenMax.to('#fake-welcomebottom-sideleft', 0.3, {height: '5vh'});
  TweenMax.to('#fake-welcomebottom-sideright', 0.3, {height: '5vh'});
})
document.getElementById('welcome-bottom').addEventListener('mouseout', function(){
  TweenMax.to('#fake-welcomebottom-up', 0.3, {width: '0vh'});
  TweenMax.to('#fake-welcomebottom-bottom', 0.3, {width: '0vh'});
  TweenMax.to('#fake-welcomebottom-sideleft', 0.3, {height: '0vh'});
  TweenMax.to('#fake-welcomebottom-sideright', 0.3, {height: '0vh'});
})

document.getElementById('home-bottom').addEventListener('mouseover', function(){
  TweenMax.to('#fake-homebottom-up', 0.3, {width: '13vh'});
  TweenMax.to('#fake-homebottom-bottom', 0.3, {width: '13vh'});
  TweenMax.to('#fake-homebottom-sideleft', 0.3, {height: '5vh'});
  TweenMax.to('#fake-homebottom-sideright', 0.3, {height: '5vh'});
})
document.getElementById('home-bottom').addEventListener('mouseout', function(){
  TweenMax.to('#fake-homebottom-up', 0.3, {width: '0vh'});
  TweenMax.to('#fake-homebottom-bottom', 0.3, {width: '0vh'});
  TweenMax.to('#fake-homebottom-sideleft', 0.3, {height: '0vh'});
  TweenMax.to('#fake-homebottom-sideright', 0.3, {height: '0vh'});
})

document.getElementById('gallery-bottom').addEventListener('mouseover', function(){
  TweenMax.to('#fake-gallerybottom-up', 0.3, {width: '13vh'});
  TweenMax.to('#fake-gallerybottom-bottom', 0.3, {width: '13vh'});
  TweenMax.to('#fake-gallerybottom-sideleft', 0.3, {height: '5vh'});
  TweenMax.to('#fake-gallerybottom-sideright', 0.3, {height: '5vh'});
})
document.getElementById('gallery-bottom').addEventListener('mouseout', function(){
  TweenMax.to('#fake-gallerybottom-up', 0.3, {width: '0vh'});
  TweenMax.to('#fake-gallerybottom-bottom', 0.3, {width: '0vh'});
  TweenMax.to('#fake-gallerybottom-sideleft', 0.3, {height: '0vh'});
  TweenMax.to('#fake-gallerybottom-sideright', 0.3, {height: '0vh'});
})

document.getElementById('contact-bottom').addEventListener('mouseover', function(){
  TweenMax.to('#fake-contactbottom-up', 0.3, {width: '13vh'});
  TweenMax.to('#fake-contactbottom-bottom', 0.3, {width: '13vh'});
  TweenMax.to('#fake-contactbottom-sideleft', 0.3, {height: '5vh'});
  TweenMax.to('#fake-contactbottom-sideright', 0.3, {height: '5vh'});
})
document.getElementById('contact-bottom').addEventListener('mouseout', function(){
  TweenMax.to('#fake-contactbottom-up', 0.3, {width: '0vh'});
  TweenMax.to('#fake-contactbottom-bottom', 0.3, {width: '0vh'});
  TweenMax.to('#fake-contactbottom-sideleft', 0.3, {height: '0vh'});
  TweenMax.to('#fake-contactbottom-sideright', 0.3, {height: '0vh'});
})