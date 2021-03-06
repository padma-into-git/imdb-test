/// <reference types = "Cypress" />
import { Page, PageObject } from "../../support/page-models/pages/factory/Page";

const homePage = PageObject(Page.HOME_PAGE);
const loginOptionsPage = PageObject(Page.LOGIN_OPTIONS_PAGE);
const loginPage = PageObject(Page.LOGIN_PAGE);
const moviesSearchListPage = PageObject(Page.MOVIES_SEARCH_LIST_PAGE);
const moviePlayPage = PageObject(Page.MOVIE_PLAY_PAGE);

var movieTitle, logInValue, signInValue, emailValue, passwordValue;

describe("End to End Testing", function () {
  before(function () {
    cy.fixture("config").then(function (data) {
      this.data = data;
      cy.visit(this.data.TEST_URL);
    });
    cy.fixture("user-data").then(function (values) {
      this.values = values;
      logInValue = this.values.logInValue;
      signInValue = this.values.sigInValue;
      emailValue = this.values.email;
      passwordValue = this.values.password;
      movieTitle = this.values.movieTitle;
    });
  });

  it("Sign In to IMDB", function () {
    homePage.clickOnSignInButton().contains(logInValue).click();
    loginOptionsPage.assertForSignInWithImdbOption().each(($el, index) => {
      expect($el).to.contain(signInValue);
    });
    loginOptionsPage.clickOnSignInOption().eq(0).click();
    loginPage.enterEmailInput().type(emailValue);
    loginPage.enterPasswordInput().type(passwordValue);
    loginPage.clickOnSignInButton().click();
  });

  it("Search a Movie & Watch it", function () {
    moviesSearchListPage.searchForAMovie().type(movieTitle);
    moviesSearchListPage.waitForSearchResultsToLoad();
    moviesSearchListPage.assertForMovieTitle().each(($el, index) => {
      expect($el).to.contain(movieTitle);
    });
    moviesSearchListPage.clickOnTheFirstMovieOnList().click();
    moviePlayPage
      .assertMovieTitleOnPlayPage()
      .should("include.text", movieTitle);
  });

  it("Sign out of IMDB", function () {
    moviePlayPage.clickOnMyAccount().click({ force: true });
    moviePlayPage.clickOnSignOut().click();
  });
});
