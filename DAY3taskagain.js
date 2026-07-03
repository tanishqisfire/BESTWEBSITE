let clicks = 0;

document.getElementById("meow").addEventListener("click", display);

function display() {
    clicks++;
    if(clicks % 2 === 1) {
        document.getElementById("image2").style.display = "block";
    } else {
        document.getElementById("image2").style.display = "none";
    }
}

