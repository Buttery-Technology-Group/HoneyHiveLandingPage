// src/scripts/init.js
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animate, createTimeline } from 'animejs';


export function scrollHeader() {
  const nav = document.querySelector('header');
  const handleScroll = () => {
    if (window.scrollY >= 200) {
      nav.classList.add('active-header');
    } else {
      nav.classList.remove('active-header');
    }
  };
  window.addEventListener('scroll', handleScroll);
}

export function initAccordion() {
  const buttons = document.querySelectorAll('.accordion-button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const accordionContent = button.nextElementSibling;
      button.classList.toggle('accordion-button-active');
      accordionContent.style.maxHeight = button.classList.contains('accordion-button-active')
        ? accordionContent.scrollHeight + 'px'
        : 0;
    });
  });
}

export function animateTitle() {
  const textWrapper = document.querySelector('.ml11 .letters');
  if (!textWrapper) return;

  textWrapper.innerHTML = textWrapper.textContent.replace(
    /([^\x00-\x80]|\w)/g,
    "<span class='letter'>$&</span>"
  );

  const timeline = createTimeline();

  timeline
    .add({
      targets: '.ml11 .line',
      scaleY: [0, 1],
      opacity: [0.5, 1],
      easing: 'easeOutExpo',
      delay: 2000
    })
    .add({
      targets: '.ml11 .letter',
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1500,
      delay: (el, i) => 70 * (i + 1)
    })
    .add({
      targets: '.ml11',
      opacity: [0, 1],
      duration: 1500,
      easing: 'easeOutExpo'
    });
}

export function initScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  const sections = ['#section-1', '#section-2', '#section-3', '#section-4', '#section-5', '#section-6'];

  sections.forEach(section => {
    gsap.from(`${section} div`, {
      y: 200,
      opacity: 0,
      ease: 'power4.out',
      duration: 3,
      stagger: { each: 0.1 },
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 50%'
      }
    });
  });
}
