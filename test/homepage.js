const { expect } = require('chai');

describe('Rozetka home page', function () {
    it('should have the right title', function () {
        browser.url('/ua');
        const  title = browser.getTitle();
        expect(title).to.be.equal('Интернет-магазин ROZETKA™: фототехника, видеотехника, аудиотехника, компьютеры и компьютерные комплектующие');
    });
    it('log in', function () {
        browser.url('/ua');
        const  title = browser.getTitle();
        expect(title).to.be.equal('Интернет-магазин ROZETKA™: фототехника, видеотехника, аудиотехника, компьютеры и компьютерные комплектующие');
        browser.click('[data-lang="ua"]')
        browser.click('#header_user_menu_parent')
        const authTitle = browser.getText('[class="auth-title"]')
        expect(authTitle).to.be.equal('Вхід в інтернет-магазин');
    });
});
