
let numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let numberOfButtons = this.innerHTML;
        makeSound(numberOfButtons)
        buttonAnimation(numberOfButtons)
    })


}

document.addEventListener("keypress", function () {
    let pressedButtons = event.key;
    console.log(event.charCode);
    makeSound(pressedButtons);
    buttonAnimation(event.key)

})



function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/crash.mp3")
            tom1.play()
            break;
            
        case "a":
            let tom2 = new Audio("sounds/kick-bass.mp3")
            tom2.play()
            break;
        case "s":
            let tom3 = new Audio("sounds/snare.mp3")
            tom3.play()
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-1.mp3")
            tom4.play()
            break;
        case "j":
            let snare = new Audio("sounds/tom-2.mp3")
            snare.play()
            break;
        case "k":
            let kick = new Audio("sounds/tom-3.mp3")
            kick.play()
            break;
        case "l":
            let crash = new Audio("sounds/tom-4.mp3")
            crash.play()
            break;
        default: console.log("bunday matn yoq");
    }


}

function buttonAnimation(currentKey){
    console.log(currentKey);
    let activibutton = document.querySelector("." + currentKey)
    console.log(activibutton );
    activibutton.classList.add("pressed");
    setTimeout(function (){
        activibutton.classList.remove("pressed")
    },300)
}