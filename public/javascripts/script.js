function loco() {
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#bg"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#bg", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("#bg").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco();
gsap.to("#page2", {
    scrollTrigger: {
        trigger: "#page1",
        start: "top 12%",
        // end: "top -75vh",
        scrub: 2,
        pin:true,
        scroller:"#bg",
        markers:true
  },
  top:"-40%"
})

// gsap.to("#page2 .heading", {
//     scrollTrigger: {
//         trigger: "#page2 .heading",
//         start: "top 10%",
//         end:"top 10%",
//         scrub: 2,
//         pin: true,
//         scroller: "#bg",
//         markers: true
//     },
//     display:"none"
// });
