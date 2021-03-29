module.exports = {
    'Filling out form' : (browser) => {
        browser.url('https://ultimateqa.com/filling-out-forms/')
        .waitForElementVisible('body',1000)
        .assert.title('Filling Out Forms - Ultimate QA')
        .assert.containsText("div[id='et_pb_contact_form_0'] button[name='et_builder_submit_button']","Submit")
        .waitForElementVisible('#et_pb_contact_name_0')
        .setValue('#et_pb_contact_name_0', 'Talha')
        .click('.et_pb_contact_submit')
        .waitForElementVisible('#et_pb_contact_form_0')
        //.expect.element('#et_pb_contact_name_0').text.to.equal('Form filled out')
    }
}