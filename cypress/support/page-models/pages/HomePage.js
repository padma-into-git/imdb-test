export default class HomePage {
  clickOnSignInButton = () => {
    return cy.get(
      '[class="ipc-button ipc-button--single-padding ipc-button--default-height ipc-button--core-baseAlt ipc-button--theme-baseAlt ipc-button--on-textPrimary ipc-text-button imdb-header__signin-text"]'
    );
  };
}
