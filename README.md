# Angular2 MEAN Quickstart [![Build Status](https://travis-ci.org/HeikaHaku/angular2-mean-quickstart.svg?branch=master)](https://travis-ci.org/HeikaHaku/angular2-mean-quickstart)

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Requirements

To get started, you need MongoDB installed or hosted somewhere, then edit [server/models/user.js](https://github.com/HeikaHaku/angular2-mean-quickstart/blob/master/server/models/user.js) to point to your MongoDB server, as well as the database name you intend to use for this project.

## Installation

- Either clone this project and update the Mongo Connection as mentioned above, or run these commands:
  
  ```node
  npm i -g angular-cli
  ng new my-project
  ```
  If you're already in the project folder, you can type `ng init` instead of `ng new my-project`.
  
  (Note, I organized the files into styles, templates, and tests folders. By default, everything gets dumped into app.)
- Then update the dependencies to your liking, and also run:
  
  ```node
  npm i --save mongoose body-parser
  ```

- Then make a server.js file or copy this one, and set up your server folder to your liking, and create api.js and models for the database.

## Running the server

Simply type `npm run start` or simple `npm start` to start the server. It will then serve your angular project as normal, but the /api route will be mapped to the back-end you've set up.

## Interacting with the back end.
Coming Soon. (With Examples.
