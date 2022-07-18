var counter = 0;
var randomNumber = parseInt(Math.random()*100)+1;
alert(randomNumber);

function enterkey() {
	if (window.event.keyCode == 13) {
    	finding();
    }
    else {
        return;
    }
}

function finding() {
    var userNumber = document.getElementById("try").value;
    if(userNumber >= 1 && userNumber <= 100){
        if(randomNumber > userNumber) {
            document.getElementById("disply").innerText = "UP!";
        }
        else if(randomNumber < userNumber) {
            document.getElementById("disply").innerText = "DOWN!";
        }
        else if(randomNumber == userNumber) {
            document.getElementById("disply").innerText = "정답!";
            disply.style.color="red";
        }
        counter += 1;
        document.getElementById("counter").innerText = `${counter}`;
    }
    else {
        alert("1 ~ 100까지의 수만 입력하세요!");
    }
}
