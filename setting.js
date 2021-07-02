function chartSetting() { // 모든 시트를 생성 후 실행되는 단
    const loadLocalSet = localStorage.getItem("chartKey"),  //  로컬스토리지에서 값을 가져옴
          jsChartSet = document.querySelector("#jsChartSet");   //  캐릭터 차트 선택

    let leadLocalSet = JSON.parse(loadLocalSet);    // local 저장한 내용 불러오기

    console.log(leadLocalSet);

    for(sheetNum = 0; sheetNum < leadLocalSet.length; sheetNum++)  {
        addSheet(sheetNum,leadLocalSet);
    }

    const chartControl = document.querySelectorAll(".chartControl");
    console.log(chartControl);

    for (const clickChartControl of chartControl) {
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
}