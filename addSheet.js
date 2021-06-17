function addSheet(num,leadLoadGameSet) {
    let myStr = leadLoadGameSet[num].str,   // 힘
        myDex =  leadLoadGameSet[num].dex,  // 민첩
        myCon = leadLoadGameSet[num].con,   // 건강
        myInt = leadLoadGameSet[num].int,   // 지능
        myWis = leadLoadGameSet[num].wis,   // 지혜
        myCha = leadLoadGameSet[num].cha,   // 매력
        myAge = leadLoadGameSet[num].age,   // 나이
        myJob = leadLoadGameSet[num].job,   // 직업
        myName = leadLoadGameSet[num].name, // 이름
        myEntp = leadLoadGameSet[num].Entp, // 종족
        mySpeed = leadLoadGameSet[num].speed,   // 이동속도
        myLevel = leadLoadGameSet[num].level,   // 레벨
        myInspiration = leadLoadGameSet[num].inspiration,   // 고양감
        myjsMaxHitPoint = leadLoadGameSet[num].jsMaxHitPoint,  // 최대 히트 포인트
        fixset = 0, // 수정치 입력할 변수
        entpStr = 0, // 힘 종족 수정치
        entpDex = 0, // 민첩 종족 수정치
        entpCon = 0, // 건강 종족 수정치
        entpInt = 0, // 지능 종족 수정치
        entpWis = 0, // 지혜 종족 수정치
        entpCha = 0, // 매력 종족 수정치
        fixstateStr = 0,    // 최종 힘 수정치
        fixstateDex = 0,    // 최종 민첩 수정치
        fixstateCon = 0,    // 최종 건강 수정치
        fixstateInt = 0,    // 최종 지능 수정치
        fixstateWis = 0,    // 최종 지혜 수정치
        fixstateCha = 0,    // 최종 매력 수정치
        proficiency = 0;    // 능숙도 보너스

        if(myEntp === "휴먼")   {   // 종족에 따른 수치 입력
            entpStr = 1;
            entpDex = 1;
            entpCon = 1;
            entpInt = 1;
            entpWis = 1;
            entpCha = 1;
            movement = 30;
        }else if(myEntp === "바위 노움")  {
            entpInt = 2;
            entpCon = 1;
            movement = 25;
        }else if(myEntp === "숲 노움")  {
            entpInt = 2;
            entpDex = 1;
            movement = 25;
        }else if(myEntp === "언덕 드워프")  {
            entpCon = 2;
            entpWis = 1;
            movement = 25;
        }else if(myEntp === "산 드워프")  {
            entpCon = 2;
            entpStr = 2;
            movement = 25;
        }else if(myEntp === "하이 엘프")  {
            entpDex = 2;
            entpInt = 1;
            movement = 30;
        }else if(myEntp === "우드 엘프")  {
            entpDex = 2;
            entpWis = 1;
            movement = 35;
        }else if(myEntp === "다크 엘프")  {
            entpDex = 2;
            entpCha = 1;
            movement = 30;
        }else if(myEntp === "하프 엘프")  {
            entpCha = 2;
            movement = 30;
        }else if(myEntp === "하프 오크")  {
            entpStr = 2;
            entpCon = 1;
            movement = 30;
        }else if(myEntp === "라이트 풋")  {
            entpDex = 2;
            movement = 25;
        }else if(myEntp === "드래곤본")  {
            entpStr = 2;
            entpCha = 1;
            movement = 30;
        }else if(myEntp === "티플링")  {
            entpInt = 1;
            entpCha = 2;
            movement = 30;
        };

        if(myLevel <= 4){
            proficiency = 2;
        }else if (myLevel >= 5 && myLevel <= 8) {
            proficiency = 3;
        }else if (myLevel >= 9 && myLevel <= 12) {
            proficiency = 4;
        }else if (myLevel >= 13 && myLevel <= 16) {
            proficiency = 5;
        }else if (myLevel >= 17 && myLevel <= 20) {
            proficiency = 6;
        }

        function fixState(state) {  //  스탯에 따른 수정치를 구하는 단
            if(state <= 3)  {
                fixset = "-3"
            }else if (state >= 4 && state <= 5)  {
                fixset = "-2"
            }else if (state >= 6 && state <= 8)  {
                fixset = "-1"
            }else if (state >= 9 && state <= 12)  {
                fixset = "0"
            }else if (state >= 13 && state <= 15)  {
                fixset = "+1"
            }else if (state >= 16 && state <= 17)  {
                fixset = "+2"
            }else if (state >= 17)  {
                fixset = "+3"
            }

            fixstateStr = Number(fixset) +  entpStr;    // 수정치 계산
            fixstateDex = Number(fixset) +  entpDex;
            fixstateCon = Number(fixset) +  entpCon;
            fixstateInt = Number(fixset) +  entpInt;
            fixstateWis = Number(fixset) +  entpWis;
            fixstateCha = Number(fixset) +  entpCha;

            if(fixstateStr >= 0)    {    // 양수라면 +를 붙여 가독성을 올려줌
                fixstateStr = `+${fixstateStr}`;
            }
            if(fixstateDex >= 0)  {
                fixstateDex = `+${fixstateDex}`;
            }
            if(fixstateCon >= 0)  {
                fixstateCon = `+${fixstateCon}`;
            }
            if(fixstateInt >= 0)  {
                fixstateInt = `+${fixstateInt}`;
            }
            if(fixstateWis >= 0)  {
                fixstateWis = `+${fixstateWis}`;
            }
            if(fixstateCha >= 0)  {
                fixstateCha = `+${fixstateCha}`;
            };
            
        }




    /* 생성 정의 하는 단 */
    const chartBox = document.createElement("div"),
          
        chartControl = document.createElement("div"),

        chartContainer = document.createElement("div"),
            main_text = document.createElement("p"),
            main_title = document.createElement("div"),
                main_titleP1 = document.createElement("p"),
                main_titleP2 = document.createElement("p"),
            setBox1  = document.createElement("div"),
                setBox1p1 = document.createElement("p"),
                    setBox1p1span1 = document.createElement("span"),
                    setBox1p1span2 = document.createElement("span"),
                setBox1p2 = document.createElement("p"),
            setBox2  = document.createElement("div"),
                setBox2p1 = document.createElement("p"),
                    setBox2p1span = document.createElement("span"),
                setBox2p2 = document.createElement("p"),
            setBox3  = document.createElement("div"),
                setBox3p1 = document.createElement("p"),
                    setBox3p1span = document.createElement("span"),
                setBox3p2 = document.createElement("p"),
            setBox4  = document.createElement("div"),
                setBox4p1 = document.createElement("p"),
                    setBox4p1span = document.createElement("span"),
                setBox4p2 = document.createElement("p"),
            stateBox1 = document.createElement("div"),
                stateBox1p1 = document.createElement("p"),
                stateBox1p2 = document.createElement("p"),
                stateBox1p3 = document.createElement("p"),
            stateBox2 = document.createElement("div"),
                stateBox2p1 = document.createElement("p"),
                stateBox2p2 = document.createElement("p"),
                stateBox2p3 = document.createElement("p"),
            stateBox3 = document.createElement("div"),
                stateBox3p1 = document.createElement("p"),
                stateBox3p2 = document.createElement("p"),
                stateBox3p3 = document.createElement("p"),
            stateBox4 = document.createElement("div"),
                stateBox4p1 = document.createElement("p"),
                stateBox4p2 = document.createElement("p"),
                stateBox4p3 = document.createElement("p"),
            stateBox5 = document.createElement("div"),
                stateBox5p1 = document.createElement("p"),
                stateBox5p2 = document.createElement("p"),
                stateBox5p3 = document.createElement("p"),
            stateBox6 = document.createElement("div"),
                stateBox6p1 = document.createElement("p"),
                stateBox6p2 = document.createElement("p"),
                stateBox6p3 = document.createElement("p"),
            GuardBox = document.createElement("div"),
                GuardBoxp1 = document.createElement("p"),
                GuardBoxp2 = document.createElement("p"),
            inttBox = document.createElement("div"),
                inttBoxinput = document.createElement("input"),
                inttBoxp = document.createElement("p"),
            speedBox = document.createElement("div"),
                speedBoxp1 = document.createElement("p"),
                speedBoxp2 = document.createElement("p"),
            insPoint = document.createElement("div"),
                insPointp1 = document.createElement("p"),
                insPointp2 = document.createElement("p"),
            propBonusPoint = document.createElement("div"),
                propBonusPointp1 = document.createElement("p"),
                propBonusPointp2 = document.createElement("p"),
            myTextArea1 = document.createElement("div"),
                myTextArea1textarea = document.createElement("textarea"),
                myTextArea1p = document.createElement("p"),
            myTextArea2 = document.createElement("div"),
                myTextArea2textarea = document.createElement("textarea"),
                myTextArea2p = document.createElement("p"),
            myTextArea3 = document.createElement("div"),
                myTextArea3textarea = document.createElement("textarea"),
                myTextArea3p = document.createElement("p"),
            myTextArea4 = document.createElement("div"),
                myTextArea4textarea = document.createElement("textarea"),
                myTextArea4p = document.createElement("p"),
            hitPointsBox = document.createElement("div"),
                hitPointsBoxp1  = document.createElement("p"),
                hitPointsBoxp2  = document.createElement("p"),
                hitPointsBoxp3  = document.createElement("p"),
            hitPointsBox1 = document.createElement("div"),
                hitPointsBox1p1 = document.createElement("p"),
                hitPointsBox1p2 = document.createElement("p"),
                hitPointsBox1p3 = document.createElement("p"),
            hitDiceBox = document.createElement("div"),
                hitDiceBoxp1 = document.createElement("p"),
                    hitDiceBoxp1span = document.createElement("span"),
                hitDiceBoxp2 = document.createElement("p"),
                hitDiceBoxp3 = document.createElement("p"),
            deathBox = document.createElement("div"),
                deathBoxform = document.createElement("form"),
                    deathBoxformdiv1 = document.createElement("div"),
                        deathBoxformdiv1p = document.createElement("p"),
                        deathBoxformdiv1input = document.createElement("input"),
                    deathBoxformdiv2 = document.createElement("div"),
                        deathBoxformdiv2p = document.createElement("p"),
                        deathBoxformdiv2input = document.createElement("input"),
                    deathBoxformdiv3 = document.createElement("div"),
            savincBox = document.createElement("form"),
                savincBoxdiv1 = document.createElement("div"),
                    savincBoxdiv1input = document.createElement("input"),
                    savincBoxdiv1p1 = document.createElement("p"),
                    savincBoxdiv1p2 = document.createElement("p"),
                    savincBoxdiv1p3 = document.createElement("p"),
                savincBoxdiv2 = document.createElement("div"),
                    savincBoxdiv2input = document.createElement("input"),
                    savincBoxdiv2p1 = document.createElement("p"),
                    savincBoxdiv2p2 = document.createElement("p"),
                    savincBoxdiv2p3 = document.createElement("p"),
                savincBoxdiv3 = document.createElement("div"),
                    savincBoxdiv3input = document.createElement("input"),
                    savincBoxdiv3p1 = document.createElement("p"),
                    savincBoxdiv3p2 = document.createElement("p"),
                    savincBoxdiv3p3 = document.createElement("p"),
                savincBoxdiv4 = document.createElement("div"),
                    savincBoxdiv4input = document.createElement("input"),
                    savincBoxdiv4p1 = document.createElement("p"),
                    savincBoxdiv4p2 = document.createElement("p"),
                    savincBoxdiv4p3 = document.createElement("p"),
                savincBoxdiv5 = document.createElement("div"),
                    savincBoxdiv5input = document.createElement("input"),
                    savincBoxdiv5p1 = document.createElement("p"),
                    savincBoxdiv5p2 = document.createElement("p"),
                    savincBoxdiv5p3 = document.createElement("p"),
                savincBoxdiv6 = document.createElement("div"),
                    savincBoxdiv6input = document.createElement("input"),
                    savincBoxdiv6p1 = document.createElement("p"),
                    savincBoxdiv6p2 = document.createElement("p"),
                    savincBoxdiv6p3 = document.createElement("p"),
                savincBoxp = document.createElement("p"),
            skillBox = document.createElement("form"),
                skillBoxdiv1 = document.createElement("div"),
                    skillBoxdiv1input = document.createElement("input"),
                    skillBoxdiv1p1 = document.createElement("p"),
                    skillBoxdiv1p2 = document.createElement("p"),
                skillBoxdiv2 = document.createElement("div"),
                    skillBoxdiv2input = document.createElement("input"),
                    skillBoxdiv2p1 = document.createElement("p"),
                    skillBoxdiv2p2 = document.createElement("p"),
                skillBoxdiv3 = document.createElement("div"),
                    skillBoxdiv3input = document.createElement("input"),
                    skillBoxdiv3p1 = document.createElement("p"),
                    skillBoxdiv3p2 = document.createElement("p"),
                skillBoxdiv4 = document.createElement("div"),
                    skillBoxdiv4input = document.createElement("input"),
                    skillBoxdiv4p1 = document.createElement("p"),
                    skillBoxdiv4p2 = document.createElement("p"),
                skillBoxdiv5 = document.createElement("div"),
                    skillBoxdiv5input = document.createElement("input"),
                    skillBoxdiv5p1 = document.createElement("p"),
                    skillBoxdiv5p2 = document.createElement("p"),
                skillBoxdiv6 = document.createElement("div"),
                    skillBoxdiv6input = document.createElement("input"),
                    skillBoxdiv6p1 = document.createElement("p"),
                    skillBoxdiv6p2 = document.createElement("p"),
                skillBoxdiv7 = document.createElement("div"),
                    skillBoxdiv7input = document.createElement("input"),
                    skillBoxdiv7p1 = document.createElement("p"),
                    skillBoxdiv7p2 = document.createElement("p"),
                skillBoxdiv8 = document.createElement("div"),
                    skillBoxdiv8input = document.createElement("input"),
                    skillBoxdiv8p1 = document.createElement("p"),
                    skillBoxdiv8p2 = document.createElement("p"),
                skillBoxdiv9 = document.createElement("div"),
                    skillBoxdiv9input = document.createElement("input"),
                    skillBoxdiv9p1 = document.createElement("p"),
                    skillBoxdiv9p2 = document.createElement("p"),
                skillBoxdiv10 = document.createElement("div"),
                    skillBoxdiv10input = document.createElement("input"),
                    skillBoxdiv10p1 = document.createElement("p"),
                    skillBoxdiv10p2 = document.createElement("p"),
                skillBoxdiv11 = document.createElement("div"),
                    skillBoxdiv11input = document.createElement("input"),
                    skillBoxdiv11p1 = document.createElement("p"),
                    skillBoxdiv11p2 = document.createElement("p"),
                skillBoxdiv12 = document.createElement("div"),
                    skillBoxdiv12input = document.createElement("input"),
                    skillBoxdiv12p1 = document.createElement("p"),
                    skillBoxdiv12p2 = document.createElement("p"),
                skillBoxdiv13 = document.createElement("div"),
                    skillBoxdiv13input = document.createElement("input"),
                    skillBoxdiv13p1 = document.createElement("p"),
                    skillBoxdiv13p2 = document.createElement("p"),
                skillBoxdiv14 = document.createElement("div"),
                    skillBoxdiv14input = document.createElement("input"),
                    skillBoxdiv14p1 = document.createElement("p"),
                    skillBoxdiv14p2 = document.createElement("p"),
                skillBoxdiv15 = document.createElement("div"),
                    skillBoxdiv15input = document.createElement("input"),
                    skillBoxdiv15p1 = document.createElement("p"),
                    skillBoxdiv15p2 = document.createElement("p"),
                skillBoxdiv16 = document.createElement("div"),
                    skillBoxdiv16input = document.createElement("input"),
                    skillBoxdiv16p1 = document.createElement("p"),
                    skillBoxdiv16p2 = document.createElement("p"),
                skillBoxdiv17 = document.createElement("div"),
                    skillBoxdiv17input = document.createElement("input"),
                    skillBoxdiv17p1 = document.createElement("p"),
                    skillBoxdiv17p2 = document.createElement("p"),
                skillBoxdiv18 = document.createElement("div"),
                    skillBoxdiv18input = document.createElement("input"),
                    skillBoxdiv18p1 = document.createElement("p"),
                    skillBoxdiv18p2 = document.createElement("p"),
                skillBoxp = document.createElement("p"),
            passiveWisdom = document.createElement("div"),
                passiveWisdomp1 = document.createElement("p"),
                passiveWisdomp2 = document.createElement("p"),
            otherPro_Lang = document.createElement("div"),
                otherPro_Langp1 = document.createElement("p"),
                    otherPro_Langp1span = document.createElement("span"),
                otherPro_Langp2 = document.createElement("p"),
                    otherPro_Langp2span = document.createElement("span"),
                otherPro_Langp3 = document.createElement("p"),
                    otherPro_Langp3span = document.createElement("span"),
                otherPro_Langp4 = document.createElement("p"),
                    otherPro_Langp4span = document.createElement("span"),
                otherPro_Langp5 = document.createElement("p"),
            atkMagBox = document.createElement("div"),
                atkMagBoxp1 = document.createElement("p"),
                    atkMagBoxp1span1 = document.createElement("span"),
                    atkMagBoxp1span2 = document.createElement("span"),
                    atkMagBoxp1span3 = document.createElement("span"),
                atkMagBoxdiv1 = document.createElement("div"),
                    atkMagBoxdiv1input1 = document.createElement("input"), 
                    atkMagBoxdiv1input2 = document.createElement("input"), 
                    atkMagBoxdiv1input3 = document.createElement("input"), 
                atkMagBoxdiv2 = document.createElement("div"),
                    atkMagBoxdiv2input1 = document.createElement("input"), 
                    atkMagBoxdiv2input2 = document.createElement("input"), 
                    atkMagBoxdiv2input3 = document.createElement("input"), 
                atkMagBoxdiv3 = document.createElement("div"),
                    atkMagBoxdiv3input1 = document.createElement("input"), 
                    atkMagBoxdiv3input2 = document.createElement("input"), 
                    atkMagBoxdiv3input3 = document.createElement("input"), 
                atkMagBoxtextarea = document.createElement("textarea"),
                atkMagBoxp2 = document.createElement("p"),
            equBox = document.createElement("div"),
                equBoxdiv1 = document.createElement("div"),
                    equBoxdiv1p = document.createElement("p"),
                    equBoxdiv1input = document.createElement("input"),
                equBoxdiv2 = document.createElement("div"),
                    equBoxdiv2p = document.createElement("p"),
                    equBoxdiv2input = document.createElement("input"),
                equBoxdiv3 = document.createElement("div"),
                    equBoxdiv3p = document.createElement("p"),
                    equBoxdiv3input = document.createElement("input"),
                equBoxdiv4 = document.createElement("div"),
                    equBoxdiv4p = document.createElement("p"),
                    equBoxdiv4input = document.createElement("input"),
                equBoxdiv5 = document.createElement("div"),
                    equBoxdiv5p = document.createElement("p"),
                    equBoxdiv5input = document.createElement("input"),
                equBoxtextarea = document.createElement("textarea"),
                equBoxp = document.createElement("p"),
            traitsBox = document.createElement("div"),
                traitsBoxtextarea = document.createElement("textarea"),
                traitsBoxp = document.createElement("p");

    /* 생성 하는 단 */

    jsChartSet.appendChild(chartBox);   
        chartBox.appendChild(chartControl);
        chartBox.appendChild(chartContainer);
            chartContainer.appendChild(main_text);
            chartContainer.appendChild(main_title);
                main_title.appendChild(main_titleP1);
                main_title.appendChild(main_titleP2);
            chartContainer.appendChild(setBox1);
                setBox1.appendChild(setBox1p1);
                    setBox1p1.appendChild(setBox1p1span1);
                    setBox1p1.appendChild(setBox1p1span2);
                setBox1.appendChild(setBox1p2);
            chartContainer.appendChild(setBox2);
                setBox2.appendChild(setBox2p1);
                    setBox2p1.appendChild(setBox2p1span);
                setBox2.appendChild(setBox2p2);
            chartContainer.appendChild(setBox3);
                setBox3.appendChild(setBox3p1);
                    setBox3p1.appendChild(setBox3p1span);
                setBox3.appendChild(setBox3p2);
            chartContainer.appendChild(setBox4);
                setBox4.appendChild(setBox4p1);
                    setBox4p1.appendChild(setBox4p1span);
                setBox4.appendChild(setBox4p2);
            chartContainer.appendChild(stateBox1);
                stateBox1.appendChild(stateBox1p1);
                stateBox1.appendChild(stateBox1p2);
                stateBox1.appendChild(stateBox1p3);
            chartContainer.appendChild(stateBox2);
                stateBox2.appendChild(stateBox2p1);
                stateBox2.appendChild(stateBox2p2);
                stateBox2.appendChild(stateBox2p3);
            chartContainer.appendChild(stateBox3);
                stateBox3.appendChild(stateBox3p1);
                stateBox3.appendChild(stateBox3p2);
                stateBox3.appendChild(stateBox3p3);
            chartContainer.appendChild(stateBox4);
                stateBox4.appendChild(stateBox4p1);
                stateBox4.appendChild(stateBox4p2);
                stateBox4.appendChild(stateBox4p3);
            chartContainer.appendChild(stateBox5);
                stateBox5.appendChild(stateBox5p1);
                stateBox5.appendChild(stateBox5p2);
                stateBox5.appendChild(stateBox5p3);
            chartContainer.appendChild(stateBox6);
                stateBox6.appendChild(stateBox6p1);
                stateBox6.appendChild(stateBox6p2);
                stateBox6.appendChild(stateBox6p3);
            chartContainer.appendChild(GuardBox);
                GuardBox.appendChild(GuardBoxp1);
                GuardBox.appendChild(GuardBoxp2);
            chartContainer.appendChild(inttBox);
                inttBox.appendChild(inttBoxinput);
                inttBox.appendChild(inttBoxp);
            chartContainer.appendChild(speedBox);
                speedBox.appendChild(speedBoxp1);
                speedBox.appendChild(speedBoxp2);
            chartContainer.appendChild(insPoint);
                insPoint.appendChild(insPointp1);
                insPoint.appendChild(insPointp2);
            chartContainer.appendChild(propBonusPoint);
                propBonusPoint.appendChild(propBonusPointp1);
                propBonusPoint.appendChild(propBonusPointp2);
            chartContainer.appendChild(myTextArea1);
                myTextArea1.appendChild(myTextArea1textarea);
                myTextArea1.appendChild(myTextArea1p);
            chartContainer.appendChild(myTextArea2);
                myTextArea2.appendChild(myTextArea2textarea);
                myTextArea2.appendChild(myTextArea2p);
            chartContainer.appendChild(myTextArea3);
                myTextArea3.appendChild(myTextArea3textarea);
                myTextArea3.appendChild(myTextArea3p);
            chartContainer.appendChild(myTextArea4);
                myTextArea4.appendChild(myTextArea4textarea);
                myTextArea4.appendChild(myTextArea4p);
            chartContainer.appendChild(hitPointsBox);
                hitPointsBox.appendChild(hitPointsBoxp1);
                hitPointsBox.appendChild(hitPointsBoxp2);
                hitPointsBox.appendChild(hitPointsBoxp3);
            chartContainer.appendChild(hitPointsBox1);
                hitPointsBox1.appendChild(hitPointsBox1p1);
                hitPointsBox1.appendChild(hitPointsBox1p2);
                hitPointsBox1.appendChild(hitPointsBox1p3);
            chartContainer.appendChild(hitDiceBox);
                hitDiceBox.appendChild(hitDiceBoxp1);
                    hitDiceBoxp1.appendChild(hitDiceBoxp1span);
                hitDiceBox.appendChild(hitDiceBoxp2);
                hitDiceBox.appendChild(hitDiceBoxp3);
            chartContainer.appendChild(deathBox);
                deathBox.appendChild(deathBoxform);
                    deathBoxform.appendChild(deathBoxformdiv1);
                        deathBoxformdiv1.appendChild(deathBoxformdiv1p);
                        deathBoxformdiv1.appendChild(deathBoxformdiv1input);
                    deathBoxform.appendChild(deathBoxformdiv2);
                        deathBoxformdiv2.appendChild(deathBoxformdiv2p);
                        deathBoxformdiv2.appendChild(deathBoxformdiv2input);
                    deathBoxform.appendChild(deathBoxformdiv3);
            chartContainer.appendChild(savincBox);
                savincBox.appendChild(savincBoxdiv1);
                    savincBoxdiv1.appendChild(savincBoxdiv1input);
                    savincBoxdiv1.appendChild(savincBoxdiv1p1);
                    savincBoxdiv1.appendChild(savincBoxdiv1p2);
                    savincBoxdiv1.appendChild(savincBoxdiv1p3);
                savincBox.appendChild(savincBoxdiv2);
                    savincBoxdiv2.appendChild(savincBoxdiv2input);
                    savincBoxdiv2.appendChild(savincBoxdiv2p1);
                    savincBoxdiv2.appendChild(savincBoxdiv2p2);
                    savincBoxdiv2.appendChild(savincBoxdiv2p3);
                savincBox.appendChild(savincBoxdiv3);
                    savincBoxdiv3.appendChild(savincBoxdiv3input);
                    savincBoxdiv3.appendChild(savincBoxdiv3p1);
                    savincBoxdiv3.appendChild(savincBoxdiv3p2);
                    savincBoxdiv3.appendChild(savincBoxdiv3p3);
                savincBox.appendChild(savincBoxdiv4);
                    savincBoxdiv4.appendChild(savincBoxdiv4input);
                    savincBoxdiv4.appendChild(savincBoxdiv4p1);
                    savincBoxdiv4.appendChild(savincBoxdiv4p2);
                    savincBoxdiv4.appendChild(savincBoxdiv4p3);
                savincBox.appendChild(savincBoxdiv5);
                    savincBoxdiv5.appendChild(savincBoxdiv5input);
                    savincBoxdiv5.appendChild(savincBoxdiv5p1);
                    savincBoxdiv5.appendChild(savincBoxdiv5p2);
                    savincBoxdiv5.appendChild(savincBoxdiv5p3);
                savincBox.appendChild(savincBoxdiv6);
                    savincBoxdiv6.appendChild(savincBoxdiv6input);
                    savincBoxdiv6.appendChild(savincBoxdiv6p1);
                    savincBoxdiv6.appendChild(savincBoxdiv6p2);
                    savincBoxdiv6.appendChild(savincBoxdiv6p3);
                savincBox.appendChild(savincBoxp);
            chartContainer.appendChild(skillBox);
                skillBox.appendChild(skillBoxdiv1);
                    skillBoxdiv1.appendChild(skillBoxdiv1input);
                    skillBoxdiv1.appendChild(skillBoxdiv1p1);
                    skillBoxdiv1.appendChild(skillBoxdiv1p2);
                skillBox.appendChild(skillBoxdiv2);
                    skillBoxdiv2.appendChild(skillBoxdiv2input);
                    skillBoxdiv2.appendChild(skillBoxdiv2p1);
                    skillBoxdiv2.appendChild(skillBoxdiv2p2);
                skillBox.appendChild(skillBoxdiv3);
                    skillBoxdiv3.appendChild(skillBoxdiv3input);
                    skillBoxdiv3.appendChild(skillBoxdiv3p1);
                    skillBoxdiv3.appendChild(skillBoxdiv3p2);
                skillBox.appendChild(skillBoxdiv4);
                    skillBoxdiv4.appendChild(skillBoxdiv4input);
                    skillBoxdiv4.appendChild(skillBoxdiv4p1);
                    skillBoxdiv4.appendChild(skillBoxdiv4p2);
                skillBox.appendChild(skillBoxdiv5);
                    skillBoxdiv5.appendChild(skillBoxdiv5input);
                    skillBoxdiv5.appendChild(skillBoxdiv5p1);
                    skillBoxdiv5.appendChild(skillBoxdiv5p2);
                skillBox.appendChild(skillBoxdiv6);
                    skillBoxdiv6.appendChild(skillBoxdiv6input);
                    skillBoxdiv6.appendChild(skillBoxdiv6p1);
                    skillBoxdiv6.appendChild(skillBoxdiv6p2);
                skillBox.appendChild(skillBoxdiv7);
                    skillBoxdiv7.appendChild(skillBoxdiv7input);
                    skillBoxdiv7.appendChild(skillBoxdiv7p1);
                    skillBoxdiv7.appendChild(skillBoxdiv7p2);
                skillBox.appendChild(skillBoxdiv8);
                    skillBoxdiv8.appendChild(skillBoxdiv8input);
                    skillBoxdiv8.appendChild(skillBoxdiv8p1);
                    skillBoxdiv8.appendChild(skillBoxdiv8p2);
                skillBox.appendChild(skillBoxdiv9);
                    skillBoxdiv9.appendChild(skillBoxdiv9input);
                    skillBoxdiv9.appendChild(skillBoxdiv9p1);
                    skillBoxdiv9.appendChild(skillBoxdiv9p2);
                skillBox.appendChild(skillBoxdiv10);
                    skillBoxdiv10.appendChild(skillBoxdiv10input);
                    skillBoxdiv10.appendChild(skillBoxdiv10p1);
                    skillBoxdiv10.appendChild(skillBoxdiv10p2);
                skillBox.appendChild(skillBoxdiv11);
                    skillBoxdiv11.appendChild(skillBoxdiv11input);
                    skillBoxdiv11.appendChild(skillBoxdiv11p1);
                    skillBoxdiv11.appendChild(skillBoxdiv11p2);
                skillBox.appendChild(skillBoxdiv12);
                    skillBoxdiv12.appendChild(skillBoxdiv12input);
                    skillBoxdiv12.appendChild(skillBoxdiv12p1);
                    skillBoxdiv12.appendChild(skillBoxdiv12p2);
                skillBox.appendChild(skillBoxdiv13);
                    skillBoxdiv13.appendChild(skillBoxdiv13input);
                    skillBoxdiv13.appendChild(skillBoxdiv13p1);
                    skillBoxdiv13.appendChild(skillBoxdiv13p2);
                skillBox.appendChild(skillBoxdiv14);
                    skillBoxdiv14.appendChild(skillBoxdiv14input);
                    skillBoxdiv14.appendChild(skillBoxdiv14p1);
                    skillBoxdiv14.appendChild(skillBoxdiv14p2);
                skillBox.appendChild(skillBoxdiv15);
                    skillBoxdiv15.appendChild(skillBoxdiv15input);
                    skillBoxdiv15.appendChild(skillBoxdiv15p1);
                    skillBoxdiv15.appendChild(skillBoxdiv15p2);
                skillBox.appendChild(skillBoxdiv16);
                    skillBoxdiv16.appendChild(skillBoxdiv16input);
                    skillBoxdiv16.appendChild(skillBoxdiv16p1);
                    skillBoxdiv16.appendChild(skillBoxdiv16p2);
                skillBox.appendChild(skillBoxdiv17);
                    skillBoxdiv17.appendChild(skillBoxdiv17input);
                    skillBoxdiv17.appendChild(skillBoxdiv17p1);
                    skillBoxdiv17.appendChild(skillBoxdiv17p2);
                skillBox.appendChild(skillBoxdiv18);
                    skillBoxdiv18.appendChild(skillBoxdiv18input);
                    skillBoxdiv18.appendChild(skillBoxdiv18p1);
                    skillBoxdiv18.appendChild(skillBoxdiv18p2);
                skillBox.appendChild(skillBoxp);
            chartContainer.appendChild(passiveWisdom);
                passiveWisdom.appendChild(passiveWisdomp1);
                passiveWisdom.appendChild(passiveWisdomp2);
            chartContainer.appendChild(otherPro_Lang);
                otherPro_Lang.appendChild(otherPro_Langp1);
                    otherPro_Langp1.appendChild(otherPro_Langp1span);
                otherPro_Lang.appendChild(otherPro_Langp2);
                    otherPro_Langp2.appendChild(otherPro_Langp2span);
                otherPro_Lang.appendChild(otherPro_Langp3);
                    otherPro_Langp3.appendChild(otherPro_Langp3span);
                otherPro_Lang.appendChild(otherPro_Langp4);
                    otherPro_Langp4.appendChild(otherPro_Langp4span);
                otherPro_Lang.appendChild(otherPro_Langp5);
            chartContainer.appendChild(atkMagBox);
                atkMagBox.appendChild(atkMagBoxp1);
                    atkMagBoxp1.appendChild(atkMagBoxp1span1);
                    atkMagBoxp1.appendChild(atkMagBoxp1span2);
                    atkMagBoxp1.appendChild(atkMagBoxp1span3);
                atkMagBox.appendChild(atkMagBoxdiv1);
                    atkMagBoxdiv1.appendChild(atkMagBoxdiv1input1);
                    atkMagBoxdiv1.appendChild(atkMagBoxdiv1input2);
                    atkMagBoxdiv1.appendChild(atkMagBoxdiv1input3);
                atkMagBox.appendChild(atkMagBoxdiv2);
                    atkMagBoxdiv2.appendChild(atkMagBoxdiv2input1);
                    atkMagBoxdiv2.appendChild(atkMagBoxdiv2input2);
                    atkMagBoxdiv2.appendChild(atkMagBoxdiv2input3);
                atkMagBox.appendChild(atkMagBoxdiv3);
                    atkMagBoxdiv3.appendChild(atkMagBoxdiv3input1);
                    atkMagBoxdiv3.appendChild(atkMagBoxdiv3input2);
                    atkMagBoxdiv3.appendChild(atkMagBoxdiv3input3);
                atkMagBox.appendChild(atkMagBoxtextarea);
                atkMagBox.appendChild(atkMagBoxp2);
            chartContainer.appendChild(equBox);
                equBox.appendChild(equBoxdiv1);
                    equBoxdiv1.appendChild(equBoxdiv1p);
                    equBoxdiv1.appendChild(equBoxdiv1input);
                equBox.appendChild(equBoxdiv2);
                    equBoxdiv2.appendChild(equBoxdiv2p);
                    equBoxdiv2.appendChild(equBoxdiv2input);
                equBox.appendChild(equBoxdiv3);
                    equBoxdiv3.appendChild(equBoxdiv3p);
                    equBoxdiv3.appendChild(equBoxdiv3input);
                equBox.appendChild(equBoxdiv4);
                    equBoxdiv4.appendChild(equBoxdiv4p);
                    equBoxdiv4.appendChild(equBoxdiv4input);
                equBox.appendChild(equBoxdiv5);
                    equBoxdiv5.appendChild(equBoxdiv5p);
                    equBoxdiv5.appendChild(equBoxdiv5input);
                equBox.appendChild(equBoxtextarea);
                equBox.appendChild(equBoxp);
            chartContainer.appendChild(traitsBox);
                traitsBox.appendChild(traitsBoxtextarea);
                traitsBox.appendChild(traitsBoxp);

    /* 값 입력 하는 단 */

    chartBox.className = `chartBox chartBox${num}`;
        chartControl.className = "chartControl";
        chartControl.innerText = `${num+1}번 시트`;
        chartContainer.className = "chartContainer";
            main_text.className = `main_text`;
            main_text.innerText = `${myName}`;
            main_title.className = "main_title";
                main_titleP1.innerText = "캐릭터 이름";
                main_titleP2.innerText = "CHARACTER NAME";
                main_titleP2.className = "subtext";
            setBox1.className = "setBox setBox1";
                setBox1p1span1.className = "jsJobText";
                setBox1p1span1.innerText = `${myJob} `;
                setBox1p1span2.className = "jsLevelText";
                setBox1p1span2.innerText = `${myLevel} 레벨`;
                setBox1p2.className = "subtext";
                setBox1p2.innerText = "클래스 & 레벨";
            setBox2.className = "setBox setBox2";
                setBox2p1span.className = "jsNameText";
                setBox2p1span.innerText = `${myName}`;
                setBox2p2.className = "subtext";
                setBox2p2.innerText = "플레이어 이름";
            setBox3.className = "setBox setBox3";
                setBox3p1span.className = "jsRaceText";
                setBox3p1span.innerText = `${myEntp}`;
                setBox3p2.className = "subtext";
                setBox3p2.innerText = "종족";
            setBox4.className = "setBox setBox4";
                setBox4p1span.className = "jsExpText";
                setBox4p1span.innerText = `${leadLoadGameSet[num].exp}`;
                setBox4p2.className = "subtext";
                setBox4p2.innerText = "경험치";
            stateBox1.className = "state stateBox1";
                stateBox1p1.innerText = "힘";
                stateBox1p2.className = "jsPlusStr";
                stateBox1p2.innerText = `${fixState(myStr),fixstateStr}`; // 힘 수정치
                stateBox1p3.className = "jsStrText";
                stateBox1p3.innerText = `${myStr}`;
            stateBox2.className = "state stateBox2";
                stateBox2p1.innerText = "민첩";
                stateBox2p2.className = "jsPlusDex";
                stateBox2p2.innerText = `${fixState(myDex),fixstateDex}`; // 민첩 수정치
                stateBox2p3.className = "jsDexText";
                stateBox2p3.innerText = `${myDex}`;
            stateBox3.className = "state stateBox3";
                stateBox3p1.innerText = "건강";
                stateBox3p2.className = "jsPlusCon";
                stateBox3p2.innerText = `${fixState(myCon),fixstateCon}`; // 건강 수정치
                stateBox3p3.className = "jsConText";
                stateBox3p3.innerText = `${myCon}`;
            stateBox4.className = "state stateBox4";
                stateBox4p1.innerText = "지능";
                stateBox4p2.className = "jsPlusInt";
                stateBox4p2.innerText = `${fixState(myInt),fixstateInt}`; // 지능 수정치
                stateBox4p3.className = "jsIntText";
                stateBox4p3.innerText = `${myInt}`;
            stateBox5.className = "state stateBox5";
                stateBox5p1.innerText = "지혜";
                stateBox5p2.className = "jsPlusWis";
                stateBox5p2.innerText = `${fixState(myWis),fixstateWis}`; // 지혜 수정치
                stateBox5p3.className = "jsWisText";
                stateBox5p3.innerText = `${myWis}`;
            stateBox6.className = "state stateBox6";
                stateBox6p1.innerText = "매력";
                stateBox6p2.className = "jsPlusCha";
                stateBox6p2.innerText = `${fixState(myCha),fixstateCha}`; // 매력 수정치
                stateBox6p3.className = "jsChaText";
                stateBox6p3.innerText = `${myCha}`;
            GuardBox.className = "subState GuardBox";
                GuardBoxp1.innerText = `${10}`;   // 10 + 갑옷 보너스 + 방패 보너스 + 민첩 수정치 + 크기 수정치
                GuardBoxp2.innerText = "방어도";
            inttBox.className = "subState inttBox";
                inttBoxinput.type = "text";
                inttBoxinput.value = `${mySpeed}`; // 순서
                inttBoxp.innerText = "우선권";
            speedBox.className = "subState speedBox"
                speedBoxp1.innerText = `${movement}`;
                speedBoxp2.innerText = "이동속도";
            insPoint.className = "insPoint";
                insPointp1.innerText = `${myInspiration}`;
                insPointp2.innerText = "고양감";
            propBonusPoint.className = "propBonusPoint";
                propBonusPointp1.className = "jspropBonusPoint";
                propBonusPointp1.innerText = `+${proficiency}`;
                propBonusPointp2.innerText = "능숙도 보너스";
            myTextArea1.className = "textareaBox myTextArea1";
                myTextArea1textarea.className = "textarea";
                myTextArea1textarea.innerText = "입력해주세요";
                myTextArea1p.innerText = "성격 특성";
            myTextArea2.className = "textareaBox myTextArea2";
                myTextArea2textarea.className = "textarea";
                myTextArea2textarea.innerText = "입력해주세요";
                myTextArea2p.innerText = "이상";
            myTextArea3.className = "textareaBox myTextArea3";
                myTextArea3textarea.className = "textarea";
                myTextArea3textarea.innerText = "입력해주세요";
                myTextArea3p.innerText = "유대";
            myTextArea4.className = "textareaBox myTextArea4";
                myTextArea4textarea.className = "textarea";
                myTextArea4textarea.innerText = "입력해주세요";
                myTextArea4p.innerText = "결점";
            hitPointsBox.className = "hitPointsBox";
                hitPointsBoxp1.className = "subtext";
                hitPointsBoxp1.innerText = `최대 히트 포인트 : ${myjsMaxHitPoint}`;
                hitPointsBoxp2.className = "jsNowHitPoint";
                hitPointsBoxp2.innerText = "11";
                hitPointsBoxp3.innerText = "현재 히트 포인트 CURRENT POINTS";
            hitPointsBox1.className = "hitPointsBox1";
                hitPointsBox1p2.className = "jsEmpHitPoint";
                hitPointsBox1p2.innerText = "0";
                hitPointsBox1p3.innerText = "임시 히트 포인트"
}