module.exports = [  //array of Objects
    { //this will have name empty and message will pe put.
        testCase : "Should verify that the name error message is shown",
        name : "",
        message : "This is data message",
        expectedResult : "Please, fill in the following fields:\nName",
        screenshotFileName : "./screen_evidence/nameError.png"
    }, 
    //      making these 3 data sets because is site par 3 hain data.
    {
        testCase : "Should verify that the message error is shown",
        name : "Talha data",
        message : "",
        expectedResult : "Please, fill in the following fields:\nMessage",
        screenshotFileName : "./screen_evidence/MsgError.png"
    },

    {
        testCase : "Should verify that the name and message error is shown",
        name : "",
        message : "",
        expectedResult : "Please, fill in the following fields:\nName\nMessage",
        screenshotFileName : "./screen_evidence/Msg&NameError.png"
    },
]