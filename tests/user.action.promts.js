module.exports = {
    "SHould perform keyStrokes" : (browser) => {
        // browser.url('https://ultimateqa.com/filling-out-forms/',()=>{
        //     console.log(JSON.stringify(browser.Keys,null,'\t'))  //this kind of callback tells us what actions we can perform. Below is example
        //})
        browser.url('https://ultimateqa.com/filling-out-forms/')
        .setValue("#et_pb_contact_name_0",'testing')
        .keys(browser.Keys.BACK_SPACE)
        .keys(browser.Keys.BACK_SPACE)
        .keys(browser.Keys.ENTER)
        .keys(browser.Keys.SUBTRACT)
        
    },

    "SHould perform right click" : (browser) => {
        browser.mouseButtonClick('right')
        .pause(2000)
    },

    "SHould perform window actions" : (browser) => {
        browser.openNewWindow('tab')
        .pause(3000)
        .fullscreenWindow()
        .windowHandles((result)=>{
            //console.log(result.value)
            const newWindow=result.value[1];
            browser.switchWindow(newWindow)
        })
        //.pause(3000)
    },

    "SHould interact with Alerts" : (browser) => {
        browser.url('https://the-internet.herokuapp.com/javascript_alerts')
        .click('button[onclick="jsAlert()"]')
        .getAlertText((results)=>{
            console.log(results.value)
        })
        .acceptAlert()
        .pause(3000)
    },
}

/**
 * {
        "NULL": "",
        "CANCEL": "",
        "HELP": "",
        "BACK_SPACE": "",
        "TAB": "",
        "CLEAR": "",
        "RETURN": "",
        "ENTER": "",
        "SHIFT": "",
        "CONTROL": "",
        "ALT": "",
        "PAUSE": "",
        "ESCAPE": "",
        "SPACE": "",
        "PAGEUP": "",
        "PAGEDOWN": "",
        "END": "",
        "HOME": "",
        "LEFT_ARROW": "",
        "UP_ARROW": "",
        "RIGHT_ARROW": "",
        "DOWN_ARROW": "",
        "ARROW_LEFT": "",
        "ARROW_UP": "",
        "ARROW_RIGHT": "",
        "ARROW_DOWN": "",
        "INSERT": "",
        "DELETE": "",
        "SEMICOLON": "",
        "EQUALS": "",
        "NUMPAD0": "",
        "NUMPAD1": "",
        "NUMPAD2": "",
        "NUMPAD3": "",
        "NUMPAD4": "",
        "NUMPAD5": "",
        "NUMPAD6": "",
        "NUMPAD7": "",
        "NUMPAD8": "",
        "NUMPAD9": "",
        "MULTIPLY": "",
        "ADD": "",
        "SEPARATOR": "",
        "SUBTRACT": "",
        "DECIMAL": "",
        "DIVIDE": "",
        "F1": "",
        "F2": "",
        "F3": "",
        "F4": "",
        "F5": "",
        "F6": "",
        "F7": "",
        "F8": "",
        "F9": "",
        "F10": "",
        "F11": "",
        "F12": "",
        "COMMAND": "",
        "META": ""
}
 */