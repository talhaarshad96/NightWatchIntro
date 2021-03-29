module.exports = {
    'Confirming Form Page Title' : (browser) => {
        browser.url('https://ultimateqa.com/filling-out-forms/')
        .waitForElementVisible("body")
        .assert.title('Filling Out Forms - Ultimate QA')

    }
}