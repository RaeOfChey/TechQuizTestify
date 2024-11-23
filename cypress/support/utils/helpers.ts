// Function to start the quiz by clicking the "Start Quiz" button
export const startQuiz = (): void => {
  cy.get('button').contains('Start Quiz').click(); // Click the "Start Quiz" button
  cy.get('h2').should('be.visible'); // Ensure the first question is visible
};

// Function to answer a question by selecting a specific answer
export const answerQuestion = (answerText: string): void => {
  cy.get('button').contains(answerText).click(); // Click the answer button that contains the answerText
};

// Function to check if the score is displayed after the quiz is completed
export const checkScore = (expectedScore: number): void => {
  cy.contains('Your score:').should('contain.text', `${expectedScore}`); // Assert the score matches the expected score
};

// Function to start a new quiz after finishing the current one
export const startNewQuiz = (): void => {
  cy.get('button').contains('Take New Quiz').click(); // Click the "Take New Quiz" button
  cy.get('h2').should('be.visible'); // Ensure the first question is visible
};