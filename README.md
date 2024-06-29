# Overview
**UserManagement is a web application built using Angular 17 as the frontend framework ,and Tailwind CSS & Material UI for style , and Node.js with Express.js as the backend framework. The application uses Sequelize as the Object-Relational Mapping (ORM) tool to interact with the database.**

# Technology Stack
**Frontend: Angular 17
Style: Tailwind CSS & Material UI
Backend: Node.js with Express.js
ORM: Sequelize
Database: MySQL**

# Features
**User Add by Admin and login functionality
User profile management
Role-based access control (RBAC)**

# Getting Started

# Prerequisites
**Node.js installed on your system
Angular CLI installed on your system
A code editor or IDE of your choice**

# Running the Application
**Clone the repository: git clone https://github.com/[your-username]/UserManagement.git
Install the dependencies: npm install (in both the frontend and backend directories)
Install nodemon in backend directories.
Create one Db(schema ex: usermanagement) in mysql database
Provide db information like db name,user, password, host in Database/connection.js
Start the backend server: npm start (in the backend directory)
Backend server will run at port 8080
Call http://localhost:8080/api/auth/register api in postman and prove details 
{
    "fullName": "Rajat",
    "userName": "rajat@gmail.com",
    "password": "123456", // password atleast 6 digit
    "mobile":"9876543210"
 }
 Start the frontend server: ng serve (in the frontend directory)
 Open the frontend application in your web browser: http://localhost:4200
 And provide admin uder details and try to login once login you can add, update and delete user**




# Rate this project
**If you like this project, please consider rating it:
:star: :star: :star: :star: :star: (5/5)**
# Contributing
**Contributions are welcome! If you'd like to contribute to the UserManagement application, please fork the repository and submit a pull request.**
