$(document).ready(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".st2");

    navItems.forEach((item) => {
      item.addEventListener("click", function () {
        navItems.forEach((navItem) => navItem.classList.remove("active"));
        this.classList.add("active");
      });
    });
  });
});

//팝업
$(function () {
  var target = document.querySelectorAll(".pop-open");
  var btnPopClose01 = document.querySelectorAll(".pop-close01");
  var btnPopClose02 = document.querySelectorAll(".pop-close02");
  var btnPopClose03 = document.querySelectorAll(".pop-close03");
  var btnPopClose04 = document.querySelectorAll(".pop-close04");
  var targetID;

  // 팝업 열기
  for (var i = 0; i < target.length; i++) {
    target[i].addEventListener("click", function () {
      targetID = this.getAttribute("href");
      document.querySelector(targetID).style.display = "block";
    });
  }
});

//팝업 닫기
function dEI(elementID) {
  return document.getElementById(elementID);
}

function closeLayer(IdName) {
  var pop = dEI(IdName);
  pop.style.display = "none";
}

//팝업 드레그

$(function () {
  $("#draggable").draggable();
  $("#draggable02").draggable();
  $("#draggable03").draggable();
  $("#draggable04").draggable();
  $("#draggable05").draggable();
  $("#draggable06").draggable();
});

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
      // timeFormat: "hh:mm:ss",
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
      // timeFormat: "hh:mm:ss",
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

