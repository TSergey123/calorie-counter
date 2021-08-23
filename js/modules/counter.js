import { checkNumbersValidity, spaceBigNumbers } from '../utils//format.js';
import { calculateCcal, getGenderWeight } from '../utils/formula.js';


export default class Counter {
  constructor(element) {
    this.root = element;
    this.form = this.root.querySelector('.counter__form');
    this.submit = this.form.querySelector('.form__submit-button');
    this.reset = this.form.querySelector('.form__reset-button');
    this.resultForm = this.root.querySelector('.counter__result');
    this.hiddenResult = this.root.querySelector('.counter__result--hidden');
    this.inputs = this.root.querySelectorAll('input[type="text"]');
    this.age = this.root.querySelector('#age');
    this.male = this.root.querySelector('#gender-male')
    this.female = this.root.querySelector('#gender-female');
    this.age = this.root.querySelector('#age');
    this.height = this.root.querySelector('#height');
    this.weight = this.root.querySelector('#weight');
    this.balancedResult = this.root.querySelector('#calories-norm');
    this.slimResult = this.root.querySelector('#calories-minimal');
    this.gainResult = this.root.querySelector('#calories-maximal');
    this._onFormInput = this._onFormInput.bind(this);
    this._onFormSubmit = this._onFormSubmit.bind(this);
    this._onFormReset = this._onFormReset.bind(this);
    this._getResult = this._getResult.bind(this);
  }

  _onFormInput() {
    this.submit.disabled = !this.form.checkValidity();
    this.reset.disabled = !this.form.checkValidity();
    checkNumbersValidity(this.inputs);
  }

  _onFormSubmit(evt) {
    evt.preventDefault();
    this.resultForm.classList.remove(`counter__result--hidden`);
    this.male.checked ? this.result = calculateCcal(getGenderWeight.male) : this.result = calculateCcal(getGenderWeight.female);
    this._getResult(this.result);
  }

  _onFormReset() {
    this.resultForm.classList.add(`counter__result--hidden`);
    this.submit.disabled = true;
    this.reset.disabled = true;
  }

  _getResult(result) {
    this.balancedResult.textContent = spaceBigNumbers(result.balancedWeight);
    this.gainResult.textContent = spaceBigNumbers(result.gain);
    this.slimResult.textContent = spaceBigNumbers(result.slim);
    this.resultForm.scrollIntoView({ block: `center`, behavior: `smooth` });
  }

  init() {
    this.form.addEventListener(`input`, this._onFormInput, true);
    this.form.addEventListener("submit", this._onFormSubmit);
    this.form.addEventListener("reset", this._onFormReset);
  }

  deinit() {
    this.form.removeEventListener(`input`, this._onFormInput, true);
    this.form.addEventListener("submit", this._onFormSubmit);
    this.form.addEventListener("reset", this._onFormReset);
  }
}
