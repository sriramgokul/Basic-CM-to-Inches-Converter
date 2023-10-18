function Convert(){
    let Received = Number(document.getElementById("input").value);
    let inches = Received/2.54;
    let push = document.getElementById("box4");
    push.innerHTML = inches.toFixed(1) + " Inches";
}