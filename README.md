# Description

This is a blog simple page application.
In this project is used the SoftUni practice server. 

## Technologies

 - HTML,
 - CSS 
 - React
 - JavaScript

 ## Installation

 ### Project

 - To install the required dependencies use the "npm" package manager - npm i
 - To run the project use the "npm" package manager - npm start

 ### Server

 - Go to the server folder - cd .\server\
 - To start the server - node .\server.js

 ### Note :
 Note: the application will be launched on a local server - http://localhost:3000/

## Components

### Homepage

A custom homepage with image boxes connected to different pages.

### Blog

Renders a list of the existing blog posts

### Auth

Login, Register and Logout. 
Logout sends a request to the server to logout the user and then redirects the user to the homepage. 

### Create

A page where the user (only logged in users) can create a new post.

### Edit

Similar to the Create component but instead all fields are filled with the post's relevant values and updates them. This action can be done only by the author of the particular post!

### Delete

This component does NOT render anything. This action can be done only by the author of the particular post!

### Author

This components renders only the posts added by the current user.

### Details 

Renders all the details for the selected post.

### Footer

Renders the footer of the application.

### Header

Renders the header of the application and the navigation menu. 

#### Navigation menu

Navgation menus that render, depending on if the user is logged in or logged out.

