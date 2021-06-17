// map -> 직접 생성 방식 -> 본인이 직접 입력 방식 - > 랜덤 생성 방식
function loadGame(leadLoadGameSet) {
    start.style.display = "block";  // 배경화면 자연스럽게 올라오게 하기

    setTimeout(() => {  // 보이게한 창을 자연스럽게 하기위한 값
        start.className = "opacity";  // 바탕이 올라온 후
    }, 500);

    console.dir(leadLoadGameSet);

    for(loadSheetNum = 0; loadSheetNum < leadLoadGameSet.length; loadSheetNum++)  {
        addSheet(loadSheetNum,leadLoadGameSet);
    }
}