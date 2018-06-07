const { expect } = require('chai');

describe('Rozetka home page', function () {
    beforeEach(function () {
        browser.url('/ua')
        browser.windowHandleFullscreen();
    })
    it('should have the right title', function () {
        const title = browser.getTitle();
        expect(title).to.be.equal('Интернет-магазин ROZETKA™: фототехника, видеотехника, аудиотехника, компьютеры и компьютерные комплектующие');
    });
    it('log in', function () {
        const title = browser.getTitle();

        expect(title).to.be.equal('Интернет-магазин ROZETKA™: фототехника, видеотехника, аудиотехника, компьютеры и компьютерные комплектующие');

        browser.click('[class="header-user-title"]')
        const authTitle = browser.getText('[class="auth-title"]')
        if (!authTitle == 'Вход в интернет-магазин') {
            expect(authTitle).to.be.equal('Вхід в інтернет-магазин');
        }
        browser.setValue('[name="login"]', 'test@gmail.com');
        browser.setValue('div[name="simple_auth"] .auth-input-text', 'qwerqwerqwerqwerqwe');
        browser.click('[class="btn-link-i"]')
        // const wrongPassTitle = browser.getText('auth-forgot-pass-tooltip-note');
        // console.log('>>>>>>>>>', wrongPassTitle);
        // expect(wrongPassTitle).to.be.equal('Перевірте розкладку клавіатури і Caps Lock')
    });
});
