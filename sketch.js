const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight - 3;

let steps = 10;

function setup() {
    createCanvas(SCREEN_WIDTH - 5, SCREEN_HEIGHT- 5);
    console.log(SCREEN_HEIGHT, SCREEN_WIDTH);
}

async function draw() {
    background("aqua");

    for(let i=0; i<=width; i+= steps){
        line(i, 0 + 50, i, height - 50);
    }

    steps+=5;

    await sleep(100);
    
    noLoop();
}

const sleep = ms => new Promise(r => setTimeout(r, ms));