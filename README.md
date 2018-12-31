# MLB-Experience
https://lit-citadel-29764.herokuapp.com/login

MLB Experience
  MLB Experience is a Major League Baseball, Full-Stack web application which utilizes the MLB API to render baseball and player statistics on the page.

Getting Started
  You can run this application using your local host but I reccomend following this deployment link to Heroku https://lit-citadel-29764.herokuapp.com/login

Prerequisites
  The dependencies are as follows: 

  "dependencies": {
    "bcryptjs": "^2.4.3",
    "express": "^4.16.4",
    "mongoose": "^5.4.0",
    "path": "^0.12.7"
  }
If you use the above Heroku link there is no need to install these dependencies.


Using the Site
  The home page is a login page. The user will create a username and password and click register. The password is stored on a MongoDB database in a user collection. the password is encrypted using BCrypt. Please don't enter any personal information as this site isn't secure. The user will be directed to a search page where they can click on the search player link on the navbar.

  The user can enter the last name of a current or former MLB baseball player and it will render a card with some general information. The search team function is currently under construction. The login feature isn't fully functional. If there are issues the user can bypass this by using the html route /search.


Built With:

*MongoDB
*Express.js
*Node.js
*HTML5
*CSS3
*JavaScript
*jQuery
*Bootstrap
*BCrypt
*MLB API (https://appac.github.io/mlb-data-api-docs/).

Authors
Alex Watkins

Acknowledgments
Thanks to my Brother Nick Watkins for assisting with the login feature as well as Mike Zevitas
