export const radian = Math.PI / 180;

export function fix_dpi(canvas) {
    let dpi = window.devicePixelRatio;
    // Create a style object that returns width and height
    // https://medium.com/wdstack/fixing-html5-2d-canvas-blur-8ebe27db07da
    let style = {
        height() {
            return +getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);
        },
        width() {
            return +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2);
        }
    }
    // Set the correct attributes for a crystal clear image!
    canvas.setAttribute('width', style.width() * dpi);
    canvas.setAttribute('height', style.height() * dpi);
}

// https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
})();

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};


export function getRandomColor() {
    var red = getRandomInt(0, 257);
    var green = getRandomInt(0, 257);
    var blue = getRandomInt(0, 257);
    return 'rgb('+ red + ', ' + green + ', ' + blue  +')';
};

export function drawOrigin(ctx){
    ctx.strokeStyle ="red";
    ctx.beginPath(); //reset context state
    ctx.lineWidth = 2;
    ctx.moveTo(-100, 0);
    ctx.lineTo(100, 0);
    ctx.stroke(); // draws the line
    ctx.beginPath(); //reset context state

    ctx.moveTo(0, -100);
    ctx.lineTo(0, 100);
    ctx.stroke(); // draws the line

    ctx.beginPath();
    ctx.arc(0, 0, 10, 0 * radian, 360 * radian, false);
    ctx.stroke();
}

const fillStyleHurtBox = "rgb(0 0 255 / 25%)";
const strokeStyleHurtBox = "rgb(0 0 255 / 75%)";;
export function drawHurtCircle(ctx, radius){
    ctx.fillStyle = fillStyleHurtBox;
    ctx.strokeStyle = strokeStyleHurtBox;
    ctx.lineWidth = 1;
    
    ctx.arc(0, 0, radius, 0 * radian, 360 * radian, false);
    ctx.fill();
    ctx.stroke();
}

export function drawHurtBox(ctx, box){   
    ctx.fillStyle = fillStyleHurtBox;
    ctx.strokeStyle = strokeStyleHurtBox;
    ctx.lineWidth = 1;
    ctx.fillRect(box.left, box.top, box.right - box.left, box.bottom - box.top);
    ctx.strokeRect(box.left, box.top, box.right - box.left, box.bottom - box.top);
}

export function drawHurtBoxes(ctx, boxes){
    boxes.forEach(box => {
        drawHurtBox(ctx, box);
    });
}

const fillStyleHit = "rgb(255 0 0 / 25%)";
const strokeStyleHit = "rgb(255 0 0 / 75%)";;
export function drawHitBox(ctx, box){   
    ctx.fillStyle = fillStyleHit;
    ctx.strokeStyle = strokeStyleHit;
    ctx.lineWidth = 1;
    ctx.fillRect(box.left, box.top, box.right - box.left, box.bottom - box.top);
    ctx.strokeRect(box.left, box.top, box.right - box.left, box.bottom - box.top);
}

export function drawHitBoxes(ctx, boxes){
    boxes.forEach(box => {
        drawHitBox(ctx, box);
    });
}

export function checkCollisionOfBoxes(hitBox, hurtBox){
    if(hitBox.right > hurtBox.left 
        && hitBox.left < hurtBox.right
        && hitBox.top < hurtBox.bottom
        && hitBox.bottom > hurtBox.top
    ){
        return true;
    } else {
        return false;
    }
}

export function drawGrid(ctx, minor, major, stroke, fill){
    minor = minor || 10;
    major = major || minor*5;
    stroke = stroke || "#00FF00";
    fill = fill || "#009900";
    ctx.save(); // save the current state of the context before doing something to it.
    
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.font = "16px Arial";

    for(let x = 0; x < ctx.canvas.width; x += minor){
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, ctx.canvas.height);
        if(x % major == 0) {
            ctx.lineWidth = 0.5;
            ctx.fillText(x,x,13);
        } else {
            ctx.lineWidth = 0.25;
        }
        ctx.stroke();
    }

    for(let y = 0; y < ctx.canvas.height; y += minor){
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(ctx.canvas.width, y);
        if(y % major == 0){
            ctx.lineWidth = 0.5;
            ctx.fillText(y,0,y+13);
        } else {
            ctx.lineWidth = 0.25;
        }
        ctx.stroke();
    }

    ctx.restore(); //Load the saved state of the canvas from before we did something to it.
}
