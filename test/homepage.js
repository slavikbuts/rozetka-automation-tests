const { expect } = require('chai');

describe('Rozetka home page', function () {
    it('should have the right title - the fancy generator way', function () {
        browser.url('/ua');
        var title = browser.getTitle();
        expect(title).to.be.equal('Интернет-магазин ROZETKA™: фототехника, видеотехника, аудиотехника, компьютеры и компьютерные комплектующие');
    });
});
