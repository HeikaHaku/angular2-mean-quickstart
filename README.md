# Angular2MeanQuickstart

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Requirements

To get started, you need MongoDB installed or hosted somewhere, then edit <server/routes/api.js> to point to your MongoDB server, as well as the database name you intend to use for this project.

## Installation

- Either clone this project and update the Mongo Connection as mentioned above, or run these commands:
  `npm i -g angular-cli
  ng new my-project (or ng init if you're already in the project folder)
  `
  (Note, I organized the files into styles, templates, and tests folders. By default, everything gets dumped into app.)
- Then update the dependencies to your liking, and also run
  `npm i --save mongoose body-parser`

- Then make a server.js file or copy this one, and set up your server folder to your liking, and create api.js and models for the database.
