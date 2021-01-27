let randomSen = document.getElementById("randomSen");

var sent = [];
let button = document.createElement("button");
randomSen.appendChild(button);

sent.push("Charming");
sent.push("Cool");
sent.push("Beautiful");
sent.push("Magnificent");
sent.push("Fascinating");
sent.push("Cute");
sent.push("Great");

button.innerHTML = "Click To Get Started";
button.setAttribute("style", "background-color:transparent; border: none; display: inline - block; cursor: pointer; color:#000000; font-family: Arial; font-size: 3rem; padding: 16px 31px; text - decoration: none; text - shadow: 0px 1px 0px #ffffff;");
function updateCon(num){
    button.innerHTML = "You Look " + sent[num] + " Today!";
}
randomSen.addEventListener("click",function(){
    var randomNum = Math.floor(Math.random() * sent.length);
    updateCon(randomNum);
});