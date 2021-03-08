import { waitForVisible } from "../../utility/test-utility";

export default class LoginPage {
  constructor() {
    this.getEmail = () => {
      return cy.get('[id="ap_email"]');
    };

    this.getPassword = () => {
      return cy.get('[id="ap_password"]');
    };

    this.getSignInButton = () => {
      return cy.get('[id="signInSubmit"]');
    };
  }

  enterEmailInput = (emailValue) => {
    return this.getEmail().type(emailValue);
  };

  enterPasswordInput = (passwordValue) => {
    return this.getPassword().type(passwordValue);
  };

  clickOnSignInButton = () => {
    return this.getSignInButton().click();
  };
}
