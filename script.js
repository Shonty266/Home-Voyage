

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",  // Custom next button
      prevEl: ".swiper-button-prev",  // Custom prev button
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  


var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1, // Display 2 slides at once
    spaceBetween: 30, // Space between slides
    loop: true, // Enable looping through slides
    autoplay: {
        delay: 300, // Slide change delay (3 seconds)
        disableOnInteraction: false, // Keep autoplay even if user interacts
    },
    speed: 1500, // Transition speed (in ms), makes it smoother
    easing: 'ease-in-out',
    breakpoints: {
        // For large screens (lg, typically 1024px and above)
        1024: {
          slidesPerView: 2, // Show 3 slides on large screens
          spaceBetween: 30, // Maintain spacing between slides
        },
      }, // Smooth easing function (optional)
});

// Initialize GSAP timeline
const tl = gsap.timeline();

// Animate the navbar sliding from the top
tl.from(".navbar", {
   // Start position (off-screen)
  opacity: 0, // Fade in
  duration: 1, // Duration of animation
  ease: "power3.out", // Easing for smoothness
});

// Animate each navbar item one by one
tl.from(".nav-item", {
    
    y: -50, // Each item starts from above
  opacity: 0, // Fade in each item
  duration: 0.5, // Duration for each item
  stagger: 0.2, // Delay between each item's animation
  ease: "power2.out", // Smooth easing
}, "-=0.5"); // Start after the navbar animation is almost done

tl.from(".hero-item-left", {
    delay:0.2,
    y: -50, // Each item starts from above
  opacity: 0, // Fade in each item
  duration: 0.5, // Duration for each item
  stagger: 0.2, // Delay between each item's animation
  ease: "power2.out", // Smooth easing
}, "-=0.5");

