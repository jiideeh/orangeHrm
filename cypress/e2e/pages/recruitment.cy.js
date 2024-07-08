export class Recruitment {
    candidatename(name){
        cy.get('.oxd-autocomplete-text-input > input').type('hey hey')
    }
    searchbtn(){
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    }
    Fromdate(date){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type(date)
    }
    todate(date){
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type(date)
    }
    close(){
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click()
    }
    manda(){

        cy.contains('Rahul').click()   
     }
    manageroptions(){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    }
    statusdropdown(){
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    }
    passed(){
        cy.contains('Interview Passed').click()
    }
}