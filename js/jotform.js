JotForm.newDefaultTheme = false;
JotForm.extendsNewTheme = false;
JotForm.singleProduct = false;
JotForm.newPaymentUIForNewCreatedForms = false;
JotForm.highlightInputs = false;

JotForm.init(function(){
/*INIT-START*/
if (window.JotForm && JotForm.accessible) $('input_3').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_9').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_10').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_11').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_19').setAttribute('tabindex',0);
    JotForm.alterTexts({"confirmClearForm":"Are you sure you want to clear the form","incompleteFields":"Please complete required (*) fields.","lessThan":"Your score should be less than"});
/*INIT-END*/
});

JotForm.prepareCalculationsOnTheFly([null,null,null,{"name":"firstName","qid":"3","text":"First Name","type":"control_textbox"},null,null,null,null,{"name":"submit","qid":"8","text":"Submit","type":"control_button"},{"name":"lastName","qid":"9","text":"Last Name","type":"control_textbox"},{"name":"email10","qid":"10","text":"E-mail","type":"control_textbox"},{"name":"phone","qid":"11","text":"Phone","type":"control_textbox"},null,null,{"name":"clickTo14","qid":"14","text":"Contact Us","type":"control_head"},null,null,null,null,{"name":"message","qid":"19","text":"Message","type":"control_textarea"}]);
 setTimeout(function() {
JotForm.paymentExtrasOnTheFly([null,null,null,{"name":"firstName","qid":"3","text":"First Name","type":"control_textbox"},null,null,null,null,{"name":"submit","qid":"8","text":"Submit","type":"control_button"},{"name":"lastName","qid":"9","text":"Last Name","type":"control_textbox"},{"name":"email10","qid":"10","text":"E-mail","type":"control_textbox"},{"name":"phone","qid":"11","text":"Phone","type":"control_textbox"},null,null,{"name":"clickTo14","qid":"14","text":"Contact Us","type":"control_head"},null,null,null,null,{"name":"message","qid":"19","text":"Message","type":"control_textarea"}]);}, 20); 
