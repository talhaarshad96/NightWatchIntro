module.exports = {

before: (browser)=>{
console.log('Staring up')
},

after: (browser)=>{
    console.log('closing down')
},

beforeEach: (browser)=>{
    browser.url('https://ultimateqa.com/filling-out-forms/')
},

afterEach: (browser)=> {
    console.log('Test Completed')
},

"Should verify page title": (browser)=>{
    browser.expect.title().to.contains('Filling Out')
},

"Should verify page titles": (browser)=>{
    browser.expect.title().to.contains('Filling Out')
}

}