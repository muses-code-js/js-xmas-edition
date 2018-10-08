Level 3. Randomize function
===========================

  To get a random number in a particular range
  1. Random function to use for good/bad/naughty
  2. Random function to use for user key (gift)
  3. Display the Image (when we have the time)


Additional Tasks
-----------

  1. Working with image:
     -  image upload
     -  image validation (size/type/hight/width)
     -  save to local storage
     -  retrieve from local storage
  2. Ajax calls (Flickr retrieval)



  Level 1 gets the information from the user. 
  Level 2 displays part of that information to the user as a list. 
  Now lets get to the fun part of level 3.


Math.random
============

  The aim here is based on the user Inputs
   - Determine if the user was Very Good, Good or Naughty
   - Identify the gift the person asked for
   - Send the gift to the user (as an Image, not the real one !!!)

  Oh and now we are not acting as santa's but as cheeky little imps.. 
  So we are getting a bit naughty and mixing up the gifts that Santa 
  gives out. How do we mix things up... By messing with the inputs that 
  we display in the `result.html`

  First lets create a random number generator function, that would take 
  the limit as an the input and then returns any random number from 0 to 
  that limit .

  To do that, we would use JavaSript's built-in Object called `Math` which 
  as the name indicates, has properties and methods for Mathematical 
  functions and constants (e.g : Math.PI, Math.SQRT, etc). There are many 
  built in objects like that available in javascript such as Date, String, 
  Array, etc.

  For more Math functions/ constants available refer: 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math 

  TODO: For the Random number generator function, lets use the following 
  formula
    `Math.floor(Math.random() * limit) + 1;`

  Now lets get a random behaviour for the user - the three types of 
  behaviour are Very Good, Good and Naughty.
  
  TODOD: Create an object with these 3 behaviour types. (Remember Objects 
  from  Level 1 and 2 !!!). For easy access, let the key of the objects be 
  as numbers:
  
  ```
    const BehaviourList = {
       1: 'Very Good',
       2: 'Good',
       3: 'Naughty'
    }
  ```
  
  TODO: The next step is to create a function called `getRandomBehaviour()`. 
  The function should do the following:
   1. Get the random number from 0..3 (since we have 3 behaviour types, we 
   set the limit to 3) by calling the `randomNumberGenerator()` function.
   2. Using this random number as the key, get the behaviour from Behaviour 
   list e.g: `randomBehaviour =  BehaviourList[randomNumber]`.
   3. Display the Behaviour in the DOM, using the query selector for 
   `.attitude` class.

  After creating the function, lets check if this works correctly by calling 
  the function in the `<body>` section of `result.html` page using the `onLoad` 
  event.

  Yuppiee, the implementation is able to modify the behaviour of the user 
  every time the user refreshes the `result.html` page!!!

  Now that we have done the behaviour bit and its kind of fun lets mess 
  with the gifts..

  We would use the list of gifts description in the local storage (Hope 
  you haven't forgotten the local storage in level 2 !!) and use the similar 
  steps as above and get random gift.

  TODO: Lets name the function as `getRandomGift()` and this would do the 
  following:
   1. Get the random number using `getRandomNumber()` function. Note here the 
   limit should be the number of gifts in local storage, so we can use the 
   `localStorageIndex` count.
   P.S: Since we increment the `localStorgaeIndex` after adding new gift, 
   the index value would be 1 count extra, so we need to use the limit as 
   `localStorageIndex-1`
   2. This random number can be used to get the gift description at that location 
   (use the key as `user + 'randonmNo'`) in local storage.
   3. Display the `gift.description` name in DOM by using the query selector 
   `.santa-gift-text`.

  TODO: Lets check if this works correctly by calling the function in the 
  `<body>` section of `result.html` page using the `onLoad` event.

  Just displaying the behaviour and gift description is boring, so lets play 
  with some images.

  We have some images of gifts in the img/gifts folder. we would randomly display 
  one of those images and display them in the `result.html` page

  TODO: Lets create an object called `ImageUrlList` which would contain the 
  key as numbers and the value as the imageUrl with names:
  
  ```
     const imageUrlList = {
        1: 'img/gifts/goldGift.jpg',
        2: 'img/gifts/groupGift.jpeg',
        3: 'img/gifts/redGift.jpg'
     };
  ```
  
  Here again we are using numbers as key so that it would be easy to use the 
  `randomNumber` generator to get the images.

  TODO: After that, lets create a function called `getGiftImage()`. This should:
   1. Get the random number (depending on the number of images in the folder, 
   for now its 3) if you add more images, you can increment the limit accordingly.
   2. Get the image url using the random number from the `imageUrlList` i.e 
   `imageUrlList[randomNumber]`.
   3. Set the url as the source of the DOM element `.santa-gift` in `result.html`
   
  ```
     function getGiftImage() {
        const element = document.querySelector('.santa-gift');
        const randomNo = getRandomNumber(3);
        const giftImageUrl = imageUrlList[randomNo];
        element.src = giftImageUrl;
     };
  ```
  
  You can check the function, by calling it in the `onLoad` event in the `<body>` 
  section.

  Now the final Bit, We have 3 functions, but we call each one individually in 
  the DOM using the `onLoad()` event.
  
  It would be really nice if we could call all the three functions when the page 
  loads. How we can achieve it?

  One way is to call all the three functions inside another function say 
  `fillContent()` and then just call the `fillContent()` method in the `Onload()` 
  event.
  
  Go on.. give it a try..
  If all the DOM elements are loaded simultaneously.. Then everything works fine..



/////////////////////////////////////////////////////////////////////////////////

  Congratulations! You have finished the intermediate Level !
  
  Celebrate your achievement !!
  
  You could try the extra steps if you want to try more stuffs

/////////////////////////////////////////////////////////////////////////////////

