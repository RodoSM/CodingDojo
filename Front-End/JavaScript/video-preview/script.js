console.log("page loaded...");

function preview(object){
    object.play();
    object.muted = true;
}

function pause(object){
    object.pause();
}

let vid = document.getElementById("myVideo"); 

function playVid() { 
    vid.play();
    vid.muted = false;
} 

function pauseVid() { 
    vid.pause(); 
}