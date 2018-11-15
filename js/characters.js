var images = {
    normalIceAtk : 'images/atacks/normalIceAtack.png'
}


//charecter clases
function Character(sx,sy,dx,dy,width,height,src,){
    this.health = 100
    this.damage = 20
    this.sx = sx
    this.sy = sy
    this.sWidth = width
    this.sHeight = height
    this.dx = dx
    this.dy = dy
    //reference to recieve damage
    this.xRef = dx+(width/2)
    this.yRef = dy+(width/2)
    this.mode = 6
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
    this.damageX = this.dx-130
    this.damageXR = this.dx+130
    this.damageY = this.dy-100
    this.damageYR = this.dy-100
    this.damageH = 240
    this.damageW = 160
    this.imgAtack = new Image()
    this.isTouching = (xRef,yRef) => {
        if((xRef > this.damageX && xRef<(this.damageX+this.damageW)) && (yRef>this.damageY && (yRef<(this.damageH+this.damageY))) ){
            return true
        }
    }
    this.imgAtack.src = images.normalIceAtk
    this.atack = function () {
        this.mode=5
        if(this.watching = 3){
            ctx.drawImage(this.imgAtack,this.damageX,this.damageY,this.damageW,this.damageH)
        }
        switch (this.watching) {
            case 5:
                ctx.drawImage(this.imgAtack,this.damageX,this.damageY,this.damageW,this.damageH)
                break
            case 4:
                ctx.drawImage(this.imgAtack,this.damageXR,this.damageYR,this.damageW,this.damageH)
                break
        }
        setTimeout(()=> this.mode=6, 3000);
        return this.damage
    }
    this.specialAtack = function () {
        return this.damage*3
    }
    this.recieveDamage = function (damage) {
        this.mode=7
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
    this.move = function () {
        if(this.moves >0){
            this.moves--
        }else{
            this.moves-=acc;
        }
    }
    this.endTurn = function () {
        this.moves =5
    }
}


function Suport() {

}
function Warrior(sx,sy,dx,dy,width,height,src) {
    Character.call(this,sx,sy,dx,dy,width,height,src)
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