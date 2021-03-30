module.exports = {
    "Assert stuff" : (browser) => {
        browser.url('https://ultimateqa.com/filling-out-forms/')
        //.assert.not.visible('div[id="et_pb_contact_form_0"] button[name="et_builder_submit_button"]')
        //.verify.not.visible('div[id="et_pb_contact_form_0"] button[name="et_builder_submit_button"]')
        .verify.visible('div[id="et_pb_contact_form_0"] button[name="et_builder_submit_button"]')
        .assert.visible('div[id="et_pb_contact_form_0"] button[name="et_builder_submit_button"]')
    },

    "SHould assert from field value" : (browser) => {
        browser.setValue("#et_pb_contact_name_0",'Talha Arshad')
        //.assert.valueContains('#et_pb_contact_name_0','Talha')
        //.expect.element('#et_pb_contact_name_0').to.have.value.which.equal('Talha')
        .expect.element('#et_pb_contact_name_0').to.have.value.which.contains('Talha')
    },

    "SHould assert attribute contains expected value" : (browser) => {
        //browser.assert.attributeContains('#et_pb_contact_name_0','placeholder',"Name")
        browser.expect.element('#et_pb_contact_name_0').to.have.attribute('placeholder').which.contains('Name')
    },

    "SHould assert contains text " : (browser) => {
        browser.verify.containsText('div[id="et_pb_contact_form_0"] button[name="et_builder_submit_button"]','Submit')
    }
}