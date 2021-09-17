 <!DOCTYPE html>
<html>




function setup () {
    createCanvas(600, 600)

    angleMode(DEGREES)
    rectMode(CENTER)
}


function draw() {
    background (10,20,30)
    noFill()
 

    translate (width / 2, height / 2)

    for (var i = 0; i < 200; i++) {
        push()

    rotate(sin(frameCount + i) * 100)

    var r = map(sin(frameCount), -1, 1, 50, 255)
    var g = map(cos(frameCount / 2), -1, 1, 50, 255)
    var b = map(sin(frameCount / 4), -1, 1, 50, 255)

    stroke(255, 0, 0)

    rect(0, 600 - i * 3, 600 - i * 3, 200 - i)
        
        pop()
    }
  
}
</html>
