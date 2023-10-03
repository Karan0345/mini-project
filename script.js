const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()

tl.to("#page1",{
    y:"100vh",
    scale:0.6,
    duration:0
})
tl.to("#page1",{
    y:"30vh",
    duration:1,
    delay:1
})
tl.to("#page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.7
})

var tl = gsap.timeline({
    repeat: -1
});

tl
.to(".imagecontainer", {
    ease: Expo.easeInOut,
    width: "100%",
    stagger: 2,
}, 'a')

.to(".text h1", {
    ease: Expo.easeInOut,
    stagger: 2,
    top: 0
}, 'a') 

.to(".text h1", {
    delay: 2,
    ease: Expo.easeInOut,
    stagger: 2,
    top: "-100%"
}, 'a') 

