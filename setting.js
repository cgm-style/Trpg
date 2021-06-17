function chartSetting() { // 모든 시트를 생성 후 실행되는 단
    const loadLocalSet = localStorage.getItem("chartKey"),  //  로컬스토리지에서 값을 가져옴
          jsChartSet = document.querySelector("#jsChartSet");   //  캐릭터 차트 선택

    let leadLocalSet = JSON.parse(loadLocalSet);    // local 저장한 내용 불러오기

    console.log(leadLocalSet);

    for(sheetNum = 0; sheetNum < leadLocalSet.length; sheetNum++)  {
        addSheet(sheetNum,leadLocalSet);
    }
}