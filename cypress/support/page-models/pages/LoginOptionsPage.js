export default class LoginOptionsPAge {
  assertForSignInWithImdbOption = () => {
    return cy.get('[id="signin-options"]');
  };

  clickOnSignInOption = () => {
    return cy.get('[class="list-group-item "]');
  };
}
