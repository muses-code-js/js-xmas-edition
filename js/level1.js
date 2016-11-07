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

    Input validations are essential for any web form since it helps the web site
    visitor submit the right input. Input validations are often written in the
    client-side scripting language – JavaScript. (JavaScript runs inside the
    visitor’s web browser and gives quick feedback).

    It is required to do the validations on the server side as well. This is
    because JavaScript is an optional component that can be disabled and avoided.
    The server-side script should make sure that the data it processes is a
    valid form submission.
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
