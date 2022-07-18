import colors from './colors';
import randomizer from './randomizer';
import refs from './refs';

const switcher = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.intervalId = setInterval(() => {
      refs.body.style.backgroundColor = colors[randomizer(1, colors.length - 1)];
    }, 1000);

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
