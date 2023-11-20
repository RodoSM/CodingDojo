console.log("page loaded...");

var userName = document.querySelector("#username");

function edit() {
    userName.innerText = "Elena de Troya";
}

var requestNum = document.querySelector("#request");
var friendsNum = document.querySelector("#friends");

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestNum.innerText--;
    friendsNum.innerText++;
}

function reject(id) {
    var element = document.querySelector(id);
    element.remove();
    requestNum.innerText--;
}

