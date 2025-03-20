
describe('Ebay Tests', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', () => false);
        cy.visit('https://www.ebay.de/');
    });

    it('Перевірка пошуку товару', () => {
        cy.get('input#gh-ac').type('iPhone 15').should('have.value', 'iPhone 15');
        cy.get('.gh-search-button__label').click();

        cy.get('ul.srp-results', { timeout: 20000 }).should('be.visible');
        cy.get('li.s-item', { timeout: 20000 }).should('have.length.greaterThan', 0);

        cy.get('li.s-item').each(($el) => {
            if (!$el.find('h3').length) return; // Пропускаємо елементи без заголовка

            cy.wrap($el).within(() => {
                cy.contains('iPhone', { matchCase: false }).should('be.visible');
            });

            return false; // Виходимо після першого знайденого товару
        });
    });


    it.only('Додавання товару в кошик', () => {
        // Вводимо текст у пошукову строку
        cy.get('input#gh-ac')
            .type('iPhone 15')
            .should('have.value', 'iPhone 15');

        // Чекаємо на видимість кнопки пошуку
        cy.get('.gh-search-button__label', { timeout: 15000 })
            .should('be.visible')
            .click();

        // Перевірка результатів пошуку
        cy.get('ul.srp-results', { timeout: 20000 }).should('be.visible');

        // Перевірка, чи є елементи товарів
        cy.get('li.s-item', { timeout: 20000 }).should('have.length.greaterThan', 0);

        // Перевірка та вибір першого товару без реклами
        cy.get('.srp-river-results .s-item')
            .first().within(() => {
                // Знайди лінку і прибери атрібут target, щоб товар відкрився в поточній табі
                cy.get('.s-item__link').invoke('removeAttr', 'target').click({ force: true });
            });

        // Заміна селектора для кнопки "Додати в кошик"
        cy.get('[data-testid="x-atc-action"]')
            .should('be.visible')
            .click();

        // Перевірка, що товар доданий у кошик
        cy.get('div.vi-overlayTitleBar', { timeout: 10000 }).should('be.visible');
        cy.get('div#cart-summary', { timeout: 10000 }).should('exist');

        // Перехід до кошика
        cy.get('a#gh-cart-n').click();
    });
    it('should ensure that products have prices', () => {
        cy.visit('https://www.ebay.de/');

        // Вводимо запит у поле пошуку та натискаємо Enter
        cy.get('#gh-ac').type('laptop{enter}');

        // Очікуємо завантаження результатів
        cy.get('.s-item__price').should('have.length.greaterThan', 0);

        // Перевіряємо, що кожна ціна містить знак долара та число
        cy.get('.s-item__price').each(($el) => {
            const priceText = $el.text().trim();
            expect(priceText).to.match(/([$€£]?[\d.,]+ ?[$€£]?)/); // Підтримка $, €, £ та інших валют
        });
    });
});
