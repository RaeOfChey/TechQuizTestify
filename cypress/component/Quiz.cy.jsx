import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';  // Adjust path as needed

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions', { fixture: 'questions.json' }).as('getQuestions');  // Mock the API request
  });

  it('should render the quiz and allow user to interact with it', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();  // Start the quiz
    // Add assertions or interactions here
    cy.contains('What is React?').should('be.visible');
  });

  it('should show the next question after an answer', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();  // Start the quiz
    cy.get('button').contains('A library').click();  // Answer first question
    cy.contains('What does MERN stand for?').should('be.visible'); // Check if the next question appears
  });

  it('should display the score at the end', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();  // Start the quiz

    // Mock answers (use fixture answers or hardcoded expected answer text)
    cy.get('button').contains('A library').click();
    cy.get('button').contains('Database').click();
    cy.get('button').contains('React').click();
    cy.get('button').contains('MongoDB').click();

    // Assert completion
    cy.contains('Quiz Completed').should('be.visible');
    cy.contains('Your score:').should('be.visible');
  });
});
