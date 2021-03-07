export const waitForVisible = (selector, timeout = 500) => {
  return cy.get(selector, { timeout: timeout }).should("be.visible");
};
