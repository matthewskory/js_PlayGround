$(document).ready(function(){
   $("#hide").click(function(){
   		$("#image").hide();
   });
  $("#show").click(function(){
		$("#image").show();
	});
   $("#toggle").click(function(){
   		$("#image").toggle();
   });
  $("#fadeIn").click(function(){
		$("#image").fadeIn("slow");
	});
  $("#explode").click(function(){
		$("#image").hide("explode", {pieces: 30}, 2000);
	});
  $("#sizechange").click(function(){
		$("#image").animate({
			height: '-=50%',
			width:  '-=50%' 
		});
	});
  


});