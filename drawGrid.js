export default function drawGrid(ctx, minor, major, stroke, fill){
    minor = minor || 10;
    major = major || minor*5;
    stroke = stroke || "#00FF00";
    fill = fill || "#009900";
    ctx.save(); // save the current state of the context before doing something to it.
    
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;

    for(let x = 0; x < ctx.canvas.width; x += minor){
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, ctx.canvas.height);
        if(x % major == 0) {
            ctx.lineWidth = 0.5;
            ctx.fillText(x,x,10);
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
            ctx.fillText(y,0,y+10);
        } else {
            ctx.lineWidth = 0.25;
        }
        ctx.stroke();
    }

    ctx.restore(); //Load the saved state of the canvas from before we did something to it.
}
