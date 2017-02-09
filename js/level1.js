/*  How does a web form work?
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
*/

/*
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
    modern browsers.
    https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation

    * Server-side validation:
    When form input is important, it should always be verified using a secure
    server-side script. Otherwise a browser with JavaScript disabled, or a hacker
    trying to compromise your site, can easily submit invalid data.

 */

/*
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
 */

/*
    1. Get value from the form.

       First of all we will need to access our HTML, to do so we will use `document`.
       If you don't know how DOM works you can check on info here:
       https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
       Or if you tried our `Intro to Javascript` workshop it is in more details in
       part 3.
       https://github.com/node-girls-australia/js-intro-workshop

       So let's get one value out to see how it works, for that you need to check on
       index.html file as well - to see how we are getting element out knowing classes:
       var name = document.letterToSanta.myName.value;

       TODO: now it is your turn to get other values out. Create variables called
       `city`, `behavior`, `description` and store in them appropriate values from the form.
 */



/*
     2. Validate one value to be right.

        Let's continue our example `name` and validate it.

 */


/*

2. Validate `name` value
 var error = '';
 var errors = [];
         function nameValidation (value) {
             if(value == '') {
                 error = 'This field cannot be empty';
                 return errors.push(error);
             }
             if (value < 2){
                 error = 'This field should be longer then 1 character';
                 return errors.push(error);
             }
             if (value > 250){
                 error ='This field cannot be longer then 250 characters';
                 errors.push(error);
             }


             3. Regex (only letters)

             if (value != '//') {
                 error = 'This field can have only letters';
                 errors.push(error);
             }

             return error;
         }
4. OnSubmit call validate name (no eventPreventDefault)
5. Event bubbling ... eventPreventDefault .... (add it on html l42)
6. Display success or errors
7. Clean errors ????
8. Do validation for all fields
9. If field is empty do not do other checks
 function nameValidation (value) {
    if(emptyFieldError(value)){
        return;
    }
    minLengthError(value);
    maxLengthError(value);
    onlyLettersError(value);
 }
10. Refactoring/cleaning:
    - subtract repeating checks into functions
         function emptyFieldError (value) {
             if(value == '') {
                 error = 'This field cannot be empty';
                 return errors.push(error);
             }
             return error;
         }
    - create a main function validate form that includes calling on each field validation
    - onSubmit we call vslidateForm function and check on errors (html)
11. If errors change css + append errors messages into page
    - refactor: subtract function handlingErrors from validateForm
12. If no errors redirect to wish list page
- and save all values to localstorage
- clean the fields

--------------------------------------
 Level 2


 */


function uploadFile(){
}


////////////////////////////////////////////////////////////////////////
//                                                                    //
// Congratulations! You have finished Part 1!                         //
// Stand up, stretch your legs, celebrate your achievement.           //
// Next step will be following up the instructions in level2.js file. //
//                                                                    //
////////////////////////////////////////////////////////////////////////
