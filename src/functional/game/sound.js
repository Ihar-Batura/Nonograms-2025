import soundFill from '/fillCell.wav';
import soundCross from '/crossCell.wav';
import soundClear from '/clearCell.wav';
import soundWin from '/win.wav';

let isSound = true;

const audioFill = new Audio(soundFill);
const audioCross = new Audio(soundCross);
const audioClear = new Audio(soundClear);
const audioWin = new Audio(soundWin);

export function turnSound() {
  const soundBtn = document.querySelector('.btn-sound');
  isSound = !isSound;
  if (isSound) {
    soundBtn.classList.remove('mute');
  } else {
    soundBtn.classList.add('mute');
  }
}

export function playSoundFillCell() {
  if (isSound) {
    audioFill.currentTime = 0;
    audioFill.play();
  }
}

export function playSoundClearCell() {
  if (isSound) {
    audioClear.currentTime = 0;
    audioClear.play();
  }
}

export function playSoundCrossCell() {
  if (isSound) {
    audioCross.currentTime = 0;
    audioCross.play();
  }
}

export function playSoundWin() {
  if (isSound) {
    audioWin.currentTime = 0;
    audioWin.play();
  }
}
