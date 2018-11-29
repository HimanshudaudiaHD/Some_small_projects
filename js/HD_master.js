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
		[].forEach.call(btns, function(el) 
		{
  			el.onclick = function() 
  			{
      			var cur = $(btns).index($(this));
      			//console.log(cur);
				$(modal).eq(cur).css('display','block');
				//console.log(modal);
  			}
		})
		$(".close").click(function() 
		{
			$('.cmodal').css('display','none');
		});
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

