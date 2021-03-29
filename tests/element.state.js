module.exports = {
    'demo Test' : function(browser) {
        browser.url('https://ultimateqa.com/filling-out-forms/')
        .getText("div[id='et_pb_contact_form_0'] button[name='et_builder_submit_button']", (resultText) => {
            console.log(resultText.value) //returns value.
            //console.log(resultText) //returns object
        })
        .setValue('#et_pb_contact_message_0','Testing')
        .getValue('#et_pb_contact_message_0', (resultValue)=>{
            console.log(resultValue.value)
        })
        .isVisible('#et_pb_contact_message_0', (result)=> {
            console.log(result.value)
        })

}
}