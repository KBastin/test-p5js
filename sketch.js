function setup() {
    
    createCanvas(1000,1000);
}

function draw() {
    background("yellow");

    for(let i=0; i<width; i+= 10){
        line(i, 0, i, height);
    }
}
