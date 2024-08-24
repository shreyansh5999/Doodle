document.addEventListener( "mousemove", ( det ) => {
    let posX = det.clientX;
    let posY = det.clientY;
    document.querySelector( "#cursor" ).style.top = posY + "px";
    document.querySelector( "#cursor" ).style.left = posX + "px";
} )
let b = gsap.timeline();
b.from( "nav", {
    duration: .5,
    scale: .9,
    top: -25,
} )
b.from( ".herotext", {
    duration: .5,
    scale: .9,
} )
