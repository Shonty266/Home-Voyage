const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const menuLinks = document.querySelectorAll('.mobile-menu-link');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden', 'mobile-menu-exit-active');
    setTimeout(() => {
        mobileMenu.classList.add('mobile-menu-enter-active');
    }, 10);
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu-enter-active');
    mobileMenu.classList.add('mobile-menu-exit');
    setTimeout(() => {
        mobileMenu.classList.add('hidden', 'mobile-menu-exit-active');
        mobileMenu.classList.remove('mobile-menu-exit');
    }, 300);
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('mobile-menu-enter-active');
        mobileMenu.classList.add('mobile-menu-exit');
        setTimeout(() => {
            mobileMenu.classList.add('hidden', 'mobile-menu-exit-active');
            mobileMenu.classList.remove('mobile-menu-exit');
        }, 300);
    });
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",  
      prevEl: ".swiper-button-prev",  
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  


var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1, 
    spaceBetween: 30, 
    loop: true, 
    autoplay: {
        delay: 300, 
        disableOnInteraction: false, 
    },
    speed: 1500, 
    easing: 'ease-in-out',
    breakpoints: {
        1024: {
          slidesPerView: 2, 
          spaceBetween: 30, 
        },
      }, 
});

const tl = gsap.timeline();

tl.from(".navbar", {
  opacity: 0,
  duration: 1,
  ease: "power3.out", 
});

tl.from(".nav-item", {
    
    y: -50, 
  opacity: 0,
  duration: 0.5,
  stagger: 0.2, 
  ease: "power2.out",
}, "-=0.5"); 

tl.from(".hero-item-left", {
    delay:0.2,
    y: -50, 
  opacity: 0,
  duration: 0.5, 
  stagger: 0.2,
  ease: "power2.out", 
}, "-=0.5");

tl.from(".hero-item-right", {
   opacity: 0, 
   duration: 1, 
   ease: "power3.out",  
 });
 
 tl.from(".serach-div", {
   opacity: 0,
   duration: 1, 
   ease: "power3.out",  
 });

 tl.from(".serach-div-items", {
    delay:0.2,
    y: -50, 
  opacity: 0,
  duration: 0.5, 
  stagger: 0.2,
  ease: "power2.out", 
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

  