document.getElementById("meid").addEventListener("click", backroom);

function backroom() {
    let value = Math.floor(Math.random() * 3);
    if (value == 0) {  
        document.getElementById("bodyme").style.color = "lightpink";
    } else if (value == 1) {
        document.getElementById("bodyme").style.color = "lightblue";
    } else if (value == 2) {
        document.getElementById("bodyme").style.color = "lightgreen";
    }
}




