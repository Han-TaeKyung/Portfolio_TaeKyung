$(function () {
    $(".login_wrap li").bind("click", function() {
        $(this).toggleClass("login_on");
    });

});

var nowZoom = 100;

function zoomOut() {   // 화면크기축소
	nowZoom = nowZoom - 10;
	if(nowZoom <= 70) nowZoom = 70;   // 화면크기 최대 축소율 70%
	zooms();
}

function zoomIn() {   // 화면크기확대
	nowZoom = nowZoom + 20;
	if(nowZoom >= 200) nowZoom = 200;   // 화면크기 최대 확대율 200%
	zooms();
}

function zooms() {
	document.body.style.zoom = nowZoom + "%";
	if(nowZoom == 70) {
		alert("더 이상 축소할 수 없습니다.");   // 화면 축소율이 70% 이하일 경우 경고창
	}
	if(nowZoom == 200) {
		alert("더 이상 확대할 수 없습니다.");   // 화면 확대율이 200% 이상일 경우 경고창
	}
}
