function totalDiceTool(count,maxDice,plusDice,logName)    {

    const diceBox = document.querySelector("#popupDiceBox"),
          addDiceDiv = document.createElement("div"),
          addDiceDivP = document.createElement("p");


    let totalDiceRolling = null,    // 주사위 값 초기화
        totalDiceValue = 0, // 주사위 값 보정값 추가 초기화
        subTotalDiceValue = 0,  // 순수 주사위 총합
        allTotalDiceValue = "개별 값 : ";

    for(let diceNum = 1; diceNum <= count; diceNum++)   {
        totalDiceRolling =  Math.floor(Math.random() * maxDice)+1;

        totalDiceValue = totalDiceRolling +  totalDiceValue;
        allTotalDiceValue += `${totalDiceRolling},`;
    }
    subTotalDiceValue = totalDiceValue;
    totalDiceValue = Number(totalDiceValue) + Number(plusDice);

    diceBox.appendChild(addDiceDiv);
    addDiceDiv.appendChild(addDiceDivP);

    addDiceDiv.className = "popupDice";

    addDiceDivP.innerText = `주사위 값 : ${totalDiceValue}`;
    setTimeout(() => {
        addDiceDiv.className += " opacity";
    }, 100);

    setTimeout(() => {
        addDiceDiv.remove();
    }, 2000);

    let diceNowTime = new Date(),
        diceMonth = diceNowTime.getMonth()+1,
        diceDay = diceNowTime.getDate(),
        diceHours = diceNowTime.getHours(),
        diceMinutes = diceNowTime.getMinutes(),
        diceSeconds = diceNowTime.getSeconds(),
        diceValue = {"Dice_log" : `${diceMonth}월 ${diceDay}일 ${diceHours}시 ${diceMinutes}분 ${diceSeconds}초 : 사유 : ${logName} / ${maxDice}면체 주사위 ${count}개 보정값 : ${plusDice} / ${allTotalDiceValue} / 주사위 총합 :${totalDiceValue}`};

        diceLog.push(diceValue);
        localStorage.setItem(`diceLog`,JSON.stringify(diceLog));

    return totalDiceValue;
}