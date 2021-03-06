'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupSubmit = setup.querySelector('.setup-submit');

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

var isActivateEvent = function (evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
};

var setupKeydownHandler = function (evt) {
  if (evt.keyCode === ESCAPE_KEY_CODE) {
    closeSetupElement();
  }
};

var showSetupElement = function () {
  setup.classList.remove('invisible');
  toggleAriaHidden(setup);

  document.addEventListener('keydown', setupKeydownHandler);
};

var closeSetupElement = function () {
  setup.classList.add('invisible');

  document.removeEventListener('keydown', setupKeydownHandler);

  toggleAriaHidden(setup);
};

/* var toggleAriaPressed = function (element) {
  var pressed = (element.getAttribute('aria-pressed') === 'false');
  element.setAttribute('aria-pressed', !pressed);
}; т.к. ошибка возникала из-за того, что эта функция нигде не используется, я ее закомментировала.*/

var toggleAriaHidden = function (element) {
  if (element.getAttribute('aria-hidden') === 'true') {
    element.setAttribute('aria-hidden', false);
  } else {
    element.setAttribute('aria-hidden', true);
  }
};

setupOpen.addEventListener('click', function () {
  showSetupElement();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    showSetupElement();
  }
});

setupClose.addEventListener('click', function () {
  closeSetupElement();
});

setupClose.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    closeSetupElement();
  }
});

setupSubmit.addEventListener('click', function () {
  closeSetupElement();
});

setupSubmit.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    closeSetupElement();
  }
});

var nameField = document.querySelector('.setup-user-name');
nameField.required = true;
nameField.maxLength = '50';

var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var WIZARD_COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var wizardEyes = wizard.querySelector('#wizard-eyes');
var WIZARD_EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var setupFireball = document.querySelector('.setup-fireball-wrap');
var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var i = 0;

wizardCoat.addEventListener('click', function () {
  i++;
  if (i === WIZARD_COAT_COLORS.length) {
    i = 0;
  }
  wizardCoat.style.fill = WIZARD_COAT_COLORS[i];
});

var j = 0;

wizardEyes.addEventListener('click', function () {
  j++;
  if (j === WIZARD_EYES_COLORS.length) {
    j = 0;
  }
  wizardEyes.style.fill = WIZARD_EYES_COLORS[j];
});

var k = 0;

setupFireball.addEventListener('click', function () {
  k++;
  if (k === FIREBALL_COLORS.length) {
    k = 0;
  }
  setupFireball.style.backgroundColor = FIREBALL_COLORS[k];
});
