var HDMaster = 
{
	/* Page Loader by HD */
	pageLoader: function()
	{
		$(".stage").delay(15000).fadeOut();
    	$("#pageloader").delay(5000).fadeOut("slow");
	},
	/* Page Loader by HD */
	/* --------------------- */
	/* simple accordia by HD */
	simple_accordian: function()
	{
		$('#accordion').find('.accordion-toggle').click(function()
		{	
	  		$(this).parent().find(".accordion-toggle").removeClass("active");
	  		$(this).addClass("active");	
      		$(this).next().slideToggle('fast');
      		$(".accordion-content").not($(this).next()).slideUp('fast');	  
    	});
	},
	/* simple accordia by HD */
	/* --------------------- */
	/* simple modal by HD */
	simple_modal: function()
	{
		var modal = document.querySelectorAll('.cmodal');
var btns = document.querySelectorAll('.openmodal'); 
var span = document.getElementsByClassName("close")[0];
//var cur = $(btns).index($(this));
[].forEach.call(btns, function(el) {
  el.onclick = function() {
      //modal.style.display = "block";
      	var cur = $(btns).index($(this));
		$(modal).eq(cur).css('display','block');
  }
})


/*btns.onclick = function() {
		var cur = $(btns).index($(this));
		$(modal).eq(cur).addClass('active');
   // modal.style.display = "block";
}*/

$(".close").click(function() {
	//alert("The paragraph was clicked.");  
	$('.cmodal').css('display','none');
});

/*
window.onclick = function() {
   /* if (event.target == modal) {
       $('.cmodal').css('display','none');
    }*/
   /* $('.cmodal').css('display','none');
}*/

	}
	/* simple modal by HD */
	/* --------------------- */
}; 

$(document).ready(function() 
{
	HDMaster.pageLoader();
	HDMaster.simple_accordian();
	HDMaster.simple_modal();
});	

