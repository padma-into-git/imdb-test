import { waitForVisible } from "../../utility/test-utility";

export default class LoginPage {
  constructor() {
    this.getEmail = () => {
      waitForVisible(
        '[id="ap_email"]',
        5000 // search api takes more time
      );
      return cy.get('[id="ap_email"]');
    };

    this.getPassword = () => {
      waitForVisible(
        '[id="ap_password"]',
        5000 // search api takes more time
      );
      return cy.get('[id="ap_password"]');
    };

    this.getSignInButton = () => {
      waitForVisible(
        '[id="signInSubmit"]',
        5000 // search api takes more time
      );
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
