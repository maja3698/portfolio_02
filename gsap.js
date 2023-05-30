window.addEventListener("load", runGsap);
function runGsap() {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    "(min-width: 1065px)": function () {
      console.log("Desktop");
      
      const trigger1 = document.querySelector(".tools")
      const trigger2 = document.querySelector(".sec1")
      const trigger3 = document.querySelector(".sec2")
    const wProjects = document.querySelectorAll('.sec1')
    const wProjects2 = document.querySelectorAll('.sec2')
    const cProjects = document.querySelectorAll('.sec3')

    wProjects.forEach((project, i) => {
        gsap.fromTo(project, 
           {
            opacity: 0,
            y:"150px"
          },
           {
            opacity: 1,
            y:"0px",
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: trigger1,
                start: 'center center',
                scrub: true,
          
            },
        })
    })

    wProjects2.forEach((project, i) => {
      gsap.fromTo(project, 
         {opacity: 0,
          y:"150px"},
         {
          opacity: 1,
            y:"0px",
          ease: 'power1.inOut',
          scrollTrigger: {
              trigger: trigger2,
              start: 'top bottom',
              scrub: true,
            
          },
      })
  })

  cProjects.forEach((project, i) => {
    gsap.fromTo(project, 
       {opacity: 0,
        y:"150px"},
       {
        opacity: 1,
          y:"0px",
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: trigger3,
            start: 'top bottom',
            scrub: true,
         
        },
    })
})
 

      
      
    },
  });
}
