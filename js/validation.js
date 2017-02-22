
/////////////////////////////////  validation /////////////////////////

var errors = [];
var error = '';


function emptyFieldError (value) {
  if(value == '') {
    error = 'This field cannot be empty';
    errors.push(error);
  }

  return errors;
}

function minLengthError (value){
  if (value.length < 2){
    error = 'This field should be longer then 1 character';
    errors.push(error);
  }

  return errors;
}

function maxLengthError (value) {
  if (value.length > 250){
    error ='This field cannot be longer then 250 characters';
    errors.push(error);
  }

  return errors;
}

function onlyLettersError (value) {
  if (!/^[A-z]+$/.test(value)) {
    error = 'This field can have only letters';
    errors.push(error);
  }

  return errors;
}

function onlyNumbersLettersError (value) {
  if (!/^[A-z0-9]+$/.test(value)) {
    error = 'This field can have only numbers and letters';
    errors.push(error);
  }

  return errors;
}

function nameValidation (value) {
  if(emptyFieldError(value).length > 0){
    return;
  }
  minLengthError(value);
  maxLengthError(value);
  onlyLettersError(value);
}

function descriptionValidation (value) {
  if(emptyFieldError(value).length > 0){
    return;
  }
  minLengthError(value);
  maxLengthError(value);
  onlyNumbersLettersError(value);
}

function cityValidation (value) {
  emptyFieldError(value);
}

function handleErrors (errors) {
  //var onSuccessWindow = document.getElementsByClassName('on-success');
  if (errors.length < 1){
    console.log('Success');
    //onSuccessWindow[0].classList.remove('hiddenWindow');
    //saveDatatoLocalStorage();  //save data to localstorage
    //document.querySelector('.letterToSantaForm').reset(); //clean all fields

  } else {
    //add .error to matching field + append error text
    console.log (errors);
  }
}

function validateForm (e) {
  errors = [];
  e.preventDefault();
  var name = document.letterToSanta.myName.value;
  var city = document.letterToSanta.city.value;
  var behavior = document.letterToSanta.goodVSnaughty.value;
  var description = document.letterToSanta.description.value;

  nameValidation(name);
  cityValidation(city);
  descriptionValidation(description);

  handleErrors(errors);
}

////////////////////////// handle on-success window ////////////////////////////////////
//
//function hideOnSuccessWindow() {
//  var onSuccessWindow = document.getElementsByClassName('on-success');
//  onSuccessWindow[0].classList.add('hiddenWindow');
//}
//
//function redirectToWishlist() {
//  window.location.href = 'wish-list.html';
//}
//
//
//////////////////////////////  local storage   //////////////////////////////////////
//var localStorageIndex = localStorage.length + 1;
//
//function saveDatatoLocalStorage() {
//	// get the data that you want to save
//	var name = document.letterToSanta.myName.value;
//	var description = document.letterToSanta.description.value;
//	var key = 'user'+ localStorageIndex; // setting a unique key for the data
//
//	// saving the data as an object
//	localStorage.setItem(key, JSON.stringify({
//    username: name,
//    giftDescription: description
//	}));
//
//	localStorageIndex++; // incrementing the index counter
//}
//
//function displayWishes() {
//	var ul = document.querySelector('.wish-list');
//	var li, userKey;
//	for(var i=1; i<=localStorage.length; i++) {
//		li = document.createElement('li');
//		userKey = 'user' + i;
//		var data = JSON.parse(localStorage.getItem(userKey));
//		li.appendChild(document.createTextNode(data.giftDescription));
//		ul.appendChild(li);
//	}
//}
//
///////////////////////////////////  Random number generation  /////////////////////////
//
//var behaviorList = {
//	1: 'Very Good',
//	2: 'Good',
//	3: 'Naughty'
//};
//
//var imageUrlList = {
//	1: 'img/gifts/goldGift.jpg',
//	2: 'img/gifts/groupGift.jpeg',
//	3: 'img/gifts/redGift.jpg'
//};
//
//function getRandomNumber(limit) {
//	var randomNumber = Math.floor(Math.random() * limit) + 1;
//	return randomNumber;
//}
//
//function getBehaviour() {
//	var randomNo = getRandomNumber(3);
//	var behaviour = behaviorList[randomNo];
//	var element = document.querySelector('.attitude');
//	element.appendChild(document.createTextNode(behaviour));
//}
//
//function getGift() {
//	var randomNo = getRandomNumber(localStorageIndex-1);
//	var userKey = 'user' + randomNo;
//	var data = JSON.parse(localStorage.getItem(userKey));
//	var element = document.querySelector('.santa-gift-text');
//	element.appendChild(document.createTextNode(data.giftDescription));
//}
//
//function getGiftImage() {
//	var element = document.querySelector('.santa-gift');
//	var randomNo = getRandomNumber(3);
//	var giftImageUrl = imageUrlList[randomNo];
//	element.src = giftImageUrl;
//}
//
//function fillContent() {
//	getBehaviour();
//	getGift();
//	getGiftImage();
//}
