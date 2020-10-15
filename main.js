let userFirstName = "Tom",
    userSecondName = "Crus",
    marigeStatus = 0,
    isActor = true,
    currentYear = 2017,
    birth = 1967;

    //messarges;

let mainMassage = "This person is",
    helloMsg = "Hello,",
    ageMsgFirst = "Person is",
    ageMsgLast = "year old. \n",
    spaceMsg = " ",
    doAnBreak = ". \n";

    //бизнесс логика;
let resultMsg = null,
    actorMst = "",
    age = 0;
resultMsg = helloMsg + userFirstName + spaceMsg + userSecondName + doAnBreak; //операторы;
resultMsg += isActor ? mainMassage + "actor" : mainMassage + "is not actor";
/*if (isActor) {
    resultMsg += mainMassage + "actor";
}
else {
    resultMsg += mainMassage + "is not actor";
}*/

console.log(resultMsg);





