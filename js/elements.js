//canvas
var canvas = document.getElementById('canvas')
console.log(canvas)
var ctx = canvas.getContext('2d')
var frames = 0;
//clases
function Element(x,y,src){
    this.x= x
    this.y= y
    this.width = canvas.width
    this.height = canvas.height
    this.image = new Image()
    this.image.src = src
    this.image.onload = function () {
        this.draw()
    }.bind(this)
    this.draw = function () {
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
}
function Background(x,y,src) {
    Element.call(this,x,y,src)
    this.width = 1024
    this.height = 768
}

//instancias
