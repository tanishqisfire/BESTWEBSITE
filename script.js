let clickCount = 0;

document.getElementById("id2").addEventListener("click", changePicture);

function changePicture() {
    clickCount++;
    console.log(clickCount);

    if(clickCount % 2 === 1) {
        document.getElementById("id2").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQigUPg0v68WZzMup0EviFdwMQvgaWJffsuYgtur6Ne3QFGyH3xOvvM-5H6&s=10";
    } else {
        document.getElementById("id2").src = "https://cdn.britannica.com/87/205187-050-BEE2B338/tapetum-lucidum-light-retina-night-vision-vertebrates.jpg";
    }
}



