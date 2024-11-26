# TechQuizTestify

### Status: In Progress

![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)

## Table of Contents
1. [Description](#description)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Walkthrough](#walkthrough)
6. [Tools and Technologies](#tools-and-technologies)
7. [Dependencies and Installs](#dependencies-and-installs)
8. [License](#license)
9. [Contributing](#contributing)
10. [Tests](#tests)
11. [Questions](#questions)

## Description
TechQuizTestify is a MERN stack application that delivers a dynamic, quiz-taking experience for aspiring developers. Users can test their tech knowledge by answering randomized questions, receive a score, and start new quizzes. Cypress has been integrated to ensure robust component and end-to-end test coverage.

## Features
- Randomized tech quiz with ten questions.
- Real-time feedback on scores at the end of the quiz.
- Option to restart the quiz after completing it.
- Comprehensive testing implemented with Cypress for enhanced reliability.

## Installation
To use the application, follow these steps:

- Step 1: Clone the repository.
- Step 2: Navigate to the project directory by typing `cd TechQuizTestify`.
- Step 3: Install the required dependencies by running `npm install`.
- Step 4: Install the required dependencies for both the client and server.
- Step 5: Create a .env file in the server directory and configure the required environment variables.

## Usage
To start the application, run the following command: `npm run develop`.

Users can navigate to the browser to take the quiz:
- Start Quiz: Click the "Start" button to begin.
- Answer Questions: Respond to each question as they appear.
- View Score: Review your score after completing all questions.
- Restart Quiz: Begin a new quiz session after completion.

## Walkthrough
A complete walkthrough video demonstrating the application, its functionality, and the process of invoking it from the command line can be found at the following link: https://drive.google.com/file/d/1FbiWMFAtCyR2_u4YwtChClbhrKEgRhHa/view?usp=sharing

## Tools and Technologies
**Programming Language**:
- TypeScript

**Libraries & Frameworks**:
- React
- Express
- Cypress

**Development Environment**:
  - Node.js
  - MongoDB Atlas

## Dependencies and Installs

**NPM Packages**:
- `cypress` - A robust testing framework for component and end-to-end tests.
- `react` - Core framework for the front-end application.
- `express` - Server-side framework for handling API requests.
- `mongoose` - ODM for MongoDB, managing schema and data validation.

## License
This project is licensed under the MIT License, which allows you to freely use, modify, and distribute this software, provided proper attribution is given.

## Contributing
This project is part of a coding bootcamp assignment and is not open for contributions. To comply with the course requirements, I must complete this project individually without outside assistance. Therefore, pull requests, issues, or other contributions will not be accepted. Thank you for understanding!

## Tests
This project uses Cypress for both component and end-to-end testing:
- Component tests are located in cypress/component/Quiz.cy.jsx.
- End-to-end tests are located in cypress/e2e/quiz.cy.js.

To run the tests, use `npm run test`.

## Questions
If you have any questions about the repository, feel free to reach out by opening an issue or contacting me directly at cheyennaraelynn@gmail.com You can also find more of my work on GitHub at https://github.com/RaeOfChey.
