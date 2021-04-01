module.exports={
    "should find results when searching for applitools":(browser)=>{
        const ComplicatedPage = browser.page.ComplicatedPage();
        const SearchPage = browser.page.SearchPage();

        ComplicatedPage.navigate()
        .search('applitools')
        .verify.urlContains('/?s')

        SearchPage
        .getText('@postTitle',(result)=>{
            browser.assert.equal(result.value,'Applitools Bugs and Test Steps')
            //expect.element('a[href="//ultimateqa.com/applitools-bugs-and-test-steps/"]').text.to.contain('Applitools Bugs and Test Steps')
            //console.log("sada-----------------  -------------dad-------"+result)
            //browser.useCss().expect.element('@postTitle').text.to.be.equal('Applitools Bugs and Test Steps')
            //.expect.element('@postTitle').text.to.be.equal('Applitools Bugs and Test Steps')
        })
    }
}