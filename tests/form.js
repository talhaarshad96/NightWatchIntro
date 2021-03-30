module.exports = {

    beforeEach: (browser)=>{
        browser.url(`${browser.launch_url}/filling-out-forms`)
        .refresh();
    },

    "Doing tests for forms": (browser)=>{
        browser.setValue('#et_pb_contact_name_0','Talha Arshad')
        .setValue('#et_pb_contact_message_0','This is message')
        .submitForm('#et_pb_contact_form_0 form')
        //.expect.element('#et_pb_contact_form_0').text.to.be.equal('Thanks for contacting us')

    },

    "Doing tests for forms using Page Objects": (browser)=>{
        const FormPage = browser.page.formPage();

        FormPage.navigate()
        .enterNameAndMessage('Talha pg','This is message from page object')
        .submitLeftForm();
        //browser.saveScreenShot('bla.png');
    },
    
    after: (browser)=>{
        browser.end();
    }
}