export default class LoginPage {
  enterEmailInput = () => {
    return cy.get('[id="ap_email"]');
  };

  enterPasswordInput = () => {
    return cy.get('[id="ap_password"]');
  };

  clickOnSignInButton = () => {
    return cy.get('[id="signInSubmit"]');
  };
}
