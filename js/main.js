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
//main functions
function start() {
    if(!intervalo) intervalo = setInterval(update,1000/3)
}
function update(){
    frames++
    /*if(frames%150 === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }*/
    bckg.draw()
    warriror.draw()
    console.log(frames);
}
//aux functions

//listeners

//run
window.onload = function () {
    console.log('waitting')
    start()
}