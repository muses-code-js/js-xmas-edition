How does a web form work?
=========================


1. A visitor visits a web page that contains a form.
2. The web browser displays the HTML form.
3. The visitor fills in the form and submits
4. The browser sends the submitted form data to the web server
5. A form processor script running on the web server processes the form data.
   The processing steps can include:
      - sending the form submission by email
      - saving the submission to a database table or a file.
6. A response page is sent back to the browser.

The parts of a web form
A standard web form has the following parts:
1. The HTML code for the form (read in more details at
   html-form-description.txt file)
2. Input validations.
3. Form processor script.



Input Validations.
=================


* Client-side validation:
Input validations are essential for any web form since it helps the web site
visitor submit the right input. Input validations are often written in the
client-side language – JavaScript.
Validating form input with JavaScript is easy to do and can save a lot of
unnecessary calls to the server as all processing is handled by the web
browser. It can prevent people from leaving fields blank, from entering too
little or too much or from using invalid characters.

For an alternative approach to client-side form validation, without
JavaScript, check on HTML5 Form Validation which is available now in most
modern browsers. But we cannot style it, that is why we are doing js validation
in this workshop.
https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation

* Server-side validation:
When form input is important, it should always be verified using a secure
server-side script. Otherwise a browser with JavaScript disabled, or a hacker
trying to compromise your site, can easily submit invalid data.



To validate our form we will need to follow next steps:
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
    4. Validate whole form when we submit it
    5. Clean the code
    6. Css:
        - change for unvalid field - red
        - warning messages
        


1. Get value from the form.
===========================


   First of all we will need to access our HTML, to do so we will use `document`.
   If you don't know how DOM works you can check on info here:
   https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
   Or if you tried our `Intro to Javascript` workshop it is in more details in
   part 3.
   https://github.com/node-girls-australia/js-intro-workshop

   So let's get one value out to see how it works, for that you need to check on
   index.html file as well - to see how we are getting element out knowing classes:
   `var name = document.letterToSanta.myName.value;`

   TODO: now it is your turn to get other values out. Create variables called
   `city`, `behavior`, `description` and store in them appropriate values from the form.
   
   
2. Validate one value to be right.
==================================


  Let's continue our example `name` and validate it.
  First of all let's validate that our `name` value is not empty:

  ```
  function nameValidationError (value) {
    if(value == '') {
      return 'Name cannot be empty';
    }
    return '';
  }
  ```

  TODO: add inside of `nameValidationError` function few more validations:
  - If name is shorter then 2 characters print error
  'This field should be longer then 1 character'
  - If name is longer then 250 characters print error
  'This field cannot be longer then 250 characters'


  Now it is time to do one more interesting validation. For example, we want
  our name to contain only from letters, how we can check on it? One of very
  handy tool that we can use for this kinds of checks is Regular Expressions
  (RegEx/RegExp for short) - an object that describes a pattern of characters.
  RegExps are used to perform pattern-matching and "search-and-replace" functions
  on text. So we can check if our text(or part of the text) is only letters or
  only numbers, or if we have particular set of letters etc.

  RegEx can get very complex, but we will deal with a simple patterns today.
  PS: check on regular-expressions.txt for more information about RegExp and
  links to cheat sheet and interesting games(!!!) where you can practice your
  new skill. Very recommended!

  Regular expression objects have a number of methods. The simplest one is
  `test`. If you pass it a string, it will return a Boolean telling you whether
  the string contains a match of the pattern in the expression.

  `console.log(/abc/.test("abcde"));
    // → true
  console.log(/abc/.test("abxde"));
    // → false`

  To validate that our name will have only letters we can test our value as
  follows:

  `var onlyLetters = /^[A-z]+$/.test(value);`

  This test will return us boolean value (true or false), if it does match our
  pattern `onlyLetters` will be equal to `true`.

  TODO: Add one more validation to `nameValidationError` function. That will validate
  that we have letters only, if not return us an error 'This field can have only
  letters'
  

3. Submitting the form.
========================
  
  
  Now, when we have full validation on name field let's check
  up how it works when we submit the form. If you go to the
  `index.html` file and check on the form, on the bottom, where
  we have submit button `Send your letter to Santa` you can see
  that `onclick` we call function `validateForm`.

  TODO: 1.So let's create function `validateForm`. It will not take
  any arguments.
  TODO: 2. Move variable `name` with it's value inside of the function.
  TODO: 3. Call function `nameValidationError` inside our `validateForm`
  function and pass `name` as an argument.
  TODO: 4. console.log the `nameValidationError(name)` so we can check 
  if it works.

  So, what happened now - when we click submit button we get the value
  of the name field (if there is any) and after we call function
  `nameValidationError` - that will validate if our name field is empty,
  will check if it's of an appropriate length and if our name consist
  only from letters.

  If you try it now nothing will happen. And the reason for that is
  the default behaviour of the submit button.
  
  
