import barba, { type ITransitionData } from '@barba/core';
import { restartWebflow } from '@finsweet/ts-utils';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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
        const aboutBg = document.querySelector('[data-a="about-bg"]');

        await Promise.all([
          gsap.from(aboutText, {
            y: '120%',
            delay: 0.3,
            opacity: 0,
            duration: 1.2,
            ease: 'expo.out',
            stagger: {
              each: 0.01,
            },
          }),

          gsap.from(aboutTextP, {
            y: '120%',
            opacity: 0,
            delay: 0.4,
            duration: 1,
            ease: 'expo.out',
            stagger: {
              each: 0.01,
            },
          }),

          gsap.from(aboutBg, {
            y: '-120%',
            delay: 0.1,
            duration: 1,
            ease: 'expo.out',
          }),
        ]);

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
        const mainHomeBg = document.querySelector('.home-section-parent');

        await Promise.all([
          gsap.from(textPage, {
            y: '120%',
            delay: 0.1,
            opacity: 0,
            duration: 1.2,
            ease: 'expo.out',
            stagger: {
              each: 0.01,
            },
          }),

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

          gsap.from(mainHomeBg, {
            y: '-120%',
            delay: 0.1,
            duration: 1.2,
            ease: 'expo.out',
          }),
        ]);

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
        const mainWorkBg = document.querySelector('[data-a="work-bg"]');
        const thumbs = document.querySelectorAll('.thumbs-parent-bg');

        await Promise.all([
          gsap.from(mainWorkBg, {
            y: '-120%',
            duration: 1,
            delay: 0.1,
            ease: 'expo.out',
          }),

          gsap.from(textPageWork, {
            y: '120%',
            delay: 0.1,
            opacity: 0,
            duration: 1.2,
            ease: 'expo.out',
            stagger: {
              each: 0.01,
            },
          }),

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

          gsap.from(thumbs, {
            y: '160%',
            opacity: 0,
            delay: 0.1,
            duration: 0.8,
            stagger: {
              each: 0.01,
            },
          }),
        ]);

        data.next.container.classList.remove('is-animating');

        // $('.archives-slider-component').each(function (index) {
        //   const bgSwiper = new Swiper($(this).find('.swiper.is-bg-image')[0], {
        //     on: {
        //       init: function () {
        //         console.log('swiper initialized');
        //       },
        //     },

        //     slidesperView: 1,
        //     speed: 300,
        //     allowTouchMove: false,
        //     loop: true,
        //     loopedSlides: 30,
        //     mousewheel: true,
        //     effect: 'creative',
        //     creativeEffect: {
        //       prev: {
        //         translate: [0, -400, -400],
        //         scale: 0,
        //         origin: 'top left',
        //         perspective: true,
        //         rotate: [0, -180, -10],
        //       },
        //       next: {
        //         translate: [0, '100%', 0],
        //         scale: 1,
        //         perspective: true,
        //         rotate: [0, 180, -20],
        //       },
        //     },
        //   });

        //   const thumbSwiper = new Swiper($(this).find('.swiper.is-thumbs')[0], {
        //     slidesperView: 1,
        //     speed: 200,
        //     loop: true,
        //     loopedSlides: 30,
        //     slideToClickSlide: true,
        //   });

        //   console.log(thumbSwiper);
        //   bgSwiper.controller.control = thumbSwiper;
        // });
      },
    },
  ],
  views: [
    // {
    //   namespace: 'work',

    //   async beforeLeave(data) {
    //     const imgHolder = document.querySelector('.archive-bg-slider-parent');
    //     const thumbsHolder = [...document.querySelectorAll('.thumbs-parent-bg')];
    //     const workOutText = [...document.querySelectorAll('.archive-h1')];
    //     const workOutBg = document.querySelector('[data-a="work-bg"]');

    //     await Promise.all([
    //       gsap.to(imgHolder, {
    //         y: '120%',
    //         duration: 1,
    //         ease: 'expo.out',
    //       }),

    //       gsap.to(thumbsHolder, {
    //         y: '120%',
    //         duration: 1,
    //         ease: 'expo.out',
    //         stagger: {
    //           each: 0.01,
    //         },
    //       }),

    //       gsap.to(workOutText, {
    //         y: '120%',
    //         opacity: 0,
    //         duration: 1,
    //         ease: 'expo.out',
    //         stagger: {
    //           each: 0.01,
    //         },
    //       }),

    //       gsap.to(workOutBg, {
    //         y: '120%',
    //         duration: 1,
    //         ease: 'expo.out',
    //       }),
    //     ]);

    //     console.log('its working but need await');
    //   },
    // },
    {
      namespace: 'work',
      async beforeLeave(data) {
        console.log('leaving work');
      },
    },
    {
      name: 'Transition About Out',
      namespace: 'about',

      async beforeLeave(data) {
        console.log('leaving about');
      },
    },
    {
      namespace: 'home',
      async beforeLeave(data) {
        console.log('leaving home');
      },
    },
  ],
});

barba.hooks.after(() => {
  restartWebflow();
  console.log('barba is working');
});

// const workOut = async (data: ITransitionData) => {
//   const imgHolder = document.querySelector('.archive-bg-slider-parent');
//   const thumbsHolder = [...document.querySelectorAll('.thumbs-parent-bg')];
//   const workOutText = [...document.querySelectorAll('.archive-h1')];
//   const workOutBg = document.querySelector('.work-section-parent');

//   await Promise.all([
//     gsap.to(imgHolder, {
//       height: '0vh',
//       duration: 0.6,
//       ease: 'expo.out',
//     }),

//     gsap.to(thumbsHolder, {
//       height: '0vh',
//       duration: 0.6,
//       ease: 'expo.out',
//       stagger: {
//         each: 0.01,
//       },
//     }),

//     gsap.to(workOutText, {
//       y: '120%',
//       opacity: 0,
//       duration: 1,
//       ease: 'expo.out',
//       stagger: {
//         each: 0.01,
//       },
//     }),

//     gsap.to(workOutBg, {
//       y: '-120%',
//       duration: 0.8,
//       ease: 'expo.out',
//     }),
//   ]);

//   console.log(data);
//   console.log('its working but need await');
// };
