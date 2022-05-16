# RESTful API Example

A super super watered down boiler plate to start a node server. </br>
This project is extremely opinionated. </br>
I have been using Node and JS for nearly 10 years now. </br>
I know what works, what doesn't, and what adds more time to development.

## Install
```bash
npm install
npm install nodemon
```
then
```bash
cd src
nodemon
```

## Test routes
These routes are for testing and demonstration.
```http request
http://localhost:3006/api/v1/groups
http://localhost:3006/api/v1/users
http://localhost:3006/api/v1/users/33
```

## Joi Validation
This project using Joi for validation. I used to check validation on every single controller by hand. </br>
But thanks to Joi, this is now more modular has a ton of features. </br>
**There is one example of this in /validations/user.validation.js**

## Other notes
No docker, no DB, no auth. Just a basic node server structure.
I may include auth with mongo and passport later on.

## Test Driven Development
Stop wasting time with jest and unit testing. Spend time crafting all of your controllers, services, and classes. </br>
No one likes a lazy dev. Don't send back generic errors "An error has occurred". Make everything you do mean something and
take advantage of nodemon and postman. Test every endpoint while you are developing it and catch ALL inputs sent from the
client. JOI package is a fantastic way to do this!

## IDE
Stop using Visual Studio Code and start using webstorm. </br>
This project does not need husky, prettier, or lint. </br>
Webstorm will take care of all of this for you.

## My style = my opinion
Programing is 80% opinionated. Don't get caught up in pissing matches over what you would do or what I would do.
This is not a strict language. That is the beauty of javascript. </br>
</br>
There are no set standards with this repo. </br>
import, require, whatever it takes to get the job done. </br>
importing is more primarily for front ends anyways.
</br>
</br>
Javascript is supposed to be FUN!</br>
Leave your OOP ways behind you with JAVA, C#, or any other
language you are coming from.