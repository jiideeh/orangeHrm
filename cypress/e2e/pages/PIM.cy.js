export class pim {
    employeeid(name){
        cy.get(':nth-child(2) > .oxd-input').type(name)
    }
    searchbtn(){
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    }
    includes(){
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    }
pastemployee(){
    cy.contains('Past Employees Only').click()
}
jobTitle(){
    cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
}
AutomationTester(){
    cy.contains('Automaton Tester').click()
}
}