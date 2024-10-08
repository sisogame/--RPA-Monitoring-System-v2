
$( document ).ready(function() {
    
	$("#startMon").monthpicker();
	$("#endMon").monthpicker();
	
	$("#startMon2").monthpicker();
	$("#endMon2").monthpicker();

	// #####111
	$("#startMon").on("change", function(){
		gfnDisableMonth(this.value, $('#endMon'), "strDate");
	});
	$("#endMon").on("change", function(){
		gfnDisableMonth(this.value, $('#startMon'), "endDate");
	});

	// 연도를 변경하는 경우
	$('#endMon').monthpicker().on('monthpicker-change-year', function(e, year) {
		gfnDisableMonth($('#startMon').val(), $("#endMon"), "endDate", year);
	});
	$('#startMon').monthpicker().on('monthpicker-change-year', function(e, year) {
		gfnDisableMonth($('#endMon').val(), $("#startMon"), "strDate", year);
	});

	// #####222
	$("#startMon2").on("change", function(){
		gfnDisableMonth(this.value, $('#endMon2'), "strDate");
	});
	$("#endMon2").on("change", function(){
		gfnDisableMonth(this.value, $('#startMon2'), "endDate");
	});

	// 연도를 변경하는 경우
	$('#endMon2').monthpicker().on('monthpicker-change-year', function(e, year) {
		gfnDisableMonth($('#startMon2').val(), $("#endMon2"), "endDate", year);
	});
	$('#startMon2').monthpicker().on('monthpicker-change-year', function(e, year) {
		gfnDisableMonth($('#endMon2').val(), $("#startMon2"), "strDate", year);
	});

});


/**
 * monthPicker minDt/maxDt 조절
 * obj : 해당 날짜 객체
 * targetId : 대상 날짜
 * dateType : 시작일, 종료일인지 구분
 * chgYear : 연도를 변경한 경우
 */
function gfnDisableMonth(obj, targetId, dateType, chgYear){
	var targetValArr = [];// 비활성화할 배열
	var type = "";
	var dateObj = new Date(obj);
    var month = dateObj.getMonth() + 1;
    var cnt = 0 ;
    var objYear = "";
	var targetYear = "";

    if( dateType == "strDate" ){ // 시작일이라면
		// 년도 세팅
		if( gfnIsEmpty(chgYear) ) { // 연도를 변경하지 않은 경우
			targetYear = targetId.val().substr(0,4);
			objYear = chgYear;
		} else {
			targetYear = obj.substr(0,4);
			objYear = chgYear;
		}

		if(objYear > targetYear ) {
	    	type = 'allDisable';
	    }else if(objYear < targetYear) {
	    	type = 'allAble';
	    }else {// 같은 연도일 경우
	    	type = 'min';
	        if( !gfnIsEmpty(chgYear) ) { // 연도를 변경한 경우 max 로 값 변경
				type = 'max';
			}
	    }
	}else if( dateType == "endDate" ){ // 종료일이라면
		// 년도 세팅
		if( gfnIsEmpty(chgYear) ) { // 연도를 변경하지 않은 경우
			objYear = obj.substr(0,4);
			targetYear = targetId.val().substr(0,4);
		} else {
			objYear = chgYear;
			targetYear = obj.substr(0,4);
		}

		if(objYear > targetYear ) {
			type = 'allAble';

	    }else if(objYear < targetYear) {
	    	type = 'allDisable';
	    }else {// 같은 연도일 경우
	    	type = 'max';
	    	if( !gfnIsEmpty(chgYear) ) {// 연도를 변경한 경우 min 로 값 변경
				type = 'min';
			}
	    }
	}

    if(type == 'min'){
		// 해당하지 않는 월 disable
	    for ( var i = 1 ; i < month; i ++){ // min일 경우 1월부터 해당 월까지 disable
	        targetValArr[cnt++] = i;
	    }
	}else if(type == 'max'){
		// 해당하지 않는 월 disable
	    for ( var i = month+1 ; i < 13; i ++){ // max일 경우 해당 월부터 12월까지 disable
	        targetValArr[cnt++] = i;
	    }
	}else if(type == 'allAble'){ // 다 활성화
        targetValArr = [];
	}else{
		for ( var i = 1 ; i < 13; i ++){ // 다 비활성화
	        targetValArr[cnt++] = i;
	    }
	}
	targetId.monthpicker('disableMonths', targetValArr);
}

// 빈 값 check
var gfnIsEmpty = function(value) {
    if( $.trim(value) == "" || value == null || value == undefined
        || (value != null && typeof value == "object" && !Object.keys(value).length) ) {
        return true;
    } else {
        return false;
    }
}

//날짜 포멧(yyyy-mm-dd)
function dateFormat(date){
	let dateFormat = date.getFullYear() + "-" ;
		dateFormat += ((date.getMonth()+1) < 10 ? "0" + (date.getMonth()+1) : (date.getMonth()+1))  + "-";
		dateFormat += (date.getDate() < 10 ? "0"+date.getDate() : date.getDate());
	return dateFormat;
}