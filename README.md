# Social Network API 

## Description

Social media startups require an application that can handle large amounts of unstructured data using a NoSQL database. This is why I have created an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Using Express.js for routing, a MongoDB database, and the Mongoose ODM. This application also uses npm package date-fns for date formatting. Users are able to create, read, update and delete data in the application including adding and deleting thoughts and reactions. This helps create fast and effecient database queries and allows a social media startup to begin acquiring a large amount of users in a short amount of time.

## Installation

To start the social network API server;

1. Fork and clone repository from the GitHub link provided. 
2. In your code editor open the file in the integrated terminal. 
3. Run the command `npm install` to install required dependencies. 
4. Then type `npm start` to start the social network API server. 
5. The server will be running on `http://localhost:3001/`. 
6. Test the application using Insomnia or Postman. 

## Usage

To create, read, update, and delete data follow these steps; 

1. Use `http://localhost:3001/` and the `/api` endpoint to access the data in the application. 

2. Perform a GET to `/api/users` to see all users. Perform a GET to `/api/users/:id` to get a user by id. 

3. Perform a POST to `/api/users` to create a new user. Perform a PUT/DELETE to `/api/users/:id` to update or delete a user by id. 

4. Access `/api/users/:userId/friends/:friendId` to POST to add a new friend to a user's friend list, or DELETE to remove a friend from a user's friend list. 

5. Using `/api/thoughts` you can GET all thoughts, GET to get a single thought by its _id, POST to create a new thought, PUT to update a thought by its _id and DELETE to remove a thought by its _id. 

6. Access `/api/thoughts/:thoughtId/reactions` and POST to create a reaction stored in a single thought's reactions array field. DELETE to pull and remove a reaction by the reaction's reactionId value. 

![alt text](assets/images/screenshot.png)

## Credits

University of Utah Coding Bootcamp Instructor and Teaching Assistants. Mongoosejs documentation. NPM documentation on date-fns. MongoDB documentation. Express.js documentation. MDN Web Docs. 

## License

MIT License

Copyright (c) [2024] [ScottRutherford]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose Badge](https://img.shields.io/badge/Mongoose-800?logo=mongoose&logoColor=fff&style=for-the-badge)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

## Questions

Click [here](https://github.com/ScottGCode) to visit my GitHub profile.

Email for questions: scottrutherfords@gmail.com 
