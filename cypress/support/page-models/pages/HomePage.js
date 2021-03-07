import { waitForVisible } from "../../utility/test-utility";
export default class HomePage {
  constructor() {
    this.getSignInButtonText = () => {
      waitForVisible(
        ".imdb-header__signin-text",
        5000 // search api takes more time
      );
      return cy.get(".imdb-header__signin-text");
    };
  }

  clickOnSignInButton = (logInValue) => {
    return this.getSignInButtonText().contains(logInValue).click();
  };
}
