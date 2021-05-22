 $(function(){
 	$('.mobile_list').slideUp();
 		$('.tab,.end-tab').click(function(event) {
 			$('.mobile_list').slideToggle();
 	 		$('.tab').toggleClass('acctive');
 	 		$('.end-tab').toggleClass('bacctive');
 	 	});
 	 

 	$('.mb_a_list').slideUp();
 		$('#sub_tab1,#sub_tab2,#sub_tab3,#sub_tab4,#sub_tab5').click(function(event) {
 			$(this).next().slideToggle();
 			$('body,html').animate({scrollTop: $(this).offset().top});
 		});
 		

 		$("#lightSlider").lightSlider(); 
 		 $('#autoWidth').lightSlider({
		        autoWidth:true,
		        loop:true,
		        onSliderLoad: function() {
			            $('#autoWidth').removeClass('cS-hidden');
			        } 
   			 });  

 		 


}); 
               