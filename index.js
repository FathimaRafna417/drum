var numberOfClick=document.querySelectorAll(".drum").length;


for(var i=0; i< numberOfClick;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});

}

document.addEventListener("keydown",function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key)
{
    switch(key)
    {
        case "w":
            var waudio = new Audio('sounds/crash.mp3');
            waudio.play();
            break;
        case "a":
            var aaudio = new Audio('sounds/kick-bass.mp3');
            aaudio.play();
            break;
        case "s":
            var saudio = new Audio('sounds/snare.mp3');
            saudio.play();
            break;
        case "d":
            var daudio = new Audio('sounds/tom-1.mp3');
            daudio.play();
            break;
        case "j":
            var jaudio = new Audio('sounds/tom-2.mp3');
            jaudio.play();
            break;
        case "k":
            var kaudio = new Audio('sounds/tom-3.mp3');
            kaudio.play();
            break;
        case "l":
            var laudio = new Audio('sounds/tom-4.mp3');
            laudio.play();
            break;
        default:
            console.log(key);

    }
}

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);//it takes the format for the class like .a,.d;
    activeButton.classList.add("pressed");//adding class pressed used in style.css

    setTimeout(function(){
        activeButton.classList.remove("pressed");//removing class pressed ie animation after 100 sec;

    },100)

}