
import { newSignUp } from "../../pageObject/signUpPage.spec.js";


describe ('newCarrier',()=>{

    it('navigate to CP',function(){
        cy.visit(Cypress.config().carrierPortalQA)

    })

    it('new carrier signup', function(){

        newSignUp();
    })
})