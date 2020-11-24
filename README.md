# Redux Feedback Loop

Duration: Weekend Project

Redux Feedback Loop is a reflection/feedback form modeled after Prime Academy's daily feedback system. Data is collected over 4 views. In a separate review page, the current feedback values are displayed. When all steps are complete, the submit button saves your feedback to the database.

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database

Create a new database called `nibbl` and create tables using the queries in the
database.sql file

If you would like to name your database something else, you will need to change `nibbl` to the name of your new database name in `server/modules/pool.js`

## Setup Instructions

- Run `npm install`
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Directory Structure

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `server/` contains the Express App

## Using the app

- Once on `localhost:3000`, you will be directed to the welcome page, click the
  "yes" button to proceed to the survey
- Follow the prompts on each page and be sure to fill out all required fields
- Be sure to double check your answers when you get to the review page
- Once you're content with your answers, click the submit button
- You will be brought to the submission page, where you can choose to leave new
  feedback if you'd like.

## Acknowledgement

Thanks to Prime Digital Academy in Minneapolis who equipped and helped me to make this application a reality.
