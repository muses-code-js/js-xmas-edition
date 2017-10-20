Level 1 - Form
==============


How does a web form work?
=========================


1. A visitor visits a web page that contains a form.
2. The web browser displays the HTML form.
3. The visitor fills in the form and submits.
4. The browser sends the submitted form data to the web server.
5. A form processor script running on the web server processes the form data.
   The processing steps can include:
      - sending the form submission by email,
      - saving the submission to a database table or a file.
6. A response page is sent back to the browser.

A standard web form has the following parts:
1. The HTML code for the form (read in more details at
   html-form-description.txt file).
2. Input validations.
3. Form processor script.



Input Validations
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



To validate our form we will need to do the following:
1. Get value from form
2. General validation:
    - not empty
    - min length 2
    - max length 250
    - only letters
    - only numbers
    - letters and numbers
3. Individual validation:
    - for name
    - drop down - city
    - description
    - file type
    - file size
4. Validate whole form when we submit it
5. Clean the code
6. CSS:
    - change for error field - red
    - warning messages

These comprise all of the validations for our form.


1.Get value from the form
==========================


   First of all we will need to access our HTML, to do so we will use `document`.
   If you don't know how DOM works you can read up on it [here](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction), and it's also covered in part 3 of our `Intro to Javascript` [workshop](https://github.com/node-girls-australia/js-intro-workshop).

   So let's get one value out to see how it works, and for that you need to check on
   index.html file as well - to see how we are getting element out knowing classes:
   `var name = document.letterToSanta.name.value;`

   TODO: now it is your turn to get other values out. Create variables called
   `city`, `behavior`, `description` and store in them appropriate values from the form.
   
   
2.Validate one value to be right
================================


  Let's continue with our example `name` and validate it.
  First of all let's validate that our `name` value is not empty:

  ```
  function nameValidationError (value) {
    if(value == '') {
      return 'Name cannot be empty';
    }
    return '';
  }
  ```

  TODO: add a few more validations inside the `nameValidationError` function:
  - If `name` is shorter than 2 characters print an error: 'This field should be longer than 1 character'
  - If `name` is longer than 250 characters print an error: 'This field cannot be longer than 250 characters'


  Now it is time to do one more interesting validation. We want
  our name to contain only letters. But how we can check this? One of very
  handy tool that we can use for this kind of check is Regular Expressions
  (RegEx/RegExp for short) - an object that describes a pattern of characters.
  RegExps are used to perform pattern-matching and "search-and-replace" functions
  on text. So we can check if our text (or part of the text) contains only letters or
  only numbers, or if we have particular set of letters etc. RegEx can get very complex, but we will deal with a simple pattern today.
  
  P.S.: check out regular-expressions.txt for more information about RegExp and
  links to a cheat sheet and interesting games(!!!) where you can practice your
  new skills. Very recommended!

  Regular expression objects have a number of methods. The simplest one is
  `test`. If you pass it a string, it will return a boolean value (true or false) telling you whether
  the string contains a match for the pattern in the expression.

  ```
  console.log(/abc/.test("abcde"));
    // → true
  console.log(/abc/.test("abxde"));
    // → false
  ```

  To validate that our name only has letters we can test our value as
  follows:

  `var onlyLetters = /^[A-z]+$/.test(value);`

  This test will return a boolean value, so if `value` does match our
  pattern `onlyLetters` will be equal to `true`.

  TODO: Add one more validation to `nameValidationError` function, which will 
  validate that we have letters only. If it doesn't, return an error: 'This field 
  can only contain letters'.
  

3.Submitting the form
=====================
  
  
  Now that we have full validation on the name field let's check how it works 
  when we submit the form. If you go to the `index.html` file and check 
  the form, on the bottom, where we have the submit button `Send your letter to 
  Santa`, you can see that in `onclick` we call function `validateForm`.

  TODO:
  1. Let's create a function `validateForm`, which does not take any 
  arguments.
  2. Move variable `name` with its value inside of the function.
  3. Call function `nameValidationError` inside our `validateForm` function 
  and pass it `name` as an argument.
  4. console.log the `nameValidationError(name)` so we can check if it 
  works.

  What happens now? When we click the submit button we get the value
  of the name field (if there is any). Afterwards we call function
  `nameValidationError`, which will validate if our name field is empty,
  if it's of an appropriate length, and if our name consists only of letters.

  If you try it now nothing will happen. The reason for that is
  the default behaviour of the submit button.
  
  
4.Events. Submit button
=======================


  The standard behaviour of the form on submit (i.e. all input is sent
  to the server and the page is reloaded) was reasonable a long time ago
  when we had no single page application concept. Nowadays we create 
  single-page applications with javascript, and we want to prevent that 
  default behaviour.

  TODO:
  1. In `index.html` add `event` as an argument for the
  `validateForm` function.
  2. In your javascript file add `event` as an argument to
  the `validateForm` function.
  3. Inside of the `validateForm` function call:
  `event.preventDefault();`


  Now if you try to submit the form with empty name field it should show your errors.
  

5.Success or errors
===================


  Let's create an error handler which will handle our errors
  and if we have errors it will return us errors, else Success.
  
  TODO:
  1. Create a function `handleErrors` that takes 1 argument `errors`.
  2. Add a check inside of this function: if we have no errors 
  then console.log 'Success', else console.log the errors.
  3. Replace console.log `nameValidationError(name)` in the function 
  `validateForm` with a call to function `handleErrors`, and  
  pass in the list of errors. To do so we need to:
      - Create a variable `errors` inside the function `validateForm` and 
  make it equal to `nameValidationError(name)`,
      - Pass the variable `errors` to the `handleErrors` function.
  
  Run the form again and if name field is filled in correctly it should
  print out 'Success', else it should print out one of the errors we have.


6.Do validation for other fields
================================


  Now, when you know all steps on how to validate 1 field do same for 
  other fields.
  
  TODO:
  1. Get the value from the field `city` and validate that it is not empty.
  2. Get the value from the field `description` and validate that it is not 
  empty, has more than 2 characters, less than 250 characters and consists 
  only of letters and numbers.

  If you remember from before, you used the syntax:

  `var onlyLetters = /^[A-z]+$/.test(value);`

  to indicate that you only want letters. In order to define only numbers,
  you can add `0-9` inside the brackets, like `[A-z0-9]`. This allows any
  letter, and any number. You might want to allow spaces as well!
  
  3. Now in `validateForm` we need to get errors from the `city` and `description` 
  fields. For that we have to change our variable `error`. It should be 
  an object now. First of all, turn `nameValidationError(name)` into a key `name`
  and a value `nameValidationError(name)`:
  
  ```
  var errors = {
    name: nameValidationError(name)
  };
  ```

  4. Now do the same for `city` and `description`.

  When you are defining multiple keys for an object, you need to add a comma
  to the previous value. For example:

  ```
  var errors = {
    name: nameValidationError(name),
    city: cityValidationError(city)
  };
  ```
   
  Now we are passing all of our errors into the `handleErrors` function, but 
  we need to check if we have any errors differently. We need to iterate 
  through each key-value pair.
  
  5. Create variable `errorsCount` inside of `handleErrors` function.
  
  6. Now let's check if we have any errors for the `name` field and change
  our `errorsCount` if we have any errors, we can log them out like so:
  
  ```
  if (errors.name) {
    console.log(errors.name);
    errorsCount = errorsCount + 1;
  }
  ```
  
  If we do not have any errors and our name field validation returns an empty 
  string, our `if` statement it will be `false` and we will not increment `errorsCount`.
  If we do have an error we will get in the if statement and count the error.
  
  7. Inside of our function `handleErrors` we do not need an if/else check 
  now to display Success or Errors. We can do `if` checking is our 
  `errorsCount < 1` console `Success`. As our error will be consoled by check 
  of errors itself on step 6.
  
  Now if you have any mistakes in name field the validation should work properly.
   
  8. Do same checks for city and description fields.
   
  Now three of your fields should be validating in a properly.
  
  
7.Object, forEach, callback
===========================


  As you can see now we have a lot of repetitions in `handleErrors`. Now, 
  when all code works, it is time to do some cleaning and refactor the code.
  You can read more about `forEach` method here:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  
  TODO: 1. We can iterate through errors through the key and with function 
  forEach.
  
  ```
  Object.keys(errors)
    .forEach(function (key) {
       console.log(errors[key]); 
       errorsCount = errorsCount + errors[key].length;
    });
  ```
  
  Read about the Objects on the bottom of the page in NOTES.
  Replace all our `if` checks for errors inside of the `handleError` function 
  with that code.
  
  Now when you submit form it all should work the same. We do not have that many 
  repetitions in our code anymore.


8.A bit of errors interactivity
================================


  Let's add some interactivity to our user interface, because at the moment 
  only we know about the errors that we can see in console.
  
  Let's make fields that has errors red. For that we have class `.error`
  that we create for you in our `index.css` file. It only makes the border of the
  field that has this class red.
   
  TODO: 1.We will need to use `document.querySelector` to target the element on
  the page. And all of it we can do inside our forEach loop. So we are targeting
  the whole form and then fields with specific name (that our key will represent 
  `[name="${key}"]`). This will look like:

  ```
  document.querySelector(`[name="${key}"]`)
  ```
  
  TODO: 2.After we get our element on this element we need to add class `.error`.
  For that purpose we will use `.classList.add('error')`.
  
  TODO: 3. Now you ll see that we get red fields every time, it is because every 
  time we iterate through field it will add class `error`. to avoid it we need
  to make a check if we do have any errors then get element from the page and
  add the class.
  
  Now when we have an error your field that has it should turn red.
  
  
  It is also not cool that even if you put the wrong input in your field you still 
  need to delete it by yourself and type in something else. So let's clean the 
  field with en error.

  TODO: Right after we add class, get same element from the page and set it value 
  to empty string.
  
  Now when we have an error your field that has it should turn red and empty. The
  correct fields will still has it's values inside.
  
  
  And last step for errors - let's display them out to user.
  
  TODO: Let's add our errors inside of the `errorsBlock` container that we have on
  `index.html` page for you. If you check on it you will see that we have separate
  paragraphs for each error with the class same as our key. So you can target out 
  `errorsBlock` and class with key value. You can add errors to them using 
  `innerHTML` method.
  
  When you submit form you will get your errors out for the fields you made 
  mistake in.
  Feel free to polish css in any way you like.
  
  TODO: we can remove `console.log(errors[key]);` from `handleErrors` function now,
  as we have our errors displayed on the screen now.
  
  PS: it is always good to clean up all `console.log` from your code if you
  have any when you finish.


9.A bit of on Success interactivity
====================================


  Time came to play around with what will happen on success. 
  We created for you a block with class name `on-success`.
  
  TODO: 1.Create a variable `onSuccessWindow` in your `handleErrors` function
  and make it equal to element from the page with class `on-success`.
  
  TODO: 2.When we have no errors and printing out `Success`, remove class 
  `hiddenWindow` from `onSuccessWindow` using `classList` method. As we added
  classes before to errors fields.

   
  Now you will see a pop up window if all fields are filled in correct. 
  If you go to `index.html` page and look into `on-success` element you will
  see that we have 2 buttons there with `onClick` event handlers and they both
  have different functions. Let's create them so we can get on the next level!
  
  TODO: 1.Create function `hideOnSuccessWindow` which will get our `on-success`
  element out of the page and add class `hiddenWindow` to it.
  
  TODO: 2.Create function `redirectToWishlist` which will redirect us to 
  `wish-list.html` page. We can do it with help of `window.location.href`.
   
   
  Everything works good now, just 1 more tiny thing - did you notice that when 
  we choose to stay on this page and write another letter our form stays filled 
  in? We can easily fix it by resetting the form when we have no errors.
  
  TODO: Get our form element from the page and use `reset` method on it.
  
  TODO: last step - you can delete `console.log('Success');` now.



//////////////////////////////////////////////////////////////////////////////////

  Congratulations! You have finished Part 1!
  
  Stand up, stretch your legs, celebrate your achievement.
  
  Next step will be following up the instructions in level2.md file.

//////////////////////////////////////////////////////////////////////////////////


NOTES
=====


  **Objects**

  Objects can be compared to real world objects (like a car, a spoon, house, 
  etc.. ) which have properties and a particular type. In Javascript (and 
  other programming languages), an object is one of the complex data types, 
  which have a list of keys and values
  
  ```
    var car = {
        Model : 'Honda City',
        color: 'Red',
        owner: 'X1',
        yearOfManufacture: 2017
    };
  ```
  
  In the above example each item in the list is a property(e.g: Model, color, 
  owner, year) of the object 'car'.
  The object can also have functions called as methods.

  The property-name/ Key can be a string or a number.

  ```
    var age = {
        10: 'kids',
        30: 'smart and wise',
        100: 'very very experienced'
    };
  ```
  
  We use objects mostly to store data and for creating custom methods and 
  functions.
  There are 2 ways we can create objects
   1. Object Literals
   2. Object Constructors

  Via Object Literals
  We just declare an object name and within {} define all the properties 
  with its values:
  
  ```
    var myNewEmptyObject = {}

    var book = {
        name: 'Harry Potter Book1',
        author: 'J.K. Rowling',
        blurp: 'something magical... '
    };

    sayHello: function() {
        console.log('Hello There');
    };
  ```

  Via Object Constructors
  Constructors are functions that are used for initialising new objects using 
  the `new()` keyword.
  Set the properties via the `object.propertyname` notation:
  
  ```
    var book  = new Object();
    book.name = 'Harry Potter Book1';
    book.author = 'J.K.Rowling';
  ```
  
  Accessing properties of an object:
   - dot notation
   - bracket notation
   
  ```
    var book = {
        name: 'Harry Potter Book1',
        author: 'J.K. Rowling',
        blurp: 'something magical... '
    };
  ```
  
  Dot notation is the most common way we access the objects. Most of the 
  examples above use the dot notation.
  It follows the object-name.key-name syntax:
  
  ```
    console.log(book.name);
    console.log(book.author);
  ```
  
  Bracket notation follows the object-name[key-name] format:
  
  ```
    console.log(book['name']);
    console.log(book['author']);
    console.log(age[10]);
  ```
  
  Note: the property which is a number must use the bracket notation only.


  You can delete the properties of an object using the `delete` keyword:
  
  `delete book.blurp`
