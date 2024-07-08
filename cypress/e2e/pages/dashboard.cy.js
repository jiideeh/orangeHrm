export class dashboard {
    admin(){
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    }
    resetbtn(){
        cy.get('.oxd-button--ghost').click()
    }
    searchbtn(){
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    }
    searchuser(word){
        cy.get(':nth-child(2) > .oxd-input').type(word)
    }
    userrole(){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    }
    ESS(){
        cy.contains('ESS').click()
    }
    statusclick(){
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    }
    Enable(){
        cy.contains('Enabled').click()
    }
    PIM(){
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    }
     Recruitmentmenu(){
        cy.get(':nth-child(5) > .oxd-main-menu-item').click()
     }
     myinfo(){
        cy.get(':nth-child(6) > .oxd-main-menu-item').click()
     }
}