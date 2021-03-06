export default class MoviesSearchListPage {
  searchForAMovie = () => {
    return cy.get("#suggestion-search");
  };

  waitForSearchResultsToLoad = () => {
    return cy.wait(500);
  };

  assertForMovieTitle = () => {
    return cy.get(
      '[class="react-autosuggest__suggestions-list anim-enter-done"]'
    );
  };

  clickOnTheFirstMovieOnList = () => {
    return cy.get('[id="react-autowhatever-1--item-0"]');
  };
}
