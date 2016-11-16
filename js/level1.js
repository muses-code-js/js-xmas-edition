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
 */

/*
    1. Get value from the form.

       We will need to
 */


function submitWish(){
    alert('You have just submitted your wish');
}

function uploadFile(){
}


////////////////////////////////////////////////////////////////////////
//                                                                    //
// Congratulations! You have finished Part 1!                         //
// Stand up, stretch your legs, celebrate your achievement.           //
// Next step will be following up the instructions in level2.js file. //
//                                                                    //
////////////////////////////////////////////////////////////////////////
