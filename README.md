# Ticket Service

This project was developed in Angular v10 and demostrates the Ticket generation demo

## Setup & development

Install the `package.json` dependencies

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Unit Test Instrument

Uses babel-loader and babel-plugin-istanbul to instrument the source code of the application. Refer the loader configuration [here](https://github.com/kishok/ticket-coupon/blob/11cfe93a40c1ffaa5f0b10d138e1bfb17909e5b6/cypress/plugins/cy-ts-preprocessor.js#L12) 

## Running unit tests

### Headed mode
Run `npm run cy:unit:open` to execute the unit test of Ticketing Service.

### Headless mode
Run `npm run cy:unit:run` to execute the unit test of Ticketing Service.