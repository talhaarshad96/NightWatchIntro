module.exports = {
    "Interacting with elements" : (browser) => {
        browser.url('https://ultimateqa.com/filling-out-forms/')
        .waitForElementVisible('#et_pb_contact_name_0')
        .setValue("#et_pb_contact_name_0",'testing')
        .pause('2000')
        .clearValue("#et_pb_contact_name_0")
        .pause('2000')
        .waitForElementVisible("div[id='et_pb_contact_form_0'] button[name='et_builder_submit_button']")
        .moveToElement("div[id='et_pb_contact_form_0'] button[name='et_builder_submit_button']",10,10)
        .pause('2000')
    }
}