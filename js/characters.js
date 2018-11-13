var images = [
]

//charecter clases
function Character(sx,sy,dx,dy,src){
    this.sx = sx
    this.sy = sy
    this.sWidth = 90
    this.sHeight = 90
    this.dx = dx
    this.dy = dy
    this.dWidth = 90
    this.dHeight = 90
    this.image = new Image()
    this.image.src = src
    this.image.onload = function () {
        this.draw()
    }.bind(this)
    this.count = 0
    this.draw = function () {
        this.count++
        this.dx=(this.dx*this.count)/8
        //ctx.drawImage(this.image,this.dx,this.dy,150,200,0,0,150,200)
        ctx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.dx, this.dy, this.dWidth, this.dHeight)
    }
}




function Suport() {

}
function Warrior(sx,sy,dx,dy,src) {
    Character.call(this,sx,sy,dx,dy,src)
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