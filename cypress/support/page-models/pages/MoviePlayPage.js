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
  }

  assertMovieTitleOnPlayPage = (movieTitle) => {
    return this.getMovieTitleOnPlayPage().should("include.text", movieTitle);
  };

  clickOnMyAccount = () => {
    return cy.get('[id="navUserMenu"]');
  };
  clickOnSignOut = () => {
    return cy.get("a.ipc-list__item.imdb-header-account-menu__sign-out");
  };
}
