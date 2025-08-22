$(document).ready(function(){
    $(".jquery-reference-hidden").removeClass("jquery-reference-hidden");
    
    /* **********Changing default colors*********** */
    
    $(".mypage-header-nav, .leftnav, .center-content, .js-wrapper, .mypage-footer, button, .responsive-heading").addClass("bg-color table-border-color text-color");
    $(".section-content, .section-heading, .project-title, .project-tech, .project-tech-name, .js-container, .mypage-footer-a, .js-heading").addClass("text-color");
    
    $("input").removeClass("js-input-field-border");

    $(".submit-button").hover(function(){
        $(this).toggleClass("button-color");
    })

    /* ******************Hiding Footer Section************************** */

    $("#mypage-footer").hide();
})
