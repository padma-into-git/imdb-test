import { waitForVisible } from "../../utility/test-utility";
export default class HomePage {
  constructor() {
    this.getSignInButtonText = () => {
      return cy.get(".imdb-header__signin-text");
    };
  }

  clickOnSignInButton = (logInValue) => {
    return this.getSignInButtonText().contains(logInValue).click();
  };
}
