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
    this.count = 1
    this.draw = function () {
        /*this.count++
        this.sx=(this.sx+this.dWidth)/8*/
        console.log('entro');
        //var hw = 90;
        //ctx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.dx, this.dy, this.dWidth, this.dHeight)
            console.log('dibujando'+frames);
            //this.sx += this.width;

            //ctx.drawImage(this.image,this.dx,this.dy,150,200,0,0,150,200)
            ctx.drawImage(this.image, this.sx, this.sy*cont, this.sWidth, this.sHeight, this.dx, this.dy, this.dWidth, this.dHeight)
            cont++;
    }
}
var cont=0;
/*this.draw = function(){

    if(frames%10===0) {
        this.frameIndex++

    }
    if(this.frameIndex > this.numberOfFrames-1) this.frameIndex =0
    ctx.drawImage(this.image,this.frameIndex * this.width / this.numberOfFrames,0,this.width / this.numberOfFrames,this.height,this.x,this.y,this.width / this.numberOfFrames,
        this.height)
}*/


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