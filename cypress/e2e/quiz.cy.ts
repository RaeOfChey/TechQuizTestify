import { startQuiz, answerQuestion, submitQuiz, checkScore, startNewQuiz } from '../support/utils/helpers';

describe('Tech Quiz End-to-End Test', () => {
    beforeEach(() => {
      cy.visit('/'); // Visit the quiz page
    });

    it('should start the quiz when Start button is clicked', () => {
      startQuiz(); // Use the helper function to start the quiz
      cy.contains('What is React?').should('be.visible'); // Ensure the first question is displayed
    });

    it('should navigate through all questions and display the final score', () => {
      startQuiz(); // Start the quiz using helper
      cy.fixture('questions').then((questions) => {
        questions.forEach((q) => {
          answerQuestion(q.correctAnswer); // Answer each question using the helper
        });
      });
      checkScore(5); // Verify the score after all questions are answered
    });

    it('should allow starting a new quiz after finishing', () => {
      startQuiz(); // Start the quiz using the helper
      cy.fixture('questions').then((questions) => {
        questions.forEach((q) => {
          answerQuestion(q.correctAnswer); // Answer each question
        });
      });
      submitQuiz(); // Submit the quiz
      startNewQuiz(); // Start a new quiz after finishing the current one
      cy.contains('What is React?').should('be.visible'); // Ensure the first question of the new quiz is displayed
    });
});
