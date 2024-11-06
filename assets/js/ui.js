// $(document).ready(function () {
//   document.addEventListener("DOMContentLoaded", function () {
//     const navItems = document.querySelectorAll(".side-nav-on");

//     navItems.forEach((item) => {
//       item.addEventListener("click", function () {
//         navItems.forEach((navItem) => navItem.classList.remove("active"));
//         this.classList.add("active");
//       });
//     });
//   });
// });



  document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".side-nav-on");

    navItems.forEach((item) => {
      item.addEventListener("click", function () {
        navItems.forEach((navItem) => navItem.classList.remove("active"));
        this.classList.add("active");
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

//인풋박스 가격 콤마 
$(function () {
  $(document).on("keypress", ".just-number", function (e) {
    let charCode = (e.which) ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
  });
  $(document).on('keyup', '.price-format-input', function (e) {
    let val = this.value;
    val = val.replace(/,/g, "");
    if (val.length > 3) {
      let noCommas = Math.ceil(val.length / 3) - 1;
      let remain = val.length - (noCommas * 3);
      let newVal = [];
      for (let i = 0; i < noCommas; i++) {
        newVal.unshift(val.substr(val.length - (i * 3) - 3, 3));
      }
      newVal.unshift(val.substr(0, remain));
      this.value = newVal;
    }
    else {
      this.value = val;
    }
  });
  
  $(document).ready(function(){
    $('#input-price').focus();
  })

});


