import HomePage from "../HomePage";
import LoginOptionsPage from "../LoginOptionsPage";
import LoginPage from "../LoginPage";
import MoviesSearchListPage from "../MoviesSearchListPage";
import MoviePlayPage from "../MoviePlayPage";

export const Page = {
  HOME_PAGE: "Home Page",
  LOGIN_OPTIONS_PAGE: "Login Options Page",
  LOGIN_PAGE: "Login Page",
  MOVIES_SEARCH_LIST_PAGE: "Movies Search List Page",
  MOVIE_PLAY_PAGE: "Movies Play Page",
};

export const PageObject = function (page) {
  switch (page) {
    case Page.HOME_PAGE:
      return new HomePage();
    case Page.LOGIN_OPTIONS_PAGE:
      return new LoginOptionsPage();
    case Page.LOGIN_PAGE:
      return new LoginPage();
    case Page.MOVIES_SEARCH_LIST_PAGE:
      return new MoviesSearchListPage();
    case Page.MOVIE_PLAY_PAGE:
      return new MoviePlayPage();
  }
};
