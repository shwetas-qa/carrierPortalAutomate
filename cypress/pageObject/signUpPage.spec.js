/// <reference types="Cypress" />

//test data file location
const testData = require('../testData/signUpData.json');

const firstname="#firstname"
const lastname="#lastname"
const phone="#phone1"
const email="#email"
const password="#password"
const confirmPassword="#confirm_password"
const companyName="#carrier_name"
const homeLocation="input[placeholder='Type the name of a city or zipcode']"
const selectSecondOption="div#react-autowhatever-1 li#react-autowhatever-1--item-1"
const docketNumber="#mui-component-select-docket_type"
const selectDocket ="[data-value='MC Number']"
const mcNumber="#mc_number"
const submitButton=".MuiButton-label"
const successMsg=".jss76"
const okayBtn=".MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root > .MuiButton-label"



export const newSignUp = ()=> {


        cy.visit(Cypress.config().carrierPortalQA);

        cy.get(firstname).type(testData.firstname);

        cy.get(lastname).type(testData.lastname);

        cy.get(phone).type(testData.phoneNumber);

        cy.get(email).type(testData.email);

        cy.get(password).type(testData.password);

        cy.get(confirmPassword).type(testData.confirmPassword);

        cy.get(companyName).type(testData.companyName);

        cy.get(homeLocation).type(testData.homeLocation)
        .get(selectSecondOption).click();

        cy.get(docketNumber).click().get(selectDocket).click();

       cy.get(mcNumber).type(testData.docketNumber);

       cy.get(submitButton).click().wait(16000);

       cy.get(successMsg).should('have.text','Please check your email to verify your account');

       cy.get(okayBtn).click();
       
    }
    
  