describe ( 'Mocha Suite', ()=> {
    it('confirm title page',(browser) => {
        browser.url('https://ultimateqa.com/filling-out-forms/')
        .waitForElementVisible("body")
        .assert.title('Filling Out Forms - Ultimate QA')
    })
})