tl.from(".hero-item-right", {
    // Start position (off-screen)
   opacity: 0, // Fade in
   duration: 1, // Duration of animation
   ease: "power3.out",  // Easing for smoothness
 });
 
 tl.from(".serach-div", {
    // Start position (off-screen)
   opacity: 0, // Fade in
   duration: 1, // Duration of animation
   ease: "power3.out",  // Easing for smoothness
 });

 tl.from(".serach-div-items", {
    delay:0.2,
    y: -50, // Each item starts from above
  opacity: 0, // Fade in each item
  duration: 0.5, // Duration for each item
  stagger: 0.2, // Delay between each item's animation
  ease: "power2.out", // Smooth easing
}, "-=0.5");

 
if (window.matchMedia("(max-width: 1023px)").matches) {
    tl.fromTo(".box", {
        opacity: 0,
        rotationY: 45,
        x: 0,
        y: 0
    }, {
        opacity: 1,
        rotationY: 0,
        duration: 1.5,
        stagger: 0.3, 
        scrollTrigger: {
            trigger: ".boxes-div",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            markers: false,
        },
    });
    tl.from(".boxes-heading", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".boxes-div",
            start: "top 100%",
            end: "top 40%",
            scrub: true,
            markers: false,
        },
    });
    tl.from(".premium-selection-heading", {
        x: -50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".premium-selection",
            start: "top 90%",
            end: "top 40%",
            scrub: true,
            markers: false,
        },
    });
    tl.from(".premium-selection-button", {
        x: 50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".premium-selection",
            start: "top 90%",
            end: "top 40%",
            scrub: true,
            markers: false,
        },
    });
    tl.from(".cards", {
        opacity: 0,
        scale: 0.8,
        rotationZ: 15,
        y: 50,
        duration: 1.8,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".premium-selection-cards",
            start: "top 90%",
            end: "top 0%",
            scrub: true,
            markers: false,
        },
    });
    tl.from(".about-us-heading", {
        opacity: 0,
        duration: 2,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".about-us",
            start: "top 70%",
            end: "top 10%",
            scrub: true,
            markers: false,
        },
    });
    tl.from(".about-us-img", {
        opacity: 0,
        x: -50,
        duration: 2,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".about-us",
            start: "top 70%",
            end: "top 10%",
            scrub: true,
            markers: false,
        },
    });
    tl.from(".about-us-text", {
        opacity: 0,
        y: 100,
        duration: 2.5,
        stagger: 1,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".about-us-text-section",
            start: "top 50%",
            end: "top -20%",
            scrub: true,
            markers: false,
        },
    });
    tl.from(".spaces-heading", {
        opacity: 0,
        x: -50,
        duration: 2,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".spaces",
            start: "top 70%",
            end: "top 50%",
            scrub: true,
            markers: false,
        },
    });
    tl.from(".swiper-1", {
        opacity: 0,
        y: -50,
        duration: 3,
        scrollTrigger: {
            trigger: ".spaces",
            start: "top 50%",
            end: "top 10%",
            scrub: true,
            markers: false,
        },
    });
    tl.from(".testimonials-heading", {
        opacity: 0,
        y: 50,
        duration: 2,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".testimonials",
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
        },
    });
    tl.from(".swiper-2", {
        opacity: 0,
        duration: 3,
        scrollTrigger: {
            trigger: ".testimonials",
            start: "top 50%",
            end: "top 10%",
            scrub: true,
            markers: false,
        },
    });
    tl.from(".footer", {
        opacity: 0,
        duration: 3,
        scrollTrigger: {
            trigger: ".footer",
            start: "top 90%",
            end: "top 50%",
            scrub: true,
            markers: false,
        },
    });
}

  
if (window.matchMedia("(min-width: 1024px)").matches) {
    tl.fromTo(".box", {
        opacity: 0,
        rotationY: 45,
        x: 0,
        y: 0
    }, {
        opacity: 1,
        rotationY: 0,
        duration: 2,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".boxes-div",
            start: "top 70%",
            end: "top -10%",
            scrub: 1,
            markers: false
        }
    });

    tl.from(".boxes-heading", {
        opacity: 0,
        duration: 2,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".boxes-div",
            start: "top 60%",
            end: "top -10%",
            scrub: true,
            markers: false
        }
    });

    tl.from(".premium-selection-heading", {
        x: -50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".premium-selection",
            start: "top 90%",
            end: "top 40%",
            scrub: true,
            markers: false
        }
    });

    tl.from(".premium-selection-button", {
        x: 50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".premium-selection",
            start: "top 90%",
            end: "top 40%",
            scrub: true,
            markers: false
        }
    });

    gsap.from(".cards", {
        opacity: 0,
        scale: 0.8,
        rotationZ: 15,
        y: 50,
        duration: 5,
        stagger: 0.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".premium-selection",
            start: "top 50%",
            end: "top -10%",
            scrub: 1,
            markers: false
        }
    });

    tl.from(".about-us-heading", {
        opacity: 0,
        duration: 2,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".about-us",
            start: "top 70%",
            end: "top 10%",
            scrub: true,
            markers: false
        }
    });

    tl.from(".about-us-img", {
        opacity: 0,
        x: -50,
        duration: 2,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".about-us",
            start: "top 70%",
            end: "top 10%",
            scrub: true,
            markers: false
        }
    });

    tl.from(".about-us-text", {
        opacity: 0,
        y: -100,
        duration: 5,
        stagger: 1,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".about-us-text-section",
            start: "top 80%",
            end: "top -10%",
            scrub: true,
            markers: false
        }
    });

    tl.from(".spaces-heading", {
        opacity: 0,
        x: -50,
        duration: 2,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".spaces",
            start: "top 70%",
            end: "top 50%",
            scrub: true,
            markers: false
        }
    });

    tl.from(".swiper-1", {
        opacity: 0,
        y: -50,
        duration: 5,
        scrollTrigger: {
            trigger: ".spaces",
            start: "top 50%",
            end: "top 10%",
            scrub: true,
            markers: false
        }
    });

    tl.from(".testimonials-heading", {
        opacity: 0,
        y: 50,
        duration: 2,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".testimonials",
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false
        }
    });

    tl.from(".swiper-2", {
        opacity: 0,
        duration: 3,
        scrollTrigger: {
            trigger: ".testimonials",
            start: "top 50%",
            end: "top 10%",
            scrub: true,
            markers: false
        }
    });

    tl.from(".footer", {
        opacity: 0,
        duration: 3,
        scrollTrigger: {
            trigger: ".footer",
            start: "top 90%",
            end: "top 50%",
            scrub: true,
            markers: false
        }
    });
}

  