// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  // concatenation
  it('should maintain a subtotal when entering numbers', () => {
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('.display').should('contain', '2021')
  })

  //maintain running total
  it('should maintain a running total when calculating', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number7').click();    
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '10');
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '15');
  })

  // add
  it('should perform addition and display correct answer', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '4');
  })

  // subtract
  it('should perform subtraction and display correct answer', () => {
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '0');
  })

  // multiply
  it('should perform multiplication and display correct answer', () => {
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '4');
  })

  // divide
  it('should perform division and display correct answer', () => {
    cy.get('#number2').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1');
  })


  // multiple operations
  it('should be able to perform multiple operations', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator_subtract').click();
    cy.get('.display').should('contain', '4');
    cy.get('#number1').click();    
    cy.get('#operator_multiply').click();
    cy.get('.display').should('contain', '3');
    cy.get('#number2').click();
    cy.get('#operator_divide').click();
    cy.get('.display').should('contain', '6');
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '3');
  })


  // display negative
  it('should be able to display numbers as negative', () => {
    cy.get('#number6').click();
    cy.get('#operator_subtract').click();
    cy.get('#number8').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-2');
  })

  // float
  it('should be able to show numbers to decimal places', () => {
    cy.get('#number7').click();
    cy.get('#operator_divide').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2.33');
  })

  //large numbers
  it('should show 100000 million x 10000 million as 1e+22', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1e+22');
  })

  // show error when divided by 0
  it('should show error if dividing by 0', () => {
    cy.get('#number9').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'error');
  })
})








