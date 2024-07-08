/// <reference types="cypress"/>
describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://example.cypress.io/');
      cy.contains('contains').click()
      cy.get('#query-btn').should('contain','Button')
            .should('be.visible')
      cy.get(':nth-child(6) > :nth-child(1) > p').should('contain','We can find elements by their content using')
 
    })
  })