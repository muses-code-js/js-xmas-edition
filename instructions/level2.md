Level 2 - Local storage
=======================

  Let's do overview for our actions on level 2.
  After the user fills in the form and it pass all validation:

  1. Once the user enters the values, in case of success validation
     - Add the values (name and the gift as an object along with a unique id) 
     to local storage.
  2. When you are going to Wish List Page
     - Retrieve the wishes from local storage
     - Write the wishes to the DOM as a list of wishes

  3. When you are going to the Santa's gift page
     - Here too we would read from local storage
     - Random number generator and display the image



1.Local Storage
=================


  We are getting information from the user and validating that 
  information but when we refresh the page, that information is 
  lost and the user has to type in all over again. 
  
  Wouldn't it be nice if we could save the information that the 
  user types somewhere and so could use that information, for example,
  to display it.

  Here, the Local storage comes to the rescue (we can replace the 
  local storage with an actual database when we will work with more 
  advanced data. What the database does is that it provides a location 
  to store the data and when needed we can access this data. Think of 
  a cookie jar which is the database and the cookie as the data ;))

  So, what is a local storage?
  It is a function which allows the web pages to store information 
  locally on the client's web browser using a key and value mechanism.
  Once we add the data to local storage, it will be available forever 
  unless we delete it.
  
  It is great option if you do not have backend (so you can connect to 
  database) but only front-end.

  You can view the information stored in the local storage by:
  
  TODO: 1. Open the web console window
  
  TODO: 2. Select the `Application` tab
  
  TODO: 3. Within the `Storage` Menu, click on the down arrow near 
  `LocalStorage` option.
  
  TODO: 4. Select the file:// to view the local storage details saved.

  There is a chance that you would not have any data yet

  There are 2 storage options available:
  1. window.localStorage - stores data with no expiration data.
  2. window.sessionStorage - stores data for one session (data is lost when 
  the browser tab is closed)

  We will use the `.localStorage` object.

  With a local storage, we can either add contents to it, retrieve 
  information from it or clear the local storage contents entirely which 
  is explained in detail below

  Adding contents to local storage:
    `localStorage.setItem(‘key’, value);`

  e.g: `const todos = $('#todos').html();`
    `localStorage.setItem('todos', todos);`

  Retrieve information from local storage via the key:
    `localStorage.getItem(‘key’)`

  e.g: 
  ```
    if(localStorage.getItem('todos')) {
      $('#todos').html(localStorage.getItem('todos'));
    }
  ```

  Clear all the local storage contents
    `window.localStorage.clear();`


  Local storage can only save strings, so storing objects requires that 
  they be turned into strings (also known as serializing objects i.e 
  converting an object to a string format) using JSON.stringify - you 
  can’t ask local storage to store an object directly because it’ll store 
  “[object Object]”, which isn’t right at all!
  
  That also means the object must be run through JSON.parse ( also known 
  as de-serializing i.e converting a string to an object) on the way out of 
  local storage:
   
  ```
  localStorage.setItem('user', JSON.stringify({
    username: 'htmldog',
    api_key: 'abc123xyz789'
  }));

  const user = JSON.parse(localStorage.getItem('user'));
  ```


2.Save data to local storage
=============================


  Now lets use this information on practice...

  We have validated bunch of information about the user, so now lets save 
  it to the local storage. To do so, follow next steps:
  
  TODO: 1. Create a function with the name `saveDataToLocalStorage`.
  
  TODO: 2. For now, we would only want to save the name and the gift 
  description to local storage. So lets create 2 variables (`name` and 
  `description`) that collects these information from the DOM.
  
  TODO: 3. We would want a unique key to denote the data storage for each 
  `name` and `description`. so lets create our own local storage index:
  
  TODO: 4. Declare a  global variable (in the beginning of the page) 
  called `localStorageIndex` with value as `localStorage.length`
  
  TODO: 5. Note: the `localStorage.length` needs to be Zero first when we 
  begin this tutorial, for that we need to empty the already existing local 
  storage contents if any. This can be done by typing 
  `window.localStorage.clear();` in the web console.
  
  TODO: 6. Inside the function `saveDataToLocalStorage` create another 
  variable called `key` with  the value `'user'+ localStorageIndex`. It
  will set a unique key for the data.
  
  TODO: 7. Save the data as an object in the local storage by using the 
  `setItem()`:
  
  ```
    localStorage.setItem(key, JSON.stringify(
      {
        username: name,
        giftDescription: description
      }
    ));
  ```
  
  Where key is the `key` and value is the serialized object with properties 
  `username` and `giftDescription`

  TODO: 8. Increment the `localStorageIndex`(this will ensure that we have 
  unique keys for each object) in the end of our function 
  `saveDataToLocalStorage`.
  
  TODO: 9. Call the `saveDataToLocalStorage` function inside of the 
  `handleErrors` function when we have no errors.

  TODO: 9. Give it a try - refresh your `index.html` and then add the 
  information - see if the entities have been added to the local storage.
  
  Yay !! We have added our first data to local storage !!


3.Get data from local storage
==============================

  Now we would want to display the list of wishes stored in the local 
  storage in our wish-list page. 
   
  TODO: 1. Lets create another function called `displayWishes()`.

  TODO: 2. We would display our wishes as a list item, so get that element 
  from DOM in the variable `ul`.

  TODO: 3. We need to create a loop that would fetch all the items from 
  the local storage, so the index of the loop needs to be until the 
  `localstorage.length`.
  The loop must do few things:
   - create an element `li`.
   - get the data from local storage for that `userKey` and append it to `li`.
     e.g: `li.appendChild(document.createTextNode(data.giftDescription));`
   - this `li` element must be appended to the `ul` element
     e.g: `ul.appendChild(li);`
  The `appendChild()` adds the element `li` to `ul`. Here `ul` is the parent 
  and `li` is the child.

  We have a function, that would display the list of wishes, but when do we 
  call this function?
  
  As soon as the `wish-list.html` loads, we need all the elements to be 
  displayed. So we call the function `displayWishes()` when the DOM is loading 
  i.e on the `onload` event.
  
  TODO: 4. Add the `onload="displayWishes()"` in the body tag of the 
  `wish-list.html` page.

  To check if all works good, refresh the `wish-list.html` page and see if 
  it displays the items.



//////////////////////////////////////////////////////////////////////////////////

  Congratulations! You have finished Part 2!
  
  Stand up, stretch your legs, celebrate your achievement.
  
  Next step will be following up the instructions in level3.md file.

//////////////////////////////////////////////////////////////////////////////////


NOTES
======


  **Advantages of using local storage** 
  
   - more secure
   - large amount of data can be stored locally and it would not affect the 
     website performance and has the storage limit of at least 5MB
   - information is never transferred to the server
   - data can be stored for ever, it does not have an expiry date
   - data is not lost when the browser is closed and is available at any time 
     unless we delete it manually

  Local storage is per origin (per domain and protocol). All pages, from one 
  origin, can store and access the same data.
