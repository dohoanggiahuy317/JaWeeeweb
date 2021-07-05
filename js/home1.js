document.getElementById('text-earth').addEventListener('mouseover', function(){
    TweenMax.to('#stick-earth', 0.3, {width: '18vh', ease: Power1.easeInOut});
    TweenMax.to('#explore-earth-number', 0.3, {top: '-4vh'});
    TweenMax.to('#explore-earth-text', 0.3, {top: '-3vh'});
    TweenMax.to('#page-number1', 0.3, {rotation: 360, fontWeight: 'bolder'});
})
document.getElementById('text-earth').addEventListener('mouseout', function(){
    TweenMax.to('#stick-earth', 0.3, { width: '28vh', ease: Power1.easeInOut});
    TweenMax.to('#explore-earth-number', 0.3, {top: '0vh'});
    TweenMax.to('#explore-earth-text', 0.3, {top: '1vh'});
    TweenMax.to('#page-number1', 0.3, {rotation: 0, fontWeight: 'normal'});
})


document.getElementById('text-wood').addEventListener('mouseover', function(){
    TweenMax.to('#stick-wood', 0.3, {width: '18vh', ease: Power1.easeInOut});
    TweenMax.to('#explore-wood-number', 0.3, {top: '-4vh'});
    TweenMax.to('#explore-wood-text', 0.3, {top: '-3vh'});
    TweenMax.to('#page-number2', 0.3, {rotation: 360, fontWeight: 'bolder'});
})
document.getElementById('text-wood').addEventListener('mouseout', function(){
    TweenMax.to('#stick-wood', 0.3, { width: '28vh', ease: Power1.easeInOut});
    TweenMax.to('#explore-wood-number', 0.3, {top: '0vh'});
    TweenMax.to('#explore-wood-text', 0.3, {top: '1vh'});
    TweenMax.to('#page-number2', 0.3, {rotation: 0, fontWeight: 'normal'});
})


document.getElementById('text-water').addEventListener('mouseover', function(){
    TweenMax.to('#stick-water', 0.3, {width: '18vh', ease: Power1.easeInOut});
    TweenMax.to('#explore-water-number', 0.3, {top: '-4vh'});
    TweenMax.to('#explore-water-text', 0.3, {top: '-3vh'});
    TweenMax.to('#page-number3', 0.3, {rotation: 360, fontWeight: 'bolder'});
})
document.getElementById('text-water').addEventListener('mouseout', function(){
    TweenMax.to('#stick-water', 0.3, { width: '28vh', ease: Power1.easeInOut});
    TweenMax.to('#explore-water-number', 0.3, {top: '0vh'});
    TweenMax.to('#explore-water-text', 0.3, {top: '1vh'});
    TweenMax.to('#page-number3', 0.3, {rotation: 0, fontWeight: 'normal'});
})


document.getElementById('text-fire').addEventListener('mouseover', function(){
    TweenMax.to('#stick-fire', 0.3, {width: '18vh', ease: Power1.easeInOut});
    TweenMax.to('#explore-fire-number', 0.3, {top: '-4vh'});
    TweenMax.to('#explore-fire-text', 0.3, {top: '-3vh'});
    TweenMax.to('#page-number4', 0.3, {rotation: 360, fontWeight: 'bolder'});
})
document.getElementById('text-fire').addEventListener('mouseout', function(){
    TweenMax.to('#stick-fire', 0.3, { width: '28vh', ease: Power1.easeInOut});
    TweenMax.to('#explore-fire-number', 0.3, {top: '0vh'});
    TweenMax.to('#explore-fire-text', 0.3, {top: '1vh'});
    TweenMax.to('#page-number4', 0.3, {rotation: 0, fontWeight: 'normal'});
})

document.getElementById('text-metal').addEventListener('mouseover', function(){
    TweenMax.to('#stick-metal', 0.3, {width: '18vh', ease: Power1.easeInOut});
    TweenMax.to('#explore-metal-number', 0.3, {top: '-4vh'});
    TweenMax.to('#explore-metal-text', 0.3, {top: '-3vh'});
    TweenMax.to('#page-number5', 0.3, {rotation: 360, fontWeight: 'bolder'});
})
document.getElementById('text-metal').addEventListener('mouseout', function(){
    TweenMax.to('#stick-metal', 0.3, { width: '28vh', ease: Power1.easeInOut});
    TweenMax.to('#explore-metal-number', 0.3, {top: '0vh'});
    TweenMax.to('#explore-metal-text', 0.3, {top: '1vh'});
    TweenMax.to('#page-number5', 0.3, {rotation: 0, fontWeight: 'normal'});
})








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
// ScrollMagic Plane ------------------------------------------------------------------------------------->

var flightpath = {
  entry : {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 100,	y: -20},
        {x: 300,	y: 10}
      ]
  },
  looping : {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 510,	y: 60},
        {x: 620,	y: -60},
        {x: 500,	y: -100},
        {x: 380,	y: 20},
        {x: 500,	y: 60},
        {x: 580,	y: 20},
        {x: 620,	y: 15}
      ]
  },
  leave : {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 660,	y: 20},
        {x: 800,	y: 130},
        {x: window.innerWidth + 300,	y: -100},
      ]
  }
};
// init controller
var controller = new ScrollMagic.Controller();

// create tween
var tween = new TimelineMax()
			.add(TweenMax.to($("#plane"), 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#plane"), 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#plane"), 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

// build scene
var scene = new ScrollMagic.Scene({
      triggerElement: "#trigger",  
      triggerHook: 0.2, 
      duration: 2000,
    })

    .setPin("#target")
    .setTween(tween)
    // .addIndicators({colorTrigger: "black",
    //   colorStart: "black",
    //   colorEnd: "black",
    //   indent: 5}) // add indicators (requires plugin)
    .addTo(controller);

// ScrollMagic fade -------------------------------------------------------------------------------->

// var controller = new ScrollMagic.Controller();

//wood----->
var tl_wood = new TimelineMax();
tl_wood.staggerFrom("#wood", 1, {
    opacity: 0,
});

new ScrollMagic.Scene({
    triggerElement: "#wood",
    triggerHook: 0.3,
    reverse: false,
})
.setTween(tl_wood)
.addTo(controller)
//.addIndicators()

//water----->
var tl_water = new TimelineMax();
tl_water.staggerFrom("#water", 1, {
    opacity: 0,
});

new ScrollMagic.Scene({
    triggerElement: "#water",
    triggerHook: 0.3,
    reverse: false,
})
.setTween(tl_water)
.addTo(controller)
//.addIndicators()

//fire----->
var tl_fire = new TimelineMax();
tl_fire.staggerFrom("#fire", 1, {
    opacity: 0,
});

new ScrollMagic.Scene({
    triggerElement: "#fire",
    triggerHook: 0.3,
    reverse: false,
})
.setTween(tl_fire)
.addTo(controller)
//.addIndicators()

//metal----->
var tl_metal = new TimelineMax();
tl_metal.staggerFrom("#metal", 1, {
    opacity: 0,
});

new ScrollMagic.Scene({
    triggerElement: "#metal",
    triggerHook: 0.3,
    reverse: false,
})
.setTween(tl_metal)
.addTo(controller)
//.addIndicators()
