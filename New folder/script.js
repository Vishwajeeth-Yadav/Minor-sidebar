gsap.to("#nav",{
    backgroundColor:"#003049",
    duration:0.5,
    height:"100px",

    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top 11%",
        scrub:1, 
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    duaration:10,
    scrollTrigger:{
        triger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2,
        // markers:true,
    }
})