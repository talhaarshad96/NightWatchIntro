module.exports = {
    
    before:(done)=>{
        console.log('Before')
        done();
    },

    after:(done)=>{
        console.log('after')
        done();
    },

    beforeEach: (browser,done)=>{
        console.log('Before Each');
        browser.status(result=>{
            console.log(result.value)
            done();
        })
    },
    
    afterEach: (browser,done)=>{
        console.log('after Each')
            console.log(browser.currentTest)
            done();
        
    },
}