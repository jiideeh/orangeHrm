export class profile{

    nickname(){
        cy.get(':nth-child(1) > .oxd-form > :nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('jide')
    }
    driverslicense(){
        cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('jide6770wma')
    }
    calenderselect(){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click()
    }
    nationality(){
        cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    }
    Nigerian(){
        cy.contains('Nigerian').click()
    }
    savebtn(){
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
    }
    savebtn2(){
        cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click()
    }
    bloodtype(){
        cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    }
    oplus(){
        cy.contains('O+').click()
    }
    contactdetails(){
        cy.get(':nth-child(2) > .orangehrm-tabs-item').click()
    }
    street1(){
        cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('plot 381a')
    }
    street2(){
        cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('titilayo adedoyin')
    }
    city(){
        cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('berger')
    }
    state(){
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('lagos')
    }
    country(){
        cy.get('.oxd-select-text--after > .oxd-icon').click()
    }
   mobile(){
    cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('08112907097')
   }
   savebtn3(){
    cy.get('.oxd-form-actions > .oxd-button').click()
   }
   Nigeria(){
    cy.contains('Nigeria').click()
   }
   
   attachment(){
    cy.get('.orangehrm-action-header > .oxd-button').click()
   }
   selectfile(){
    cy.get('.oxd-file-button').attachFile()
   }
   comment(){
    cy.get('.oxd-textarea').type('upload')
   }
   savebtn4(){
    cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button--secondary').click()
   }
}