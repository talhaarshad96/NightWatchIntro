describe("forms suite page object",()=>{
    it('should fill form via page object',(browser)=>{
        const FormPage = browser.page.formPage();

        FormPage.navigate()
            .verify.title('Filling Out Forms - Ultimate QA')
            .enterNameAndMessage('mocha Talha pg','mocha This is message from page object')
            .submitLeftForm();
    })
})