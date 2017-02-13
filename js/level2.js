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

Here, the Local storage comes to the rescue ( We can replace the local storage with an actual database
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
 - select the file:// to view the local storage details saved

(go on, give it a try, chances are that you would not have any data yet..)

There are 2 storage options available
	1. window.localStorage - stores data with no expiration data
	2. window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)

we will make use of the .localStorage object (In case you dont knoww what is an object read below section on Objects first)

With a local storage, we can either add contents to it, retrieve information from it or clear the local storage contents entirely which is explained in detail below


adding contents to local storage
 localStorage.setItem(‘key’, value);

e.g: var todos = $('#todos').html();
   localStorage.setItem('todos', todos);

Retrieve information from Local Storage via the key
if(localStorage.getItem(‘key’))

e.g: if(localStorage.getItem('todos')) {
$('#todos').html(localStorage.getItem('todos'));
}

Clear all the local storage contents
window.localStorage.clear();


Local storage can only save strings, so storing objects requires that they be turned into strings (also known as serializing objects i.e converting an object to a string format) using JSON.stringify - you can’t ask local storage to store an object directly because it’ll store “[object Object]”, which isn’t right at all!
That also means the object must be run through JSON.parse ( also known as deserializing i.e converting a string to an object) on the way out of local storage
e.g: localStorage.setItem('user', JSON.stringify({
    username: 'htmldog',
    api_key: 'abc123xyz789'
}));

var user = JSON.parse(localStorage.getItem('user'));

Now lets use these information in to our code...

We have validated the user, so now after  validation lets save the information in the local storage. Lets do the following
1. create a function with the name saveDatatoLocalStorage.
	a. For now, we would only want to save the name and the gift description to local storage. So lets create 2 variables (name and description) that collects these information from the DOM
	b. We would want a unique key to denote the data storage for each name and description. so lets create our own localstorage index
	  > declare a  global variable( in the beginning of the page) called localStorageIndex with value as localStorage.length
	  Note: the localStorage.length needs to be Zero first when we begin this tutorial, for that we need to empty the already existing local storage contents if any . This can be done by typing
	  'window.localStorage.clear();'  in the console
	  > inside, the function create another variable called key with the value as 'user'+ localStorageIndex
	c. Save the data as an objec in the local storage by using the setItem()
		localStorage.setItem(key, JSON.stringify(
		{
			username: name,
			giftDescription: description
		}
		));
		where key is the key and value is the serialized object with properties username and giftdescription
	d. increment the localStorageIndex (this will ensure that we have unique keys)
	e. Give it a try - refresh your index.html and then add the information and see if the enties have been added to the local storage.
Yay !! we have added our contents to local storage now !!

2. Now we would want to display the list of wishes stored in the local storage in our wish-list page. Lets create another function called displayWishes()
	a. we would display our wishes as a list item, so get that element from DOM in the variable ul
	b. we need to create a loop that would fetch all the items from the local storage. so the index of the loop needs to be until the localstorage.length.
	c. the loop must
		> create an element li.
		> get the data from localstorage for that userKey and append it to li.
		e.g: li.appendChild(document.createTextNode(data.giftDescription));
		> this 'li' element must be appended to the ul element
		e.g: ul.appendChild(li);
	The appendChild() adds the element li to ul. here ul is the parent and li is the child.

3. we have a function, that would display the list of wishes, but when do we call this function ?
As soon as the wish-list.html loads, we need all the elements to be displayed. so we call the function displayWishes() when the DOM is loading i.e on the onload event.
add the 'onload="displayWishes()"', in the body tag of the wish-list.html page
4. To check if you are successful, refresh the wish-list.html page and see if it displays the items



////////////////////////////////////////////////////////////////////////
//                                                                    //
// Congratulations! You have finished Part 2!                         //
// Stand up, stretch your legs, celebrate your achievement.           //
// Next step will be following up the instructions in level3.js file. //
//                                                                    //
////////////////////////////////////////////////////////////////////////







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

*********
Objects
*********

Objects can be compared to real world objects (like a car, a spoon, house, etc.. ) which have properties and a particular type. In Javascript (and other programming languages), an object is one of the complex datatypes, which have a list of keys and values
eg: var car = {
	Model : 'Honda City',
	color: 'Red',
	owner: 'X1',
	yearOfManufacture: 2017
};
in the above example each item in the list is a property(e.g: Model, color, owner, year) of the object 'car'.
The object can also have functions called as methods

The property-name/ Key can be a string or a number.
eg: var age = {
	10: 'kids'
	30: 'smart and wise'
	100: 'very very experienced'
};

we use objects mostly to store data and for creating custom methods and functions
There are 2 ways we can create objects
1. Object Literals
2. Object Constructors

Via Object Literals
We just declare an object name and within {} define all the properties with its values
 var myNewEmptyObject = {}

 var book = {
	name: 'Harry Potter Book1'
	author: 'J.K. Rowling'
	blurp: 'something magical... '
 };

sayHello: function() {
	console.log('Hello There');
};


Via Object Constructors
Constructors are functions that are used for initialising new objects using the new() keyword.
set the properies via the object.propertyname notation
var book  = new Object();
book.name = 'Harry Potter Book1'
book.author = 'J.K.Rowling'

accessing properties of an object
- dot notation
- bracket notation

var book = {
	name: 'Harry Potter Book1'
	author: 'J.K. Rowling'
	blurp: 'something magical... '
 };

dot notation is the most common way we access the objects.  Most of the examples above use the dot notation
dot notation follows the object-name.key-name syntax
console.log(book.name);
console.log(book.author);

bracket notation follows the object-name[key-name] format
eg:
console.log(book['name']);
console.log(book['author']);
console.log(age[10]);
note: the property which is a number must use the bracket notation only


You can delete the properties of an object using the  'delete' keyword
e.g :
delete book.blurp // deletes the blurp property of book object



*/
