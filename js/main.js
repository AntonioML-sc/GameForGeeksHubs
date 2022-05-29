
// Instances

let time = document.getElementById("timer");

let t = 0;

let pepe = new Character("Pepe", 50, 590, "space");

let wall1 = new Wall('wall1', "space", 500, 570, 60, 60, 'greenyellow', 3, 4, 4, 4, 4, 'black', 2, 2, 2, 2);
let wall2 = new Wall('wall2', "space", 150, 570, 10, 60, 'lightgrey', 3, 5, 5, 0, 0, 'black', 2, 2, 2, 2);
let wall3 = new Wall('wall3', "space", 900, 530, 10, 100, 'lightgrey', 3, 5, 5, 0, 0, 'black', 2, 2, 2, 2);
let platform1 = new Wall('platform1', 'space', 250, 550, 80, 10, 'brown', 3, 3, 3, 3, 3, 'black', 2, 2, 2, 2);
let platform2 = new Wall('platform2', 'space', 300, 470, 80, 10, 'brown', 3, 3, 3, 3, 3, 'black', 2, 2, 2, 2);


let contactObjects = [wall1, wall2, wall3, platform1, platform2];

console.log("Pepe borders: top: " + pepe.topBorder + " bottom: " + pepe.bottomBorder + ", Wall borders: top: " + wall1.topBorder + " bottom: " + wall1.bottomBorder);
console.log("wall1: sx, sy = " + wall1.sx + ", " + wall1.sy + ".  width, height: " + wall1.width + ", " + wall1.height);

// Function that checks the status

function myfunction() {
    t += 10;

    if (t % 1000 == 0) {
        time.innerHTML = `Tiempo total: ${t / 1000}s`;

        let pepeDivPosX = window.getComputedStyle(pepe.div).getPropertyValue('left');
        let pepeDivPosY = window.getComputedStyle(pepe.div).getPropertyValue('top');
        // console.log("sx, sy: " + pepe.sx + ", " + pepe.sy + "posicion div: " + pepeDivPosX + ", " + pepeDivPosY);

        // console.log("pepe rightBorder: " + pepe.rightBorder + ", wall leftborder: " + wall1.leftBorder); 
    }

    pepe.upgradePos(contactObjects);
}

// Events that send orders for movement

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName == 'd') {
        pepe.move('right');
    } else if (keyName == 'a') {
        pepe.move('left');
    }
    if (keyName == 'w') {
        pepe.jump();
    }
});

document.addEventListener('keyup', (event) => {
    const keyName = event.key;
    if (keyName == 'd') {
        pepe.move('stop');
    } 
    if (keyName == 'a') {
        pepe.move('stop');      
    }
});

// order to execute the function that upgrades the status in 10ms time

let count = setInterval(myfunction, 10);

