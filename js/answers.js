/////////////////////////////////  validation /////////////////////////

function nameValidation(value) {
  if (value == '') {
    return 'Name field cannot be empty';
  }
  if (value.length < 2) {
    return 'Name field should be longer then 1 character';
  }
  if (value.length > 250) {
    return 'This field cannot be longer then 250 characters';
  }
  if (!/^[A-z]+$/.test(value)) {
    return 'Name field can have only letters';
  }
  return '';
}

function descriptionValidation(value) {
  if (value == '') {
    return 'Description field cannot be empty';
  }
  if (value.length < 2) {
    return 'Description field should be longer then 1 character';
  }
  if (value.length > 250) {
    return 'Description field cannot be longer then 250 characters';
  }
  if (!/^[A-z0-9]+$/.test(value)) {
    return 'Description field can have only numbers and letters';
  }
  return '';
}

function cityValidation(value) {
  if (value == '') {
    return 'City field cannot be empty';
  }
  return '';
}


function handleErrors(errors) {
  var errorsCount = 0;
  var onSuccessWindow = document.querySelector('.on-success');

  Object.keys(errors)
    .forEach(function (key) {
      if (errors[key].length){
        document.querySelector(`.letterToSantaForm [name="${key}"]`).classList.add('error');
        document.querySelector(`.letterToSantaForm [name="${key}"]`).value = '';
        document.querySelector(`.errorsBlock [class="${key}"]`).innerHTML = errors[key];
      }
      console.log(errors[key]);
      errorsCount = errorsCount + errors[key].length;
    });

  if (errorsCount < 1) {
    console.log('Success');
    onSuccessWindow.classList.remove('hiddenWindow');
    saveDataToLocalStorage();  //save data to localstorage
    document.querySelector('.letterToSantaForm').reset();
  }
}

function validateForm(e) {
  e.preventDefault();
  var name = document.letterToSanta.name.value;
  var city = document.letterToSanta.city.value;
  var description = document.letterToSanta.description.value;

  var errors = {
    name: nameValidation(name),
    city: cityValidation(city),
    description: descriptionValidation(description)
  };

  handleErrors(errors);
}

////////////////////////// handle on-success window ////////////////////////////////////


function hideOnSuccessWindow() {
  var onSuccessWindow = document.getElementsByClassName('on-success');
  onSuccessWindow[0].classList.add('hiddenWindow');
}

function redirectToWishlist() {
  window.location.href = 'wish-list.html';
}


//////////////////////////////  local storage   //////////////////////////////////////
var localStorageIndex = localStorage.length + 1;

function saveDataToLocalStorage() {
  // get the data that you want to save
  var name = document.letterToSanta.name.value;
  var description = document.letterToSanta.description.value;
  var key = 'user'+ localStorageIndex; // setting a unique key for the data

  // saving the data as an object
  localStorage.setItem(key, JSON.stringify({
    username: name,
    giftDescription: description
  }));

  localStorageIndex = localStorageIndex + 1;
}

function displayWishes() {
  var ul = document.querySelector('.wish-list');
  var li, userKey;

  for(var i = 1; i <= localStorage.length; i = i + 1) {
    li = document.createElement('li');
    userKey = 'user' + i;
    var data = JSON.parse(localStorage.getItem(userKey));

    li.appendChild(document.createTextNode(data.giftDescription));
    ul.appendChild(li);
  }
}

///////////////////////////////////  Random number generation  /////////////////////////

var behaviorList = {
  1: 'Very Good',
  2: 'Good',
  3: 'Naughty'
};

var imageUrlList = {
  1: 'img/gifts/goldGift.jpg',
  2: 'img/gifts/groupGift.jpeg',
  3: 'img/gifts/redGift.jpg'
};

function getRandomNumber(limit) {
  var randomNumber = Math.floor(Math.random() * limit) + 1;
  return randomNumber;
}

function getBehaviour() {
  var randomNo = getRandomNumber(3);
  var behaviour = behaviorList[randomNo];
  var element = document.querySelector('.attitude');
  element.appendChild(document.createTextNode(behaviour));
}

function getGift() {
  var randomNo = getRandomNumber(localStorageIndex - 1);
  var userKey = 'user' + randomNo;
  var data = JSON.parse(localStorage.getItem(userKey));
  var element = document.querySelector('.santa-gift-text');
  element.appendChild(document.createTextNode(data.giftDescription));
}

function getGiftImage() {
  var element = document.querySelector('.santa-gift');
  var randomNo = getRandomNumber(3);
  var giftImageUrl = imageUrlList[randomNo];
  element.src = giftImageUrl;
}

function fillContent() {
  getBehaviour();
  getGift();
  getGiftImage();
}
