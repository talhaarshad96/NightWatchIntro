const elements = {
    //shorthand Definition
    leftFormName : "#et_pb_contact_name_0",

    //full definition
    leftFormMessage: {
        selector: "#et_pb_contact_message_0",
        locateStrategy : 'css selector'
    },

    //leftFormMessage : "#et_pb_contact_message_0",

    form : '#et_pb_contact_form_0 form',
    //btnSubmit : 'div[id="et_pb_contact_form_0"] button[name="et_builder_submit_button"]'
        //or
    btnSubmit : '#et_pb_contact_form_0 form button',
    labelLeftFormMessage : '#et_pb_contact_form_0 div:nth-child(1)'
};

const commands = [
    {
        /**
         * Enter the name & message into left form
         * 
         * @param {String} name 
         * @param {String} message 
         */

        enterNameAndMessage(name,message){
            return this
                .setValue('@leftFormName',name)
                .setValue('@leftFormMessage',message)
        },

        submitLeftForm(){
            return this.click('@btnSubmit')
        }
    }
];

module.exports = {
    elements: elements,
    commands:commands,
    url: function() {
        return `${this.api.lauch_url}/filling-out-forms/`
    }

}