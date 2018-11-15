
var elements= {
    bckg: 'images/woodsBckg.png',
    royal: 'images/RoyalNightWHITE.png',
    guillotine: 'images/guillotinecrossWHITE.png',
    title : 'images/square.png',
    normalIceAtk : 'images/atacks/normalIceAtack.png',
}

//variables

//canvas clases

//instances
var bckg = new Background(0,0,elements.bckg);
var warrior1 = new Warrior(0,325,800,300,90,90,elements.royal)
var warrior2 = new Warrior(0,310,0,300,90,90,elements.royal)
var intervalo;
var titles = []
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
    warrior1.draw()
    //drawBoard()
    warrior2.draw()
}
//aux functions
function generateBoard(){
    for(let i=1;i<11;i++){
        var title = new Title(100*i,200,elements.title)
        titles.push(title)
    }
}
function drawBoard(){
    generateBoard()
    titles.forEach(function(title){
        title.draw()
    })
}
//listeners

//endGame
function gameOver(){
    clearInterval(intervalo)
    intervalo = null
    ctx.fillStyle = "red"
    ctx.font = "bold 80px Arial"
    ctx.fillText("GAME OVER", 50,200)
    ctx.fillStyle = "black"
    ctx.font = "bold 40px Arial"
    //ctx.fillText("Tu score: " + Math.floor(frames/60), 200,300)
    ctx.font = "bold 20px Arial"
    //ctx.fillText("Presiona 'Return' para reiniciar", 50,350)
    /*audio.src=music.lost
    audio.play()*/
}

//run
window.onload = function () {
    console.log('waitting')
    start()
    addEventListener('keyup',function(e){
        switch (e.keyCode) {
            case 38:
                //arrow up
                warrior1.dy-= 100
                warrior1.damageY -=100
                warrior1.yRef -= 100
                warrior1.mode = 1
                break
            case 40:
                //arrow down
                warrior1.dy+= 100
                warrior1.damageY+= 100
                warrior1.yRef += 100
                warrior1.mode= 2
                break
            case 37:
                //arrow left
                warrior1.dx-= 100
                warrior1.damageX-= 100
                warrior1.xRef -= 100
                warrior1.mode = 3
                break
            case 39:
                //arrow right
                warrior1.dx+= 100
                warrior1.damageX+= 100
                warrior1.xRef -= 100
                warrior1.mode = 4
                break
            case 32:
                //space
                warrior1.atack();
                if(warrior1.isTouching(warrior2.xRef,warrior2.yRef)){
                    if(warrior2.recieveDamage(warrior1.atack())){
                        gameOver()
                    }
                }
                break
            case 88:
                //dead x
                warrior1.mode = 8
                break

            //Warrior 2

            case 87:
                //arrow up
                warrior2.dy-= 100
                warrior2.mode = 1
                warrior2.yRef -= 100
                warrior2.damageY -=100
                break
            case 83:
                //arrow down
                warrior2.dy+= 100
                warrior2.mode= 2
                warrior2.yRef += 100
                warrior2.damageY +=100
                break
            case 65:
                //arrow left
                warrior2.dx-= 100
                warrior2.mode = 3
                warrior2.xRef -= 100
                warrior2.damageX -=100
                break
            case 68:
                //arrow right
                warrior2.dx+= 100
                warrior2.mode = 4
                warrior2.xRef += 100
                warrior2.damageX +=100
                break
            case 81:
                //Q
                warrior2.atack();
                if(warrior2.isTouching(warrior1.xRef,warrior1.yRef)){
                    console.log(warrior1.recieveDamage(warrior2.atack()))
                }
                break
            case 90:
                //dead z
                warrior2.mode = 8
                break
        }
    })
}