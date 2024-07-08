/// <reference types="cypress"/>
describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://www.facebook.com');
      cy.contains('Allow all cookies').click()
      cy.wait(3000)
      cy.get('.signup_box_content > ._42ft').click({force: true})
      cy.get('[data-testid="cookie-policy-manage-dialog-accept-button"]').click()
      cy.get('[data-testid="royal_email"]').type('shodeyibabajide@yahoo.com')
      cy.get('[data-testid="royal_login_button"]')
      cy.get('.uiHeaderTitle').should('contain','your request couldnt be processed')
    })
  })