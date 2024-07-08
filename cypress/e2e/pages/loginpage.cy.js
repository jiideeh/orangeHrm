 export class LoginPage{
    username(){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin2')
    }
    password(){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    }
    loginbtn(){
        cy.get('.oxd-button').click()
    }
    username2(){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
        type('Admin')
    }
    loginfn(){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()

    }
}
