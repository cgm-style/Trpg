// map -> 직접 생성 방식 -> 본인이 직접 입력 방식 - > 랜덤 생성 방식
function loadGame(leadLoadGameSet) {
    start.style.display = "block";  // 배경화면 자연스럽게 올라오게 하기

    setTimeout(() => {  // 보이게한 창을 자연스럽게 하기위한 값
        start.className = "opacity";  // 바탕이 올라온 후
    }, 500);

    for(loadSheetNum = 0; loadSheetNum < leadLoadGameSet.length; loadSheetNum++)  {
        addSheet(loadSheetNum,leadLoadGameSet);
    }

    const chartControl = document.querySelectorAll(".chartControl");

    for (const clickChartControl of chartControl) { // 캐릭터 시트 만든 후 오른쪽 에서 버튼 누르면 보이게 아는 액션.
        clickChartControl.addEventListener("click", function(event,chartControl) {
            if(event.target.parentNode.style.zIndex === "" || event.target.parentNode.style.zIndex === "0")    {
                // 핵심은 모든 애들한테 한번 0값을 주면 초기화 개념이라 충분히 가능
                event.target.parentNode.parentNode.style.right = "-35px";
                let changeResetIndex = document.querySelectorAll(".chartControl");
                for(resetIndex = 0; resetIndex < document.querySelectorAll(".chartControl").length; resetIndex++){
                    changeResetIndex[resetIndex].parentNode.style.zIndex = "0";
                }
                clickChartControl.parentNode.style.zIndex = "1" ;
            }else if (event.target.parentNode.style.zIndex === "1") {
                event.target.parentNode.parentNode.style.right = "-780px";
                clickChartControl.parentNode.style.zIndex = "0" ;
            }
        });
    }
    startTrpg();
}