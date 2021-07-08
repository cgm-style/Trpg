function startTrpg()    {
    jsChatLog.addEventListener("submit",function(event){
        event.preventDefault();

        const chatKeyWord = event.target[0].value;

        if(chatKeyWord.indexOf('d') != -1 ) {   // 주사위 굴림이 있을때 판정
            let checkChatWordOwn = chatKeyWord.split('d');
            checkChatWordTwo = [Number(checkChatWordOwn[1]),0]
            checkChatWordThree  = ["기타사항","기타사항"];


            if(checkChatWordOwn[1].indexOf('/') != -1 )    {   // #d#+#/이유 로 끝날때

                checkChatWordTwo = checkChatWordOwn[1].split('+');
                checkChatWordThree  = checkChatWordTwo[1].split('/');

                checkChatWordTwo =  [Number(checkChatWordTwo[0]),Number(checkChatWordThree[0])]

                checkChatWordOwn = [Number(checkChatWordOwn[0]),Number(checkChatWordTwo[0])];

            }else if(checkChatWordOwn[1].indexOf('+') != -1)   {   // #D#+# 으로 끝날때
                
                checkChatWordTwo = checkChatWordOwn[1].split('+');
                checkChatWordThree  = [checkChatWordTwo[1],"기타사항"];

                checkChatWordOwn = [Number(checkChatWordOwn[0]),Number(checkChatWordTwo[1])];

            }
            console.log(checkChatWordOwn[0],checkChatWordTwo[0],checkChatWordTwo[1],checkChatWordThree[1])
            totalDiceTool(checkChatWordOwn[0],checkChatWordTwo[0],checkChatWordTwo[1],checkChatWordThree[1])
        }else if(chatKeyWord.indexOf('주사위 로그') != -1 )    {    // 주사위 로그 확인 
            logBox.style.display = "block";

            for(dicelognum = 1; dicelognum < diceLog.length; dicelognum++)    {
                logBox.innerHTML += `<p>${diceLog[dicelognum].Dice_log}</p></br>`;
                console.log(diceLog[dicelognum]);
            }

            setTimeout(() => {
                logBox.className += "opacity";
            }, 100);

            const logBoxClose = document.querySelector('#logBox span');
            logBoxClose.addEventListener("click",function(){
                logBox.innerHTML = "";
                logBox.className -= "opacity";
                setTimeout(() => {
                    logBox.style.display = "none";
                }, 600);
            })
        }else if(chatKeyWord.indexOf('로그 삭제') != -1 )  {    // 로그 삭제
            localStorage.removeItem("diceLog");
        }else if(chatKeyWord.indexOf('캐릭터 삭제') != -1 )  {    // 캐릭터 삭제
            localStorage.removeItem("chartKey");
        }

        event.target[0].value = "";
    })
}