var myList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myList; i++){
    var span = document.createElement("SPAN"); //span이라는 변수에 span태그 추가
    var txt = document.createTextNode("\u00D7"); //이건 X 추가
    span.className = "close";
    span.appendChild(txt); //줄줄이 나열하게 하기
    myList[i].appendChild(span);
}

var close = document.getElementsByClassName("close"); // 위에 close리스트 불러오기
var i;
for(i = 0; i < close.length; i++) { //close 리스트 길이만큼
    close[i].onclick = function() { //close 클릭시 삭제
        var div = this.parentElement; //div = 이 for 전체를 가르키는 parentElement, element는 HTML tag로 바로 특정할 수 있거나, id나 class 같은 속성을 가진 것
        div.style.display = "none"; //div요소를 없앰?
    }
}

function newElement() {
    var li = document.createElement("li"); //li라는 변수에 li태그 추가
    var inputValue = document.getElementById("item").value; //inputValue 라는 변수에 item 아이디의 값을 가져옴
    var t = document.createTextNode(inputValue); //t = inputValue의 텍스트노드 (텍스트노드는 그냥 텍스트라 생각하면 편함)
    li.appendChild(t); // 리스트가 줄줄이 나열되게 하기
    if (inputValue === ''){ // 공백이면
        alert("값을 입력하세요!"); 
    } else {
        document.getElementById("itemList").appendChild(li); //아이템 리스트라는 아이디를 받고 li로 나열
    }
    document.getElementById("item").value = ""; //item 값을 ""로 지정


    var span = document.createElement("SPAN"); //span이라는 변수에 span태그를 넣어줌
    var txt = document.createTextNode("\u00D7"); // x 불러오기
    span.className = "close"; //span의 class = close
    span.appendChild(txt);  //x 나열
    li.appendChild(span); // span 나열

    for(i = 0; i < close.length; i++) { //close 리스트 길이만큼
        close[i].onclick = function() { //close 클릭시 삭제
            var div = this.parentElement; //div = 이 for 전체를 가르키는 parentElement, element는 HTML tag로 바로 특정할 수 있거나, id나 class 같은 속성을 가진 것
            div.style.display = "none"; //div요소를 없앰?
        }
    }

    

}



