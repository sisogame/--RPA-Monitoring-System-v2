// 달력

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

  $("#datebasicSvc").datetimepicker({
    lang: "kr",
    timepicker: false,
    format: "Y/m/d",
    formatDate: "Y/m/d",
  });

  $("#open").click(function () {
    $("#datebasicSvc").datetimepicker("show");
  });

});