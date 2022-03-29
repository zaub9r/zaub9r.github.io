$(document).ready(function() { 
    var contact_wrapper = document.getElementById("c-hi");
    var contact_text    = document.getElementById("hi");
    
    $(contact_wrapper).hover(function(){ 
        $(contact_text).addClass('white');
    },
    function() {
        $(contact_text).removeClass('white');
    });
    
});