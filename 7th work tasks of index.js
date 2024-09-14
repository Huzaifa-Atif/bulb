var activebulb = "https://media.istockphoto.com/id/161767656/vector/glowing-yellow-incandescent-light-bulb.jpg?s=612x612&w=0&k=20&c=eWDoxaTIoZU1qNkoj4kPU-rDeFlWCGbfiM_IOYqLh9k=";
var inactivebulb = "https://i.pinimg.com/564x/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.jpg";
var button = document.getElementById("button")

function shiftpic() {
    var img = document.querySelector(".img");
    if (img.src === activebulb) {
        img.src = inactivebulb;
        button.style.backgroundColor = "red"
        button.innerHTML = "OFF"
        button.style.alignItems = "right"

        img.style.width = "300px";;
        img.style.height = "460px";
    } else {
        img.src = activebulb;
        button.style.backgroundColor = "yellow"
        button.innerHTML = "ON"
        button.style.alignItems = "right"

        img.style.width = "300px";
        img.style.height = "450px";
    }
}