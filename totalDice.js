function totalDiceTool(count,maxDice,plusDice,logName)    {

    const diceBox = document.querySelector("#popupDiceBox"),
          addDiceDiv = document.createElement("div"),
          addDiceDivP = document.createElement("p");


    let totalDiceRolling = null;    // 주사위 값 초기화
    totalDiceValue = 0; // 주사위 값 초기화

    for(diceNum = 1; diceNum <= count; diceNum++)   {
        totalDiceRolling =  Math.floor(Math.random() * maxDice)+1;

        totalDiceValue = totalDiceRolling +  totalDiceValue;
    }

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
        diceValue = {"Dice_log" : `${diceMonth}월 ${diceDay}일 ${diceHours}시 ${diceMinutes}분 ${diceSeconds}초 : ${logName}으로 인해 굴리셨으며 주사위는${maxDice}면체 주사위 ${count}개 였으며 추가 주사위 보정값은 ${plusDice} 였습니다. 주사위의 총합은${totalDiceValue} 입니다.`};
    
        diceLog.push(diceValue);
        localStorage.setItem(`diceLog`,JSON.stringify(diceLog));

    return totalDiceValue;
}