module.exports = {
    '@tags': ['google'],
    'Google Advanced Search, Talha Arshad' : (browser) =>
    {
        const SearchQuery = 'Talha Arshad';
        const SearchQuery_Selector = '#xX4UFf';
        const LanguageDropDown = '#lr_button';
        const LanguageSelect = '.goog-menuitem[value="lang_en"]';
        const submitAdvancedButton = '.jfk-button.jfk-button-action.dUBGpe[type="submit"]';
        const resultQueryInSearchBox = `#searchform input[name="q"][value="${SearchQuery}"]`; //to use this, we dont use single quotes, but tilda wala quote

        browser.url('https://www.google.com/advanced_search')
        .setValue(SearchQuery_Selector,SearchQuery)
        .click(LanguageDropDown)
        .click(LanguageSelect)
        .click(submitAdvancedButton)
        .assert.urlContains('as_q=Talha+Arshad','Query searched is Talha Arshad')
        .waitForElementVisible(resultQueryInSearchBox)
        .assert.visible(resultQueryInSearchBox,'Yes, Query Visible')
        .saveScreenshot('tests_output/google.png')
    }
}