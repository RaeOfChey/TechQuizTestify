import { mount } from 'cypress/react18';
import Quiz from '../../client/src/components/Quiz';  // Adjust path as needed

describe('Quiz Component', () => {
  beforeEach(() => {
    // Mocking the API request to return a fixture for questions
    cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');  
  });

  it('should render the quiz and allow user to interact with it', () => {
    mount(<Quiz />);

    // Start the quiz
    cy.get('button').contains('Start Quiz').click();
    
    // Wait for the API call to complete
    cy.wait('@getQuestions');

    // Check that the first question is visible
    cy.get('h2', { timeout: 10000 }).contains('What is React?').should('be.visible');
  });

  it('should show the next question after an answer', () => {
    mount(<Quiz />);

    // Start the quiz
    cy.get('button', { timeout: 10000 }).contains('Start Quiz').click();  
    
    // Wait for the API call to complete
    cy.wait('@getQuestions');

    // Log the current state of the DOM
    cy.get('body').then(($body) => {
      console.log('Current Body Text:', $body.text()); // Log the text content of the body
    });

    // Answer the first question
    cy.get('button', { timeout: 10000 }).contains('A library').click();  

    // Check that the next question is visible
    cy.get('h2').contains('What does MERN stand for?').should('be.visible'); 
  });

  it('should display the score at the end', () => {
    mount(<Quiz />);

    // Start the quiz
    cy.get('button').contains('Start Quiz').click();  
    
    // Wait for the API call to complete
    cy.wait('@getQuestions');
    cy.wait(500);

    // Log the current state of the DOM
    cy.get('body').then(($body) => {
      console.log('Current Body Text:', $body.text()); // Log the text content of the body
    });

    // Mock answers (can be updated based on fixture or expected answers)
    cy.get('button', { timeout: 10000 }).contains('A library').click(); // Answer 1
    cy.get('button').contains('Mongo, Express, React, Node').click(); // Answer 2

    // After completing all questions, check for the completion message
    cy.contains('Quiz Completed').should('be.visible');
    
    // Check that the score is displayed
    cy.contains('Your score:').should('be.visible');
  });
});