import { waitForVisible } from "../../utility/test-utility";

export default class MoviesSearchListPage {
  constructor() {
    this.getSearchMovieText = () => {
      return cy.get("#suggestion-search");
    };

    this.getMoviesList = () => {
      waitForVisible(
        ".react-autosuggest__suggestions-list.anim-enter-done",
        10000 // search api takes more time
      );
      return cy.get(".react-autosuggest__suggestions-list.anim-enter-done");
    };

    this.getFirstMovieOnList = () => {
      waitForVisible(
        '[id="react-autowhatever-1--item-0"]',
        5000 // search api takes more time
      );
      return cy.get('[id="react-autowhatever-1--item-0"]');
    };
  }

  assertSuccessfulSignIn = () => {
    return cy.get(".navbar__user-name");
  };

  searchForAMovie = (movieTitle) => {
    return this.getSearchMovieText().type(movieTitle);
  };

  assertForMovieTitle = (movieTitle) => {
    return this.getMoviesList().each(($el, index) => {
      expect($el).to.contain(movieTitle);
    });
  };

  clickOnTheFirstMovieOnList = () => {
    return this.getFirstMovieOnList().click();
  };
}
