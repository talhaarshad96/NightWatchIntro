module.exports = {
    'demo Test' : function(browser) {
       browser.url('https://ultimateqa.com/filling-out-forms/')
       //.element('css selector', 'body', function(result) 
       .elements('css selector', 'input[type="text"]', function(result)
       {
         console.log(result.value)
       });
     },
   
     
   }