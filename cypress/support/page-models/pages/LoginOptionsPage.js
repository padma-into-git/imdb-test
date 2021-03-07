import { waitForVisible } from "../../utility/test-utility";

export default class LoginOptionsPAge {
  constructor() {
    this.getImdbSignInOption = () => {
      waitForVisible(
        '[id="signin-options"]',
        5000 // search api takes more time
      );
      return cy.get('[id="signin-options"]');
    };

    this.getSignInButton = () => {
      waitForVisible(
        '[class="list-group-item "]',
        5000 // search api takes more time
      );
      return cy.get('[class="list-group-item "]');
    };
  }

  assertForSignInWithImdbOption = (signInValue) => {
    return this.getImdbSignInOption().each(($el, index) => {
      expect($el).to.contain(signInValue);
    });
  };

  clickOnSignInOption = () => {
    return this.getSignInButton().eq(0).click();
  };
}
