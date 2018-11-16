var images = {
    normalIceAtk : 'images/atacks/iceAtack.png',
    hp           : 'images/hpStatus.png'
}


//charecter clases
function Character(sx,sy,dx,dy,width,height,src,dxHP,dyHP,typesrc){
    this.health = 50
    this.damage = 10
    this.dxHP = dxHP
    this.dyHP = dyHP
    this.sx = sx
    this.sy = sy
    this.sWidth = width
    this.sHeight = height
    this.dx = dx
    this.dy = dy
    this.specialFlag = false
    this.specialAcc = 0;
    this.atackFlag = false
    //reference to recieve damage
    this.xRef = dx+(width/2)
    this.yRef = dy+(width/2)
    this.mode = 6
    this.imgHp = new Image()
    this.imgHp.src = images.hp
    this.hpAcc = 1
    this.hpW = 9.98
    this.image = new Image()
    this.image.src = src
    this.image.onload = function () {
        this.draw()
    }.bind(this)
    this.count = 1
    this.countD = 1
    this.acc =0 ;
    this.accD =0 ;
    this.draw = function () {
        ctx.drawImage(this.imgHp,0,this.hpAcc,95,this.hpW,this.dxHP, this.dyHP, 200, 20)
        console.log('elemento:'+this.hpAcc)
        switch (this.mode) {
            case 1://up
                this.watching = 1
                ctx.drawImage(this.image, this.acc,535, this.sWidth, this.sHeight, this.dx, this.dy, this.dWidth, this.dHeight)
                break
            case 2://down
                this.watching = 2
                ctx.drawImage(this.image, this.acc, 130, this.sWidth, this.sHeight, this.dx, this.dy, this.dWidth, this.dHeight)
                break
            case 3://left
                this.watching = 3
                ctx.drawImage(this.image, this.acc,325, this.sWidth, this.sHeight, this.dx, this.dy, this.dWidth, this.dHeight)
                break
            case 4://right
                this.watching = 4
                ctx.drawImage(this.image, this.acc, 325, this.sWidth, this.sHeight, this.dx, this.dy, this.dWidth, this.dHeight)
                break
            case 5:
                //damage
                console.log('damage');
                ctx.drawImage(this.image,this.accD, 1150, this.sWidth, this.sHeight, this.dx, this.dy, this.dWidth, this.dHeight)
                break
            case 6:
                //TODO:standBY
                ctx.drawImage(this.image,10, 10, this.sWidth, this.sHeight, this.dx, this.dy, this.dWidth, this.dHeight)
                break
            case 7:
                //TODO:recieve damage
                this.hpAcc+= (this.hpW*6)
                ctx.drawImage(this.image,790, 370, this.sWidth, this.sHeight, this.dx, this.dy, this.dWidth, this.dHeight)
                break
            case 8:
                //TODO:dead
                ctx.drawImage(this.image,960, 380, this.sWidth, this.sHeight, this.dx, this.dy, this.dWidth, this.dHeight)
                break
        }
        this.accD +=110  //110
        this.acc+= this.sWidth
        this.count++;
        this.countD++;
        if(this.hpW>31){
            console.log('gameOver')
            //this.hpAcc
        }
        if(this.count>7){
            this.acc= 0;
            this.count=1;
        }
        if(this.countD>6) {
            this.countD = 1;
            this.accD = 0;
        }
    }
    this.moves = 5
    this.watching = 0
    //Damage functions
    this.dWidth = width
    this.dHeight = height
    this.damageX = this.dx-200
    this.damageY = this.dy
    this.damageH = 100
    this.damageW = 500
    this.imgAtack = new Image()
    this.isTouching = (xRef,yRef) => {
        if((xRef > this.damageX && xRef<(this.damageX+this.damageW)) && (yRef>this.damageY && (yRef<(this.damageH+this.damageY))) ){
            return true
        }
    }
    this.imgAtack.src = typesrc
    this.atack = function () {
        this.mode=5
        ctx.drawImage(this.imgAtack,this.damageX,this.damageY,this.damageW,this.damageH)
        setTimeout(()=> this.mode=6, 3000);
        return this.damage
    }
    this.specialAtack = function () {
        this.mode=5
        ctx.drawImage(this.imgAtack,this.damageX,this.damageY,this.damageW,this.damageH)
        setTimeout(()=> this.mode=6, 3000);
        return this.damage*3
    }
    this.recieveDamage = function (damage) {
        this.mode=7
        this.specialAcc ++;
        setTimeout(()=> this.mode=6 , 1000);
        this.health -= damage
        if(this.health <=0){
            console.log('muerto alv')
            this.mode=8
            return true
        }

        //console.log(this.health)
        return false
    }
    this.reset = function () {
        this.moves =5
        this.health = 150
    }
}


function Suport() {

}
function Warrior(sx,sy,dx,dy,width,height,src,dxHP,dyHP,typesrc) {
    Character.call(this,sx,sy,dx,dy,width,height,src,dxHP,dyHP,typesrc)
    this.name = 'warrior'
}
function Magician() {

}
function Shooter() {

}

//instancias

//special functions
function sprite (options) {

    var that = {};

    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;

    return that;
}