
var elements= {
    bckg: 'images/woodsBckg.png',
    royal: 'images/RoyalNightWHITE.png',
    guillotine: 'images/guillotinecrossWHITE.png',
    title : 'images/square.png',
    normalIceAtk : 'images/atacks/normalIceAtack.png',
    fire: 'images/atacks/fireAtack.png',
    ice: 'images/atacks/iceAtack.png',
    title: 'images/title.png'
}



//instances
var bckg = new Background(0,0,elements.bckg);
var warrior1 = new Warrior(0,325,800,300,90,90,elements.royal,10,10,elements.ice)
var warrior2 = new Warrior(0,310,0,300,90,90,elements.royal,700,10,elements.fire)
var intervalo;
var titles = []
//main functions
function start() {
    if(!intervalo) intervalo = setInterval(update,1000/3)
}
function update(){
    frames++
    bckg.draw()
    warrior1.draw()
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

function drawCover() {
    var img = new Image()
    img.src = elements.title
    img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        ctx.font = "bold 24px Avenir"
    }
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
    ctx.font = "bold 20px Arial"

}

//run
window.onload = function () {
    console.log('waitting')
    drawCover()
    addEventListener('keyup',function(e){
        var star = 0
        switch (e.keyCode) {
            case 13:
                star++;
                if(star<2){
                    document.getElementById('instructions').style.display = 'none'
                    start()
                }
            case 38:
                //arrow up
                e.preventDefault()
                warrior1.dy-= 100
                if(warrior1.dy< 0){
                    warrior1.dy = 0
                }else {
                    warrior1.damageY -= 100
                    warrior1.yRef -= 100
                    warrior1.mode = 1
                }
                break
            case 40:
                //arrow down
                e.preventDefault()
                warrior1.dy+= 100
                if(warrior1.dy >=700){
                    warrior1.dy = canvas.height-200
                }else {
                    warrior1.damageY += 100
                    warrior1.yRef += 100
                    warrior1.mode = 2
                }
                break
            case 37:
                //arrow left
                e.preventDefault()
                warrior1.dx-= 100
                if(warrior1.dx<0){
                    warrior1.dx=0
                }else {
                    warrior1.damageX -= 100
                    warrior1.xRef -= 100
                    warrior1.mode = 3
                }
                break
            case 39:
                //arrow right
                e.preventDefault()
                warrior1.dx+= 100
                if(warrior1.dx>=1100){
                    warrior1.dx = canvas.width-200
                }else {
                    warrior1.damageX += 100
                    warrior1.xRef -= 100
                    warrior1.mode = 4
                }
                break
            case 190:
                //dot .
                if(!warrior1.atackFlag) {
                    warrior1.atackFlag = true
                    setTimeout(() => warrior1.atackFlag = false,1500)
                    warrior1.atack()
                    if (warrior1.isTouching(warrior2.xRef, warrior2.yRef)) {
                        warrior1.specialAcc +=2;
                        if (warrior2.recieveDamage(warrior1.atack())) {
                            gameOver()
                        }
                    }
                }
                break
            case 189:
                if(warrior1.specialFlag){
                    warrior1.specialAtack()
                }
            case 88:
                //dead x
                //warrior1.mode = 8
                break

            //Warrior 2

            case 87:
                //arrow up
                warrior2.dy-= 100
                if(warrior2.dy< 0){
                    warrior2.dy = 0
                }else {
                    warrior2.mode = 1
                    warrior2.yRef -= 100
                    warrior2.damageY -= 100
                }
                break
            case 83:
                //arrow down
                warrior2.dy+= 100
                if(warrior2.dy >=700){
                    warrior2.dy = canvas.height-200
                }else {
                    warrior2.mode = 2
                    warrior2.yRef += 100
                    warrior2.damageY += 100
                }
                break
            case 65:
                //arrow left
                warrior2.dx-= 100
                if(warrior2.dx<0){
                    warrior2.dx=0
                }else {
                    warrior2.mode = 3
                    warrior2.xRef -= 100
                    warrior2.damageX -= 100
                }
                break
            case 68:
                //arrow right
                warrior2.dx+= 100
                if(warrior2.dx>=1100){
                    warrior2.dx = canvas.width-200
                }else {
                    warrior2.mode = 4
                    warrior2.xRef += 100
                    warrior2.damageX += 100
                }
                break
            case 81:
                //Q
                if(!warrior2.atackFlag) {
                    warrior2.atackFlag = true
                    setTimeout(() => warrior2.atackFlag = false,1500)
                    warrior2.atack();
                    if (warrior2.isTouching(warrior1.xRef, warrior1.yRef)) {
                        if (warrior1.recieveDamage(warrior2.atack())) {
                            gameOver()
                        }
                    }
                }
                break
            case 90:
                //dead z
                warrior2.mode = 8
                break
        }
    })
}
drawCover()