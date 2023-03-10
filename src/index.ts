import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('pnpm gsap business');

  const element = document.querySelector('#splitThis');
  const body = document.querySelector('body');
  const splitMenu = new SplitText(element, { type: 'words,chars' });

  const tl = gsap.timeline();
  tl.to(splitMenu.chars, { y: '1rem', stagger: { each: 0.2 } });
  tl.to(body, { backgroundColor: 'yellow' }, '<');
  console.log('SPLIT', splitMenu);
});
