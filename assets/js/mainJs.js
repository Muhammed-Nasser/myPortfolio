
//---- function to write job title char by char----//

var message = document.getElementById("message");
function writeMessage(string) {
    var i = 0, intervalId;
    intervalId = window.setInterval(function() {
        message.innerHTML += string.charAt(i++);
        if (i > string.length) 
        window.clearInterval(intervalId);
           
    }, 100);
  }
  writeMessage("Full Stack Web Developer")
window.setInterval(function(){
    message.innerHTML = "F" 
    writeMessage("ull Stack Web Developer");},3000)

//-----to Add Active Class to Current Element-----//

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}

//-----to show my adress ------//
function goPosition() {
    var url = "http://maps.google.com/maps/"+ "place/Gleem+Bay/@31.2428335,29.9564149,17z/data=!3m1!4b1!4m5!3m4!1s0x14f5c57ba821e56d:0x133d5c82c18cd7!8m2!3d31.2428335!4d29.9586036" ;
    window.open(url,'_blank');
}