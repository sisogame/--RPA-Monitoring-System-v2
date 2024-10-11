// 달력-년월일+시간
let currentClickedId = null;
$(function () {
	$.datetimepicker.setLocale("kr");
  
	$(document).ready(function () {
	  fn_egov_init_date();

	  $('.input-calendar').on('click', function() {
		currentClickedId = "";
		currentClickedId = $(this).attr('id');
		});
	});
  
	function fn_egov_init_date() {
	  var $startDate = $("#startDate");
	  var $endDate = $("#endDate");
	  $startDate.datetimepicker({
		lang: "kr",
		format: 'Y-m-d H:i', // 원하는 포맷
		timeFormat: "hh:mm:ss",
		timeFormat: false,
		scrollMonth: false,
		scrollInput: false,
		showMonthAfterYear: true,
		onShow: function (ct) {
		  this.setOptions({
			maxDate: $endDate.val() ? $endDate.val() : false,
		  });
		},
	  });
  
	  $endDate.datetimepicker({
		lang: "kr",
		format: 'Y-m-d H:i', // 원하는 포맷
		timeFormat: "hh:mm:ss",
		timeFormat: false,
		scrollMonth: false,
		scrollInput: false,
		showMonthAfterYear: true,
		onShow: function (ct) {
		  this.setOptions({
			minDate: $startDate.val() ? $startDate.val() : false,
		  });
		},
	  });
  
  
	}
  
  
	// 달력-년월일 
	$("#datebasicStart").datetimepicker({
	  lang: "kr",
	  timepicker: false,
	  format: "Y-m-d",
	  formatDate: "Y-m-d",
	});
  
	$("#open").click(function () {
	  $("#datebasicStart").datetimepicker("show");
	});
  
  
	$("#datebasicEnd").datetimepicker({
	  lang: "kr",
	  timepicker: false,
	  format: "Y-m-d",
	  formatDate: "Y-m-d",
	});
  
	$("#open").click(function () {
	  $("#datebasicEnd").datetimepicker("show");
	});
  
	// 달력-년월일#2 
	$("#datebasicStart2").datetimepicker({
	  lang: "kr",
	  timepicker: false,
	  format: "Y-m-d",
	  formatDate: "Y-m-d",
	});
  
	$("#open").click(function () {
	  $("#datebasicStart2").datetimepicker("show");
	});
  
  
	$("#datebasicEnd2").datetimepicker({
	  lang: "kr",
	  timepicker: false,
	  format: "Y-m-d",
	  formatDate: "Y-m-d",
	});
  
	$("#open").click(function () {
	  $("#datebasicEnd2").datetimepicker("show");
	});
  
	// 달력-년월일#3 
	$("#datebasicStart3").datetimepicker({
	  lang: "kr",
	  timepicker: false,
	  format: "Y-m-d",
	  formatDate: "Y-m-d",
	});
  
	$("#open").click(function () {
	  $("#datebasicStart3").datetimepicker("show");
	});
  
  
	$("#datebasicEnd3").datetimepicker({
	  lang: "kr",
	  timepicker: false,
	  format: "Y-m-d",
	  formatDate: "Y-m-d",
	});
  
	$("#open").click(function () {
	  $("#datebasicEnd3").datetimepicker("show");
	});
  
  
  });
function gfnResetBtn() {
    // 리셋 로직
	$("#"+currentClickedId).val("");
}
function gfnConfirmBtn(){
	$(".xdsoft_datetimepicker").css("display", "none");
}
  $(function () {
	// Appending the timepicker element to the body or a container
  
  
  
  
  });