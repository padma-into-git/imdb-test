import { Page, PageObject } from "../../support/page-models/pages/factory/Page";

var movieTitle,
  logInValue,
  signInValue,
  emailValue,
  passwordValue,
  userNameValue;
var homePage, loginOptionsPage, loginPage, moviesSearchListPage, moviePlayPage;

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
      userNameValue = this.values.userName;
      emailValue = this.values.email;
      passwordValue = this.values.password;
      movieTitle = this.values.movieTitle;
    });
  });

  beforeEach(function () {
    homePage = PageObject(Page.HOME_PAGE);
    loginOptionsPage = PageObject(Page.LOGIN_OPTIONS_PAGE);
    loginPage = PageObject(Page.LOGIN_PAGE);
    moviesSearchListPage = PageObject(Page.MOVIES_SEARCH_LIST_PAGE);
    moviePlayPage = PageObject(Page.MOVIE_PLAY_PAGE);
  });

  it("Sign In to IMDB", function () {
    homePage.clickOnSignInButton(logInValue);
    loginOptionsPage.assertForSignInWithImdbOption(signInValue);
    loginOptionsPage.clickOnSignInOption();
    loginPage.enterEmailInput(emailValue);
    loginPage.enterPasswordInput(passwordValue);
    loginPage.clickOnSignInButton();
  });

  it("Search a Movie & Watch it", function () {
    moviesSearchListPage.searchForAMovie(movieTitle);
    moviesSearchListPage.assertForMovieTitle(movieTitle);
    moviesSearchListPage.clickOnTheFirstMovieOnList();
    moviePlayPage.assertMovieTitleOnPlayPage(movieTitle);
  });

  it("Sign out of IMDB", function () {
    moviePlayPage.clickOnMyAccount({ force: true });
    moviePlayPage.clickOnSignOut({ force: true });
  });
});
