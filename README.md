# Social-Network-API

DESCRIPTION User Story: AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

Acceptance Criteria: GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

Project Description: This was a great learning experience getting comfortable with mongoDB and Mongoose. The focus of this project was to create a full backend from scratch for a social media app including schemas, models, routes.  Express.js is used for routing, a MongoDB databse, and Mongoose ODM.

Installation: this is not an installed app, but simply a backend. One can test by first starting the server by runnign "npm run dev" in the terminal.  This will create the DB as well as start your server. You can then navigate to Mongo Compass to check your models.  To test routes we used Insomina.

Usage: Intended to be connected to a front end of some sort, for our purposes, were simply testing the backend functionality using Insomnia. Open Insomnia, create the approriate route based on CRUD, include the proper localhost path in the url. Select JSON for body and include data there as needed to see the routes work approriately.

Technology: this project used MongoDB, Express.js, Mongoose ODM, Node and Nodemon, Mongo Compass, and Insomnia.  Other helpful resources include Mongo / Mongoose documentation and of course MDN.

Licenses / Certs: no licenses or certs

Collaboration: Fellow classmates, Ted, Kris...the TAs, Zach and Justin.

Repo Link - https://github.com/PeterBookmyer/Social-Network-API

Screencastify link 1 - https://drive.google.com/file/d/1onay4Ka3G33vnWvEJntfFQgqs97pJy9p/view

Screencastify link 2 - https://drive.google.com/file/d/19nnIfDdqScIdNFiTN9qZ9RC2Y4mPBX4k/view
