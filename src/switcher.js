import colors from './colors';
import randomIntegerFromInterval from './randomizer';
import galleryItems from './images/gallery-items';
import { refs } from './refs';

const switcher = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.intervalId = setInterval(() => {
      refs.body.style.backgroundImage =
        'url(' +
        galleryItems.map(e => e.original)[randomIntegerFromInterval(1, galleryItems.length - 1)] +
        ')';
      refs.body.style.backgroundSize = 'contain';
    }, 2000);

    refs.startBtn.setAttribute('disabled', '');
  },
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    refs.startBtn.removeAttribute('disabled');
  },
};

refs.startBtn.addEventListener('click', () => {
  switcher.start();
});
refs.stopBtn.addEventListener('click', () => {
  switcher.stop();
});
