/*  Level 2 - Local storage
After the user fills in the form and javascript validating

1. Once the user enters the values, in case of success validation --
	1. Add the values (name and the gift as an object along with a unique id) to local storage
	2. Redirect to Wish List page (There would be another window to display wish list or santa gift)

2. When you are redirecting to Wish List Page
	1. Retrive the Wishes from Local storage
	2. Write the Wishes to the DOM

3. When you are redirected to the Santa's gift page
	1. Here too we would read from local storage
	2. random number generator and display the image ..

*/

/*

We are getting information from the user and validating that information but when we refresh the page, that information is lost and the user has to type in all the information again. Wouldn't it be nice if we could save the information that the user types somewhere and we could use that information to display something..

Here, the Local storage come to the rescue ( We can replace the local storage with an actual database
when we will work with more advanced data. What the database does is that it provides a location to store
the data and when needed we can access the data.. Think of a cookie jar which is the database and the cookie
as the data ;) )

So, what is a local storage ?
it is a function which allows the web pages to store information locally on to the client's web browser using a key and value mechanism.
Once we add the data to local storage,it will be available for ever unless we delete it

You can view the information stored in the local Storage by
 - opening the console window
 - selecting the Application tab
 - Within the Storage Menu, click on the down arrow near LocalStorage option
 - select the file:// to view the local storage details saved s

(go on, give it a try, chances are that you would not have any data yet..)

There are 2 storage options available
	1. window.localStorage - stores data with no expiration data
	2. window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)

we will make use of the .localStorage object

the basic operations for local storage is to add contents to it, get information from it and to clear the local storage entirely

They can be done by


Local storage - adding contents to local storage
 localStorage.setItem(‘key’, value);

e.g: var todos = $('#todos').html();
   localStorage.setItem('todos', todos);

Retrieve information from Local Storage
if(localStorage.getItem(‘key’))

e.g: if(localStorage.getItem('todos')) {
$('#todos').html(localStorage.getItem('todos'));
}

Clear all the local storage
window.localStorage.clear();


Local storage can only save strings, so storing objects(read the Notes for for information about objects) requires that they be turned into strings using JSON.stringify - you can’t ask local storage to store an object directly because it’ll store “[object Object]”, which isn’t right at all!
That also means the object must be run through JSON.parse on the way out of local storage
e.g: localStorage.setItem('user', JSON.stringify({
    username: 'htmldog',
    api_key: 'abc123xyz789'
}));

var user = JSON.parse(localStorage.getItem('user'));

Now lets use these information in to our code



*/

/*

Notes:
Advantages of using local storage
 - more secure
 - large amount of data can be stored locally and it would not affect the website performance and has the storage limit of atleast 5MB
 - information is never transferred to the server
 - data can be stored for ever, it does not have an expiry date
 - data is not lost when the browser is closed and is available at any time unless we delete it manually

Local storage is per origin (per domain and protocol). All pages, from one origin, can store and access the same data.



* explain what is an object with properties.. how to get the key -value pairs ..
* manipulating with objects - read,  write, find,
make use of unique id to identify the local storage values ( .. )
link to relational db for further reading




*/
