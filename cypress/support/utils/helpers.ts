// Function to start the quiz by clicking the "Start Quiz" button
export const startQuiz = (): void => {
  cy.get('button').contains('Start Quiz').click(); // Click the "Start Quiz" button
  cy.get('.quiz-question').should('be.visible'); // Ensure the first question is visible
};

// Function to answer a question by selecting a specific answer
export const answerQuestion = (answerText: string): void => {
  cy.get('button').contains(answerText).click(); // Click the answer button that contains the answerText
};

// Function to submit the quiz after answering all questions
export const submitQuiz = (): void => {
  cy.get('button').contains('Submit Quiz').click(); // Click the "Submit Quiz" button
};

// Function to check if the score is displayed after the quiz is submitted
export const checkScore = (expectedScore: number): void => {
  cy.get('.quiz-score').should('contain.text', `${expectedScore}`); // Assert the score matches the expected score
};

// Function to start a new quiz after finishing the current one
export const startNewQuiz = (): void => {
  cy.get('button').contains('Start New Quiz').click(); // Click the "Start New Quiz" button
  cy.get('.quiz-question').should('be.visible'); // Ensure the first question is visible
};
