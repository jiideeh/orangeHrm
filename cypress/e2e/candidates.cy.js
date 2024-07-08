/// <reference types="cypress"/>
import { LoginPage } from "./pages/loginpage.cy";
import { dashboard } from "./pages/dashboard.cy";
import { pim } from "./pages/PIM.cy";
import { Recruitment } from "./pages/recruitment.cy";
var loginpage = new LoginPage()
var dashboardpage = new dashboard()
var RecruitmentList = new Recruitment()
var Pim = new pim()
describe('Recruitment', () => {
  
    
    it('search candidate by name', () => {
        
      
     loginpage.loginfn()
     cy.wait(1000)
     dashboardpage.PIM()
    dashboardpage.Recruitmentmenu()
    cy.wait(2000)
    RecruitmentList.candidatename()
    RecruitmentList.searchbtn()
    
 
    })
    it('validate search by date of application', () => {
        
      
      loginpage.loginfn()
      cy.wait(1000)
      dashboardpage.PIM()
     dashboardpage.Recruitmentmenu()
     cy.wait(2000)
      RecruitmentList.Fromdate('2024-20-03')
      RecruitmentList.todate('2024-07-04')
      RecruitmentList.close()
      RecruitmentList.searchbtn()
     
  
     })
     it('validate search by hiring manager', () => {
        
      
      loginpage.loginfn()
      cy.wait(1000)
      dashboardpage.PIM()
     dashboardpage.Recruitmentmenu()
     cy.wait(2000)
      RecruitmentList.manageroptions()
      cy.wait(3000)
      RecruitmentList.manda()
      RecruitmentList.searchbtn()
     
  
     })
     it('search for candidates who passed', () => {
        
      
      loginpage.loginfn()
      cy.wait(1000)
      dashboardpage.PIM()
     dashboardpage.Recruitmentmenu()
     cy.wait(2000)
      RecruitmentList.statusdropdown()
      cy.wait(3000)
      RecruitmentList.passed()
      RecruitmentList.searchbtn()
     
  
     })
     
  })