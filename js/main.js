console.log('working')

var elements= {
    bckg: './images/bckgd.jpg',
    warrior: './images/RoyalNightWHITE.png',
}

//variables

//canvas clases

//instances
var bckg = new Background(0,0,elements.bckg);
var warriror = new Warrior(0,325,0,0,elements.warrior)
var intervalo;
var frames= 0;
//main functions
function start() {
    intervalo.setInterval(update,1000/60);
}
function update(){
    frames++
    ctx.clearRect(0,0,canvas.width,canvas.height);
    bckg.draw()
    warriror.draw()
}
//aux functions

//listeners

//run
window.onload = function () {
    console.log('waitting')
    update()
}