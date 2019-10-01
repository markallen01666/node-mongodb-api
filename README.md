# node-mongodb-api
A simple company info API built using Node, Express, MongoDB Atlas, and Mongoose 

This app presents a simple API that returns organisational data for a fictional company in JSON format. The data is held in a  database comprised of two collections - "employees" and "offices". Data can be retrieved using the following URIs...

- ***https://node-mongodb-api-mawd.herokuapp.com/employees*** ...returns information about company staff (such as their name, email address and office location)
- ***https://node-mongodb-api-mawd.herokuapp.com/offices*** ...returns information about company offices in the UK (such as buidling name and postcode)

The data is held in a nosql MongoDB database hosted on MongoDB Atlas. The app code is built using Node, Express, and Mongoose hosted on Heroku.



***Employees Schema:***
```
    staffId: {
      type: String,
      required: true,
      unique: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    office: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    Telephone: {
      type: String
    },
    email: {
      type: String
    }
 ```
  
  ***Offices Schema:***
  ```
    office: {
      type: String,
      required: true,
      unique: true
    },
    building: {
      type: String
    },
    number: {
      type: String
    },
    street: {
      type: String,
      required: true
    },
    town: {
      type: String,
      required: true
    },
    postcode: {
      type: String,
      required: true
    }
 ```
