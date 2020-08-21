export class Canvas {
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    drawOffset = {
        x: 0,
        y: 0
    };
    ctx = null;

    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.createCanvas();
    }

    createCanvas() {
        const canvas = document.createElement('canvas');
        canvas.id = "skiCanvas";
        canvas.width = this.width * window.devicePixelRatio;
        canvas.height = this.height * window.devicePixelRatio;
        canvas.style.width = this.width + 'px';
        canvas.style.height = this.height + 'px';

        this.ctx = canvas.getContext("2d");
        this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

        document.body.appendChild(canvas);
    }

    clearCanvas() {
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
    }

    setDrawOffset(x, y) {
        this.drawOffset.x = x;
        this.drawOffset.y = y;
    }

    drawImage(image, x, y, width, height) {
        x -= this.drawOffset.x;
        y -= this.drawOffset.y;

        this.ctx.drawImage(image, x, y, width, height);
    }

    drawInfo(skier) {

        this.ctx.fillStyle = "black";
        this.ctx.beginPath();
        this.ctx.font = "20px Arial";
        this.ctx.fillText(`Top Score: ` + skier.topScore, 10, 50);
        this.ctx.fillText(`Distance: ` + skier.activeY, 10, 80);
        this.ctx.fillText(`Speed: ` + skier.speed, 10, 110);
        this.ctx.stroke();
    }

}