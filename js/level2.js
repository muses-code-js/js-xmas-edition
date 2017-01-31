/*  Level 2 - Local storage

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
We are getting information from the user but when we refresh the page, that information is lost
and the user has to type in all the information again. Wouldn't it be nice if we could save the
information that the user types somewhere and we could use that information to display something..

Here, the Local storage come to the rescue ( We can replace the local storage with an actual database
when we will work with more advanced data. What the database does is that it provides a location to store
the data and when needed we can access the data.. Think of a cookie jar which is the database and the cookie
as the data ;) )


*/


/* Local Storage Notes

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



Notes:

Local storage is more secure, and large amounts of data can be stored locally, without affecting website performance. Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.

The localStorage object stores the data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

2 Objects for storing data
	window.localStorage - stores data with no expiration data
	window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)



Local storage can only save strings, so storing objects requires that they be turned into strings using JSON.stringify - you can’t ask local storage to store an object directly because it’ll store “[object Object]”, which isn’t right at all!
That also means the object must be run through JSON.parse on the way out of local storage
e.g: localStorage.setItem('user', JSON.stringify({
    username: 'htmldog',
    api_key: 'abc123xyz789'
}));

var user = JSON.parse(localStorage.getItem('user'));

Local storage is per origin (per domain and protocol). All pages, from one origin, can store and access the same data.

* explain what is an object with properties.. how to get the key -value pairs ..
* manipulating with objects - read,  write, find,
make use of unique id to identify the local storage values ( .. )
link to relational db for further readings..


You can view the information stored in the local Storage by
 - opening the console window
 - selecting the Application tab
 - Within the Storage Menu, click on the down arrow near LocalStorage option
 - select the file:// to view the local storage details saved s

*/
