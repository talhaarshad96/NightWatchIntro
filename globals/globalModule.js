const Mailer = require('../tests/Mailer.js');
const fs= require('fs')

module.exports = {
    
    before:(done)=>{
        console.log('Before')
        done();
    },

    after:(done)=>{
        console.log('after')
        const mailerObj = new Mailer(); //
        mailerObj.sendMail()
        .then((result) => console.log('Email sent...', result))
        .catch((error) => console.log(error.message));
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

    reporter: (result, done) => {
        fs.writeFile('testresults.json', JSON.stringify(result,null,'\t'),(err) => {
            if(err) throw err;
            console.log('report saved')
            done();
        })
    }
}