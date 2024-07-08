export class time{
    timemenu(){
        cy.get(':nth-child(4) > .oxd-main-menu-item').click()
    }
    viewrecord(){
        cy.get(':nth-child(1) > .oxd-table-row > [style="flex: 1 1 20%;"] > .oxd-table-cell-actions > .oxd-button').click()
    }
    editbtn(){
        cy.get('.oxd-button').click()
    }
    firstdate(){
        cy.contains('17').click()
        
        
    }
    secondate(){
        cy.contains('18').click()
    }
    savebtn(){
        cy.get('.oxd-button--secondary').click()
    }
    cancelbtn(){
        cy.get('.orangehrm-timesheet-footer--options > :nth-child(2)').click()
    }
}