4. Events. Submit button.
=========================

  The standard behaviour of the form on submit - all input will be send
  to server and page will be reloaded - it was reasonable long time ago
  when it was no single page application concept. Nowadays we creating 
  single-page applications with javascript and we want to prevent that 
  default behaviour.

  TODO: 1. At `index.html` page add `event` as an argument of the
  `validateForm` function.
  TODO: 2. In your javascript file add `event` as an argument to
  the `validateForm` function.
  TODO: 3. Inside of the `validateForm` function call:
  `event.preventDefault();`


  Now if you try to submit form with empty name field it should print
  you all errors.
  

5. Display success or errors
============================
  
  Let's create an error handler, that will be handling our errors
  and if
  
  TODO: 1. Create function `handleErrors` that takes 1 argument `errors`
  TODO: 2. Make inside of this function check - if we have no errors 
  then console.log 'Success', else - console.log errors.
  TODO: 3. Replace console.log `nameValidationError(name)` in function 
  `validateForm` with calling on function `handleErrors` and we need to pass
   in the list of errors, to do so we need:
  TODO: 4. Create variable `errors` inside function `validateForm` and 
  make it equal to `nameValidationError(name)`.
  TODO: 5. Pass variable `errors` to `handleErrors` function.
  
  Run the form again and if name field is filled in correctly it should
  print us 'Success', else one of the first errors we get.


6. Do validation for other fields
=================================

  Now, when you know all steps on how to validate 1 field do same for other
  fields.
  
  TODO: 1. Get value from field city and validate that it is not empty.
  TODO: 2. Get value from field description and validate that it is not empty,
  has more then 2 characters, less then 250 characters and consist only from
  letters and numbers.
  TODO: 3. Now in `validateForm` how to get errors from city and description field.
  For that we will have to change our variable `error`. It should be an
  object now. First of all, for `nameValidationError(name)` - turn it into
  key `name` and value `nameValidationError(name)` as so:
  
  ```
  var errors = {
    name: nameValidation(name)
  };
  ```
  TODO: 4. Now do same for city and description.
   
  Now we are passing all of our errors into `handleErrors` function, but now we
  need to check if we have any errors differently. As we need iterate through 
  each key-value pair.
  
  TODO: 5. Create variable `errorsCount` inside of `handleErrors` function.
  TODO: 6. Now let's do check if we have any errors for name field and change
  our `errorsCount` if we have any errors like so:
  ```
  if (errors.name) {
    console.log(errors.name);
    errorsCount = errorsCount + 1;
  }
  ```
  If we do not have any errors and our name field validation returns empty string,
  for `if` statement it will be `false` and we will not do any errors counts. If we
  do have an error we will get in and count our errors.
  TODO: 7. Inside of our function `handleErrors` we do not need if/else check now
  to display Success or Errors. We can do `if` checking is our `errorsCount < 1`
  console `Success`. As our error will be consoled by check of errors itself on step 6.
  
  Now if you have any mistakes in name field it should work proper.
   
  TODO: 8. Do same checks for city and description fields.
   
  Now three of your fields should be validating in a proper way.
  
  
7. Object, forEach, callback
=============================

  As you can see now we have a lot of repetitions in `handleErrors`. Now, when all
  code works, it is time to do some cleaning and refactor the code.
  
  TODO: 1. We can iterate through errors through the key and with function forEach.
  ```
  Object.keys(errors)
    .forEach(function (key) {
       console.log(errors[key]); 
       errorsCount = errorsCount + errors[key].length;
    });
  ```
  Replace all our `if` checks for errors inside of the `handleError` function with 
  that code.
  
  Now when you submit form it all should work the same. We do not have that many 
  repetitions in our code anymore.


8. A bit of errors interactivity
================================
  - make field red
  - clean this field
  - insert error text


9. A bit of on Success interactivity
====================================
  - add var onSuccessWindow
  - add onSuccess class




////////////////////////////////////////////////////////////////////////
//                                                                    //
// Congratulations! You have finished Part 1!                         //
// Stand up, stretch your legs, celebrate your achievement.           //
// Next step will be following up the instructions in level2.js file. //
//                                                                    //
////////////////////////////////////////////////////////////////////////
