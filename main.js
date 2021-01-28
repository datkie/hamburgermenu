let toggleSide = false;
sides = document.querySelector(".hamb");
buts = document.querySelector(".botonb");

let side = function(){
    if(toggleSide === false){
        sides.style.display="block";
        sides.style.width="200px";
        sides.style.height="500px";
        sides.style.float ="right";
        sides.style.marginLeft ="2px";
        sides.style.padding ="4px";
        sides.style.transitionDuration ="4s";
        sides.style.animationName ="anim";
        sides.style.animationDuration ="2s";
        sides.style.opacity="1";
        buts.style.backgroundImage ="url('close.jpg')";
        sides.style.overflow ="none";
        
    

        let a = sides.length;
        for(let i = 0; i>a;i++) {
            sides[i].style.display = "block";

        }
        toggleSide = true;
    }
    else if(toggleSide === true){
        sides.style.display ="none";
        sides.style.display="none";
        sides.style.width="0px";
        sides.style.height="0px";
        sides.style.float ="right";
        sides.style.transitionDuration ="4s";
        sides.style.animationName ="anims";
        sides.style.animationDuration ="2s"
        sides.style.opacity="0";
        buts.style.backgroundImage ="url('buts.jpg')";
        let a = sides.length;
        for(let i = 0; i>a;i++) {
            sides[i].style.display = "none";

        }
        toggleSide = false;
    }



}


 welc = document.querySelector(".mobwels");
 welc2 = document.querySelector(".aboutp");
 welcd = document.querySelector(".mob");
 welc2d = document.querySelector(".aboutpd");
var about = function(){
    welc.innerHTML ="<center>"+"Hi there"+"</center>";
    welc2.innerHTML ="<center>"+"My name is Dionisio B Datiles"+"<br>"+"this is my first website i build using javascript"+"<br>"+"follow me on facebook"+"<br>"+"<a href='https://www.facebook.com/michael.datiles.3192/' class='fab fa-facebook fbs'style='font-size='80px'></a>"+"</center>";

}
var aboutd = function(){
    welcd.innerHTML ="<center>"+"Hi there"+"</center>";
    welc2d.innerHTML ="<center>"+"My name is Dionisio B Datiles"+"<br>"+"this is my first website i build using javascript"+"<br>"+"follow me on facebook"+"<br>"+"<a href='https://www.facebook.com/michael.datiles.3192/' class='fab fa-facebook fbs'style='font-size='80px'></a>"+"</center>";

}
var portd = function(){
    welcd.innerHTML ="<center>"+"I dont have already portfolio maybe soon "+"</center>";
    welc2d.innerHTML ="<center>"+"About"+"<br>"+"My name is Dionisio B Datiles"+"<br>"+"this is my first website i build using javascript"+"</center>";

}
var port = function(){
    welc.innerHTML ="<center>"+"I dont have already portfolio maybe soon "+"</center>";
    welc2.innerHTML ="<center>"+"About"+"<br>"+"My name is Dionisio B Datiles"+"<br>"+"this is my first website i build using javascript"+"</center>";

}

welc.innerHTML ="<center>"+"Lorem Ipsum"+"</center>";
welc2.innerHTML ="<center>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+"</center>";

welcd.innerHTML ="<center>"+"Lorem Ipsum"+"</center>";
welc2d.innerHTML ="<center>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+"</center>";
