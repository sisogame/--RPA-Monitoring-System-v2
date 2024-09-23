$(document).ready(function () {


    document.addEventListener('DOMContentLoaded',
        function () {
            // 20240720 add script - ley
            const navItems = document
                .querySelectorAll('.st2');

            navItems.forEach(item => {
                item.addEventListener('click',
                    function () {
                        navItems.forEach(navItem => navItem
                            .classList.remove('active'));
                        this.classList.add('active');
                    });
            });
        });

});

//팝업
$(function () {
    var target = document.querySelectorAll('.pop-open');
    var btnPopClose01 = document.querySelectorAll('.pop-close01');
    var btnPopClose02 = document.querySelectorAll('.pop-close02');
    var btnPopClose03 = document.querySelectorAll('.pop-close03');
    var btnPopClose04 = document.querySelectorAll('.pop-close04');
    var targetID;

    // 팝업 열기
    for (var i = 0; i < target.length; i++) {
        target[i].addEventListener('click', function () {
            targetID = this.getAttribute('href');
            document.querySelector(targetID).style.display = 'block';
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
