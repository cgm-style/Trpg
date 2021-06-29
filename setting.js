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

    for (const clickChartControl of chartControl) {  // 종족설명 토글 버튼
        clickChartControl.addEventListener("click", function(event) {
            console.dir(event.target);
            if(event.target.parentNode.style.zIndex === "")    {
                event.target.parentNode.parentNode.style.right = "-35px";
                chartControl.parentNode.style.zIndex = "0" ;
                event.target.parentNode.style.zIndex === "1" ;
            }else if (event.target.parentNode.style.zIndex === "1") {
                event.target.parentNode.parentNode.style.right = "-780px";
                event.target.parentNode.style.zIndex = "0";
            }else   {
                console.log("흠")
            }
        });
      }
}