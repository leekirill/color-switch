import refs from './refs';
import switcher from './switcher';

refs.startBtn.addEventListener('click', () => {
  switcher.start();
});
refs.stopBtn.addEventListener('click', () => {
  switcher.stop();
});
