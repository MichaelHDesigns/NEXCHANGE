import orderFiat from '../../src/__mocks__/orderFiat';
import orderCrypto from '../../src/__mocks__/orderCrypto';

describe('Order creation', function() {
  it('creates HTHEUR (fiat) order and gets redirected to order page', function() {
    cy.server();
    cy.route({
      method: 'POST',
      url: 'orders',
      response: orderFiat,
    });

    cy.route({
      method: 'GET',
      url: 'orders/*',
      response: orderFiat,
    });

    cy.visit('http://localhost:3000?pair=BTCHTH');

    cy.get('.selectedCoin-deposit').click();

    cy.get('.coin-currency-dropdown')
      .contains('EUR')
      .click();

    cy.get('.selectedCoin-receive').click();

    cy.get('.coin-currency-dropdown')
      .contains('HTH')
      .click();

    cy.get('#withdraw-addr').type('HN83aKuX7KfqJintLk4QYLYKMn2jiiABhZ');

    cy.get('.proceed').click();
  });

  it('creates HTHBTC (crypto) order and gets redirected to order page', function() {
    cy.server();
    cy.route({
      method: 'POST',
      url: 'orders',
      response: orderCrypto,
    });

    cy.route({
      method: 'GET',
      url: 'orders/*',
      response: orderCrypto,
    });

    cy.visit('http://localhost:3000?pair=BTCHTH');

    cy.get('.selectedCoin-deposit').click();
    cy.get('.coin-currency-dropdown')
      .contains('BTC')
      .click();

    cy.get('.selectedCoin-receive').click();
    cy.get('.coin-currency-dropdown')
      .contains('HTH')
      .click();

    cy.get('#withdraw-addr').type('HN83aKuX7KfqJintLk4QYLYKMn2jiiABhZ');

    cy.get('.proceed').click();
  });
});