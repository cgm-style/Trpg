function totalDiceTool(count,maxDice,logName)    {

    const diceBox = document.querySelector("#popupDiceBox"),
          addDiceDiv = document.createElement("div"),
          addDiceDivP = document.createElement("p");


    let totalDiceRolling = null;    // 주사위 값 초기화
    totalDiceValue = 0; // 주사위 값 초기화

    for(diceNum = 1; diceNum <= count; diceNum++)   {
        totalDiceRolling =  Math.floor(Math.random() * maxDice)+1;

        totalDiceValue = totalDiceRolling +  totalDiceValue;
    }

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
        diceValue = {"주사위 로그" : `${diceMonth}월달 ${diceDay}일 ${diceHours}시 ${diceMinutes}분 ${diceSeconds}초 : ${logName}으로 인해 굴리셨으며 주사위의 값은 ${totalDiceValue}이였습니다.`};
    
        diceLog.push(diceValue);
        localStorage.setItem(`diceLog`,JSON.stringify(diceLog));

    console.log(diceLog);
    return totalDiceValue;
}