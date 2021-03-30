const data=require('../globals/data')

describe("forms suite page object",()=>{

    data.forEach(({testCase,name,message,expectedResult,screenshotFileName})=>{
        it(testCase, (browser)=>{
            const FormPage = browser.page.formPage();

            FormPage.navigate()
            .enterNameAndMessage(name,message)
            .submitLeftForm()
            //.verify.containsText('@labelLeftFormMessage', expectedResult)
            .saveScreenshot(screenshotFileName)
            .expect.element('@labelLeftFormMessage').text.to.be.equal(expectedResult)
        })
    })
})