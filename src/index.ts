import barba from '@barba/core';
import { restartWebflow } from '@finsweet/ts-utils';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const textPage = [...document.querySelectorAll('[data-a="text"]')];
//Image Load Animation//
const allImages = document.querySelectorAll('.archive-img-parent');
const mainImg = [...document.querySelectorAll('[data-a="main-img"]')];

const imagesT = gsap.timeline({ paused: true });

imagesT.from(allImages, {
  y: '200%',
  x: '-70%',
  height: '0%',
  delay: 0.2,
  opacity: 0,
  rotateY: -180,
  duration: 1.8,
  ease: 'expo.out',
  stagger: {
    each: 0.03,
  },
});

imagesT.from(
  mainImg,
  {
    scale: 1.8,
    duration: 1.4,
    ease: 'expo.out',
    stagger: {
      each: 0.04,
    },
  },
  0.1
);

imagesT.from(
  textPage,
  {
    y: '120%',
    opacity: 0,
    duration: 1.1,
    ease: 'expo.out',
    stagger: {
      each: 0.03,
    },
  },
  0.1
);
const homeOut = gsap.timeline({ paused: true });

homeOut.to(allImages, {
  y: '200%',
  x: '-70%',
  height: '0%',
  opacity: 0,
  rotateY: -180,
  delay: 0.1,
  duration: 1.1,
  ease: 'expo.out',
  stagger: {
    each: 0.01,
  },
});

homeOut.to(
  textPage,
  {
    y: '120%',
    duration: 0.6,
    delay: 0.1,
    ease: 'expo.out',
    stagger: {
      each: 0.01,
    },
  },
  0.1
);

//About Page Animation
function playLoadAbout() {
  const aboutText = [...document.querySelectorAll('[data-a="about-h1"]')];
  const aboutInfo = [...document.querySelectorAll('[data-a="info"]')];

  const aboutTl = gsap.timeline({ paused: true });

  aboutTl.from(aboutText, {
    y: '130%',
    opacity: 0,
    duration: 1.3,
    ease: 'expo.out',
    stagger: {
      each: 0.02,
    },
  });

  aboutTl.from(
    aboutInfo,
    {
      y: '130%',
      opacity: 0,
      duration: 1.8,
      ease: 'expo.out',
      stagger: {
        each: 0.02,
      },
    },
    0.5
  );

  aboutTl.play();
  playLoadAbout();
}

//About Page Animation End

barba.init({
  sync: true,

  views: [
    {
      namespace: 'home',
      async beforeLeave(data) {
        console.log('home is leaving');
        // await homeOut.play();
        console.log(data);
      },
      async afterEnter(data) {
        data.next.container.classList.add('is-animating');

        gsap.from(data.next.container, {
          // onComplete: imagesT.play(),
          opacity: 0,
          delay: 0.2,
          duration: 1,
        });
        await imagesT.play();

        data.next.container.classList.remove('is-animating');
      },
    },
    {
      namespace: 'about',
      async afterEnter(data) {
        console.log('about is entering');
        data.next.container.classList.add('is-animating');
        // aboutTl.play();
        await gsap.to(data.next.container, {
          onComplete: playLoadAbout(),
          opacity: 1,
          duration: 1,
        });

        data.next.container.classList.remove('is-animating');
      },
      async beforeLeave(data) {
        console.log('about is leaving');
        await gsap.to(data.current.container, {
          opacity: 0,
          duration: 1,
        });
      },
    },
    {
      namespace: 'work',
      afterEnter(data) {
        data.next.container.classList.add('is-animating');
        console.log('work entering');
        gsap.from(data.next.container, {
          opacity: 0,
          delay: 0.2,
          duration: 1,
        });

        data.next.container.classList.remove('is-animating');
      },
      async beforeLeave(data) {
        console.log('work is leaving');
        await gsap.to(data.current.container, {
          opacity: 0,
          duration: 1,
        });
      },
    },
  ],
});

barba.hooks.after(() => {
  restartWebflow();
  console.log('barba is working');
});

console.log('hey');
