
/*
    1. Get value from form
    2. General validation:
      - not empty
      - min length 2
      - max length 250
      - only letters
      - only numbers
      - letters and numbers
    3. Individual validation
      - for name
      - drop down - city
      - description
      - file type
      - file size
    4. Css:
      - change for unvalid field - red
      - warning messages
 */



var error = '';
var errors = [];


function emptyFieldError (value) {
  if(value == '') {
    error = 'This field cannot be empty';
    return errors.push(error);
  }

  return error;
}

function minLengthError (value){
  if (value < 2){
    error = 'This field should be longer then 1 character';
    return errors.push(error);
  }

  return error;
}

function maxLengthError (value) {
  if (value > 250){
    error ='This field cannot be longer then 250 characters';
    errors.push(error);
  }

  return error;
}

function onlyLettersError (value) {
  if (value != '//') {
    error = 'This field can have only letters';
    errors.push(error);
  }

  return error;
}

function onlyNumbersLettersError (value) {
  if (value != '//') {
    error = 'This field can have only numbers and letters';
    return errors.push(error);
  }

  return error;
}

function nameValidation (value) {
  emptyFieldError(value);
  minLengthError(value);
  maxLengthError(value);
  onlyLettersError(value);
}

function descriptionValidation (value) {
  emptyFieldError(value);
  minLengthError(value);
  maxLengthError(value);
  onlyNumbersLettersError(value);
}

function cityValidation (value) {
  emptyFieldError(value);
}

function validateForm (e) {
  errors = [];
  e.preventDefault();
  var name = document.letterToSanta.myName.value;
  var city = document.letterToSanta.city.value;
  var behavior = document.letterToSanta.goodVSnaughty.value;
  var description = document.letterToSanta.description.value;
  var imageFile = document.letterToSanta.wishImage.value;

  nameValidation(name);
  cityValidation(city);
  descriptionValidation(description);

  if (errors.length < 1){
    console.log('Success');
  } else {
    console.log (errors);
  }
}


// onSubmit ->
//   validateForm()
//   if error log errors
//   alert successfully submitted form