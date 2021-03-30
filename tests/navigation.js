module.exports = {
    "should navigate by default URL" : (browser) => {
        browser.init().pause(2000)
        .getTitle((title)=> console.log(title))
        .urlHash('#random') //puts something after the url with a hash
        .pause(2000)
    }
    
 
}