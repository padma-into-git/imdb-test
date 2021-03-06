export default class MoviePlayPage {
  assertMovieTitleOnPlayPage = () => {
    return cy.get('[class="title_wrapper"]');
  };

  clickOnMyAccount = () => {
    return cy.get('[id="navUserMenu"]');
  };
  clickOnSignOut = () => {
    return cy.get(
      '[class="ipc-list__item imdb-header-account-menu__sign-out"]'
    );
  };
}
