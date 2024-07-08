/// <reference types="cypress"/>
import { LoginPage } from "./pages/loginpage.cy";
import { time } from "./pages/time.cy";
var Timepage = new time()

var loginpage = new LoginPage()

describe('view user time', () => {
  
    
    it('view time', () => {
        
      
     loginpage.loginfn()
     cy.wait(1000)
     Timepage.timemenu()
     Timepage.viewrecord()
     
 
    })

    it('valide edit time function', () => {
        
      
      loginpage.loginfn()
      cy.wait(1000)
      Timepage.timemenu()
      Timepage.viewrecord()
      cy.wait(2000)
      Timepage.editbtn()
      Timepage.firstdate()
      Timepage.secondate()
      cy.wait(2000)
      Timepage.savebtn()

      
  
     })
     it('valide cancel edit function', () => {
        
      
      loginpage.loginfn()
      cy.wait(1000)
      Timepage.timemenu()
      Timepage.viewrecord()
      cy.wait(2000)
      Timepage.cancelbtn

      
  
     })
   
  })