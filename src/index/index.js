// style import
import './index.scss';

class GuessMyNumber {
  constructor() {
    this.init();
  }

  setupDomRefrences() {
    this.body = document.querySelector('body');
    this.message = document.querySelector('.main__message');
    this.score = document.querySelector('#score');
    this.highScore = document.querySelector('#highscore');
    this.number = document.querySelector('.header__number');
    this.input = document.querySelector('.input__guess');
    this.btnCheck = document.querySelector('.button__check');
    this.btnAgain = document.querySelector('.button__again');
  }

  setupEvents() {
    this.btnCheck.addEventListener('click', () => {
      this.getMessage();
    });

    this.btnAgain.addEventListener('click', () => {
      this.restartGame();
    })
  }

  getMessage() {
    if(!this.getInputGuess()) {
      this.setMessage('No number!');
    } else if(this.getInputGuess() === this.secretNumber) {
      this.setMessage('Correct number!');
      this.scoreNumber++;
      this.score.textContent = this.scoreNumber;
      this.setBodyColor('red', 'green');
      this.setNumber(this.secretNumber);
      if(this.highScoreNumber < this.scoreNumber) {
        this.highScoreNumber = this.scoreNumber;
        this.highScore.textContent = this.highScoreNumber;
      }
    } else if(this.getInputGuess() !== this.secretNumber) {
      if(this.scoreNumber > 1) {
        this.setMessage(this.getInputGuess() > this.secretNumber ? 'Number too high!' : 'Number is too low!');
        this.scoreNumber--;
        this.score.textContent = this.scoreNumber;
      } else {
        this.scoreNumber = 0;
        this.score.textContent = this.scoreNumber;
        this.setBodyColor('green', 'red');
        this.setMessage('Game Over!');
      }
    }

  }

  getInputGuess() {
    return parseInt(this.input.value);
  }

  setMessage(message) {
    this.message.textContent = message;
  }

  setNumber(number) {
    this.number.textContent = number;
  }

  setSecretNumber() {
    this.secretNumber = Math.trunc(Math.random() * 20) + 1;
  }

  setBodyColor(color, bkgColor) {
    this.body.style.color = color;
    this.body.style.backgroundColor = bkgColor;
  }

  restartGame() {
    this.scoreNumber = 20;
    this.score.textContent = this.scoreNumber;
    this.input.value = '';
    this.number.textContent = '?';
    this.setSecretNumber();
    this.setBodyColor('#222', '#222');
    this.setMessage('Start guessing...');
  }

  init() {
    this.setupDomRefrences();
    this.setupEvents();
    this.scoreNumber = 20;
    this.score.textContent = this.scoreNumber;
    this.setSecretNumber();
    this.highScoreNumber = 0;
  }
}

export default GuessMyNumber;

const guessMyNumber = new GuessMyNumber();
