import { waitForVisible } from "../../utility/test-utility";
export default class MoviePlayPage {
  constructor() {
    this.getMovieTitleOnPlayPage = () => {
      return cy.get('[class="title_wrapper"]');
    };

    this.getMyAccount = () => {
      return cy.get('[id="navUserMenu"]');
    };

    this.getSignOut = () => {
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
