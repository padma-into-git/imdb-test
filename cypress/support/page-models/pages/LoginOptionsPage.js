import { waitForVisible } from "../../utility/test-utility";

export default class LoginOptionsPAge {
  constructor() {
    this.getImdbSignInOption = () => {
      return cy.get('[id="signin-options"]');
    };

    this.getSignInButton = () => {
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
