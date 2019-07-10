function checkBtn(){
    var  question1 = document.game.question1.value;
    var  question2 = document.game.question2.value;
    var  question3 = document.game.question3.value;
    var  correct = 0;

    if (question1 == "providence"){
        correct++;
    }
    if (question2 == "hardfort"){
        correct++;

    }
    if (question3 == "Albany"){
        correct++;

    }

    var  message = ["Great job", "that's just okey", "You really need to do better"];
    var range;
    if(correct < 1){
        range =2;

    }
    if(correct > 0 && correct < 3){
        range =1;

    }
    if(correct > 2){
        range =0;

    }

    document.querySelector("after_submit").style.visibility = "visible";
    document.querySelector("message").innerHTML = message [range];
    document.querySelector("number_correct").innerHTML = "you got" + correct + "correct.;"
}