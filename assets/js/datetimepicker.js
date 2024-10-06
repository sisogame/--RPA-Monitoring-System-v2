// 달력-년월일+시간

$(function () {
  $.datetimepicker.setLocale("kr");

  $(document).ready(function () {
    fn_egov_init_date();
  });

  function fn_egov_init_date() {
    var $startDate = $("#startDate");
    var $endDate = $("#endDate");
    $startDate.datetimepicker({
      lang: "kr",
      dateFormat: "yy/mm/dd",
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
      dateFormat: "yy/mm/dd",
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
    format: "Y/m/d",
    formatDate: "Y/m/d",
  });

  $("#open").click(function () {
    $("#datebasicStart").datetimepicker("show");
  });


  $("#datebasicEnd").datetimepicker({
    lang: "kr",
    timepicker: false,
    format: "Y/m/d",
    formatDate: "Y/m/d",
  });

  $("#open").click(function () {
    $("#datebasicEnd").datetimepicker("show");
  });

  // 달력-년월일#2 
  $("#datebasicStart2").datetimepicker({
    lang: "kr",
    timepicker: false,
    format: "Y/m/d",
    formatDate: "Y/m/d",
  });

  $("#open").click(function () {
    $("#datebasicStart2").datetimepicker("show");
  });


  $("#datebasicEnd2").datetimepicker({
    lang: "kr",
    timepicker: false,
    format: "Y/m/d",
    formatDate: "Y/m/d",
  });

  $("#open").click(function () {
    $("#datebasicEnd2").datetimepicker("show");
  });

  // 달력-년월일#3 
  $("#datebasicStart3").datetimepicker({
    lang: "kr",
    timepicker: false,
    format: "Y/m/d",
    formatDate: "Y/m/d",
  });

  $("#open").click(function () {
    $("#datebasicStart3").datetimepicker("show");
  });


  $("#datebasicEnd3").datetimepicker({
    lang: "kr",
    timepicker: false,
    format: "Y/m/d",
    formatDate: "Y/m/d",
  });

  $("#open").click(function () {
    $("#datebasicEnd3").datetimepicker("show");
  });


});

$(function () {
  // Appending the timepicker element to the body or a container




});