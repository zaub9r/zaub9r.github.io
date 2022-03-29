$(document).ready(function() { 
    var firstentry = document.getElementById("about");
    var secondentry = document.getElementById("service");
    var thirdentry = document.getElementById("contact");
        
    $(".about-text-wrapper").children().hover = function(){
        this.css( "border-bottom", "3px double red" );
    }
    
    //css( "border-bottom", "3px double red" );
    
    
    var granimInstance = new Granim({
        element: '#canvas',
        name: 'interactive-gradient',
        elToSetClassOn: '.canvas-interactive-wrapper',
        direction: 'diagonal',
        isPausedWhenNotInView: true,
        stateTransitionSpeed: 500,
        states : {
            "default-state": {
                gradients: [
                    ['#B3FFAB', '#12FFF7'],
                    ['#ADD100', '#7B920A'],
                    ['#1A2980', '#26D0CE']
                ],
            transitionSpeed: 10000
        },
        "violet-state": {
            gradients: [
                ['#9D50BB', '#6E48AA'],
                ['#4776E6', '#8E54E9']
            ],
            transitionSpeed: 2000
        },
        "orange-state": {
            gradients: [ ['#FF4E50', '#F9D423'] ],
            loop: false
        }
    }
});
    
firstentry.addEventListener("mouseenter", function( event ) {
    event.preventDefault();
    granimInstance.changeState('default-state');
});

secondentry.addEventListener("mouseenter", function( event ) {
    event.preventDefault();
    granimInstance.changeState('violet-state');
});    

thirdentry.addEventListener("mouseenter", function( event ) {  
    event.preventDefault();
    granimInstance.changeState('orange-state');
});

    
});