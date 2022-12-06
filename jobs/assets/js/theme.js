$(function(){

	"use strict";

	// When the user scrolls down 100px from the top of the document, header will be fixed
	window.onscroll = function() {scrollFunction();};
	var header = document.getElementById("header");
	function scrollFunction() {
	    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
	        header.classList.add("is-scrolling");
	    } else {
			header.classList.remove("is-scrolling");
	    }
	}

	// Exit Popup
	document.addEventListener("mouseleave", function(){
		$('#exitModal').modal('show');
	});

	// Multi Steps Form
	// Step 0 Start
	$("#btn_start").click(function(){
		// Steps
		$("#step_0").addClass("sr-only", 2000);
		$("#step_1").removeClass("sr-only", 2000);

		// Progress
		$(".progress-bar").text("15%");
		$(".progress-bar").css("width", "15%");
		$(".progress-bar").attr("aria-valuenow", "15");
	});
	// Step 0 End

	// Step 1 Start
	$("[name='gender']").click(function(){
		$("#step_1").addClass("sr-only", 2000);
		$("#step_2").removeClass("sr-only", 2000);

		// Progress
		$(".progress-bar").text("30%");
		$(".progress-bar").css("width", "30%");
		$(".progress-bar").attr("aria-valuenow", "30");
	});
	// Step 1 End
	
	// Step 2 Start
	$("[name='old']").click(function(){
		$("#step_2").addClass("sr-only", 2000);
		$("#step_3").removeClass("sr-only", 2000);

		// Progress
		$(".progress-bar").text("45%");
		$(".progress-bar").css("width", "45%");
		$(".progress-bar").attr("aria-valuenow", "45");
	});
	// Step 2 End

	// Step 3 Start
	$("[name='money']").click(function(){
		$("#step_3").addClass("sr-only", 2000);
		$("#step_4").removeClass("sr-only", 2000);

		// Progress
		$(".progress-bar").text("60%");
		$(".progress-bar").css("width", "60%");
		$(".progress-bar").attr("aria-valuenow", "60");
	});
	// Step 3 End

	// Step 4 Start
	$("[name='hours']").click(function(){
		$("#step_4").addClass("sr-only", 2000);
		$("#step_5").removeClass("sr-only", 2000);

		// Progress
		$(".progress-bar").text("75%");
		$(".progress-bar").css("width", "75%");
		$(".progress-bar").attr("aria-valuenow", "75");
	});
	// Step 4 End

	// Step 5 Start
	$("[name='when']").click(function(){
		$("#step_5").addClass("sr-only", 2000);
		$("#step_6").removeClass("sr-only", 2000);

		// Progress
		$(".progress-bar").text("85%");
		$(".progress-bar").css("width", "85%");
		$(".progress-bar").attr("aria-valuenow", "85");
	});
	// Step 5 End

	// Step 6 Start
	$("[name='typing']").click(function(){
		$("#step_6").addClass("sr-only", 2000);
		$("#step_7").removeClass("sr-only", 2000);

		// Progress
		$(".progress-bar").text("100%");
		$(".progress-bar").css("width", "100%");
		$(".progress-bar").attr("aria-valuenow", "100");

		function getSurveysNum(min, max) {
			return Math.floor(Math.random() * (max - min + 1) ) + min;
		}
		function getCompaniesNum(min, max) {
			return Math.floor(Math.random() * (max - min + 1) ) + min;
		}
		var	surveysNum = getSurveysNum(3000, 4000);
		var	companiesNum = getCompaniesNum(3, 10);

		$('#survey_number').text(surveysNum);
		$('#sur_num').text(surveysNum);
		$('#company_number').text(companiesNum);
		$('#com_num').text(companiesNum);

		setTimeout(function(){
			$("#step_7").addClass("sr-only", 2000);
			$("#step_8").removeClass("sr-only", 2000);
		}, 1000);

		setTimeout(function(){
			$("#step_8").addClass("sr-only", 2000);
			$("#step_9").removeClass("sr-only", 2000);
		}, 1500);

		setTimeout(function(){
			$("#step_9").addClass("sr-only", 2000);
			$("#step_10").removeClass("sr-only", 2000);
		}, 2000);

	});
	// Step 6 End

});