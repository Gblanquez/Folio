import barba from '@barba/core';
import { restartWebflow } from '@finsweet/ts-utils';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

//About Page Animation End
barba.init({
  transitions: [
    {
      name: 'about-transition',
      to: {
        namespace: ['about'],
      },
      sync: true,

      async enter(data) {
        data.next.container.classList.add('is-animating');

        //animation
        const aboutText = [...document.querySelectorAll('[data-a="about-h1"]')];
        const aboutTextP = [...document.querySelectorAll('[data-a="info"]')];

        await Promise.all([]);
        gsap.from(aboutText, {
          y: '120%',
          delay: 0.1,
          opacity: 0,
          duration: 1.2,
          ease: 'expo.out',
          stagger: {
            each: 0.01,
          },
        });

        gsap.from(aboutTextP, {
          y: '120%',
          opacity: 0,
          delay: 0.2,
          duration: 1,
          ease: 'expo.out',
          stagger: {
            each: 0.01,
          },
        }),
          0;

        data.next.container.classList.remove('is-animating');
      },
    },
    {
      name: 'home-transition',
      to: {
        namespace: ['home'],
      },
      sync: true,

      async enter(data) {
        data.next.container.classList.add('is-animating');

        //animation
        const textPage = [...document.querySelectorAll('[data-a="text"]')];
        const mainImg = [...document.querySelectorAll('[data-a="main-img"]')];

        await Promise.all([]);
        gsap.from(textPage, {
          y: '120%',
          delay: 0.1,
          opacity: 0,
          duration: 1.2,
          ease: 'expo.out',
          stagger: {
            each: 0.01,
          },
        });

        gsap.from(mainImg, {
          y: '120%',
          opacity: 0,
          delay: 0.2,
          duration: 1,
          ease: 'expo.out',
          stagger: {
            each: 0.01,
          },
        }),
          0;

        data.next.container.classList.remove('is-animating');
      },
    },
    {
      name: 'work-transition',
      to: {
        namespace: ['work'],
      },
      sync: true,

      async enter(data) {
        data.next.container.classList.add('is-animating');

        //animation
        const textPageWork = [...document.querySelectorAll('[data-a="main-h1"]')];
        const imgWork = [...document.querySelectorAll('[data-a="img-main"]')];

        await Promise.all([]);
        gsap.from(textPageWork, {
          y: '120%',
          delay: 0.1,
          opacity: 0,
          duration: 1.2,
          ease: 'expo.out',
          stagger: {
            each: 0.01,
          },
        });

        gsap.from(imgWork, {
          y: '120%',
          opacity: 0,
          delay: 0.2,
          duration: 1,
          ease: 'expo.out',
          stagger: {
            each: 0.01,
          },
        }),
          0;

        data.next.container.classList.remove('is-animating');
      },
    },
  ],
  views: [
    {
      namespace: 'work',
      async beforeLeave(data) {
        console.log('leaving work');

        const textPageWork = [...document.querySelectorAll('[data-a="main-h1"]')];
        const imgWork = [...document.querySelectorAll('[data-a="img-main"]')];

        await Promise.all([]);
        gsap.to(textPageWork, {
          y: '-120%',
          opacity: 0,
          duration: 0.7,
          ease: 'expo.out',
          stagger: {
            each: 0.01,
          },
        });

        gsap.to(imgWork, {
          y: '-120%',
          opacity: 0,
          duration: 0.7,
          ease: 'expo.out',
          stagger: {
            each: 0.01,
          },
        });
      },
    },
  ],
});

barba.hooks.after(() => {
  restartWebflow();
  console.log('barba is working');
});
