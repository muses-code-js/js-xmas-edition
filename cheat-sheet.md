## Regular expressions (RegExp): 
  a way to describe patterns in string data. They form a small, separate 
  language that is part of JavaScript and many other languages and tools. 
  RegExps are a powerful tool for inspecting and processing strings. 
  Properly understanding regular expressions will make you a more effective 
  programmer.

## Events: 
  there is different types of events - browser, mouse, keyboard, focus 
  events. It is a signal from related source that something has happened.

## Event handlers: 
  They are JavaScript code that are not added inside the `<script>` tags, but 
  rather, inside the html tags, that execute JavaScript when something 
  happens, such as pressing a button, moving your mouse over a link, submitting 
  a form etc.
  Example - `onClick` is an event handler:

  ```
    <button name="submit" onclick="validateForm(event)">
       Send your letter to Santa
    </button>
  ```
  More on event handlers you can read here: 
  http://www.javascriptkit.com/javatutors/event1.shtml

## Event.preventDefault:
  Prevents default behaviour of the events.

## Refactoring:
  is the process of restructuring existing computer code - changing the 
  factoring - without changing its external behavior. Refactoring improves 
  nonfunctional attributes of the software.
 
## Objects: 
  stand-alone entities that have properties/type and functions

## Constructors: 
  function that creates and initializes an object.The 'new' operator is used 
  to create an instance of an object

## Dot-notation: 
  uses dot operator '.'  to access the properties of an object

## Bracket-notation: 
  uses the "`[]`" operator to access the properties of an object
  
## Callback:
  A function that we pass inside of another function as an argument
  Example:

  ```
  const a = ['a', 'b', 'c'];
  
  a.forEach(function(element) {
      console.log(element);
  });
  ```

## Local storage: 
  function which allows the web pages to store information locally on to the 
  client's web browser using key-value notation

## Serialize an object : 
  converting an object to a string format. JSON.stringify() function is used 
  to serialize an object

## Deserialize: 
  converting a string to an object. JSON.parse() function is used to deserialize 
  an object
  
## JSON:
  (JavaScript Object Notation) is a lightweight data-interchange format. It 
  is easy for humans to read and write. It is easy for machines to parse and 
  generate. It is a way to store information in an organized, easy-to-access manner.

## Math:
  The JavaScript Math object allows you to perform mathematical tasks on numbers.
  It has properties and methods for mathematical constants and functions. 
  Pi number, calculate sin, cos, random etc.
  
## AJAX:
  (Asynchronous JavaScript and XML) With it you can:
  - Update a web page without reloading the page
  - Request/receive data from a server - after the page has loaded
  - Send data to a server - in the background
  
## Asynchronous JavaScript
  Use callbacks to run functions asynchronously. 
