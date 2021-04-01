const elements = {
    //postTitle: '#post-6917 h2'
    postTitle :'a[href="//ultimateqa.com/applitools-bugs-and-test-steps/"]'
};

const commands = [
    
];

module.exports = {
   elements: elements,
   commands: commands,
   url: function() {
       return `${this.api.launchUrl}/?s`
   }
}