import { waitForVisible } from "../../utility/test-utility";
export default class MoviePlayPage {
  constructor() {
    this.getMovieTitleOnPlayPage = () => {
      waitForVisible(
        '[class="title_wrapper"]',
        5000 // search api takes more time
      );
      return cy.get('[class="title_wrapper"]');
    };

    this.getMyAccount = () => {
      return cy.get('[id="navUserMenu"]');
    };

    this.getSignOut = () => {
      waitForVisible(
        '[class="ipc-list__item imdb-header-account-menu__sign-out"]',
        5000 // search api takes more time
      );
      return cy.get(
        '[class="ipc-list__item imdb-header-account-menu__sign-out"]'
      );
    };
  }

  assertMovieTitleOnPlayPage = (movieTitle) => {
    return this.getMovieTitleOnPlayPage().should("include.text", movieTitle);
  };

  clickOnMyAccount = () => {
    return this.getMyAccount().click({ force: true });
  };
  clickOnSignOut = () => {
    return this.getSignOut().click();
  };
}
