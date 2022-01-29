jQuery(document).ready(function(){
    jQuery('.logo-brands').slick({
        
			speed: 300,
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			variableWidth: true,
			
    });
    
    


    jQuery('ul.tabs li').click(function(e){
        e.preventDefault();
        jQuery(this).addClass("selected").siblings().removeClass("selected");
        jQuery(".tab-content > .contentss").hide();
        jQuery(jQuery(this).data("value")).fadeIn();
    });       
    
});


