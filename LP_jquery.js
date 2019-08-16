$(document).ready(function() {
	//Tip Calculator
	$("#tipCalcScreenshot").mouseenter(function() {
		$("#tipCalcDes").stop(true, true).slideDown("slow"); //Stop used to keep the animation from playing all the way through multiple times if hovered over quickly multiple times
	});
	
	$("#tipDiv").mouseleave(function() {
		$("#tipCalcDes").slideUp("slow");
	});
	
	//Clock
	$("#clockScreenshot").mouseenter(function() {
		$("#clockDes").stop(true, true).slideDown("slow");
	});
	
	$("#clockDiv").mouseleave(function() {
		$("#clockDes").slideUp("slow");
	});
	
	//Lumi
	$("#lumiScreenshot").mouseenter(function() {
		$("#lumiDes").stop(true, true).slideDown("slow");
	});
	
	$("#lumiDiv").mouseleave(function() {
		$("#lumiDes").slideUp("slow");
	});
	
	//Drum Kit
	$("#drumKitScreenshot").mouseenter(function() {
		$("#drumKitDes").stop(true, true).slideDown("slow");
	});
	
	$("#drumKitDiv").mouseleave(function() {
		$("#drumKitDes").slideUp("slow");
	});
	
	//Leona
	$("#leonaScreenshot").mouseenter(function() {
		$("#leonaDes").stop(true, true).slideDown("slow");
	});
	
	$("#leonaDiv").mouseleave(function() {
		$("#leonaDes").slideUp("slow");
	});
	
	$(window).scroll(function() {
		if($(this).scrollTop() > 40) {
			$("#toTop").fadeIn(); 
		} else {
			$("#toTop").fadeOut();
		}
	});
	
	$("#toTop").click(function() {
		$("html, body").animate({scrollTop : 0},800);
	});
});