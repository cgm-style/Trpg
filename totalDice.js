function totalDiceTool(count,maxDice)    {
    let totalDiceRolling = null;    // 주사위 값 초기화
    totalDiceValue = 0; // 주사위 값 초기화

    for(diceNum = 1; diceNum <= count; diceNum++)   {
        totalDiceRolling =  Math.floor(Math.random() * maxDice)+1;

        totalDiceValue = totalDiceRolling +  totalDiceValue;
    }

    return totalDiceValue;
}