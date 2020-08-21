export class Entity {
    x = 0;
    y = 0;

    assetName = '';

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getAssetName() {
        return this.assetName;
    }

    getPosition() {
        return {
            x: this.x,
            y: this.y
        };
    }

    draw(canvas, assetManager, skier) {
        if (this.assetName) {
            const asset = assetManager.getAsset(this.assetName);
            const drawX = this.x - asset.width / 2;
            const drawY = this.y - asset.height / 2;

            canvas.drawImage(asset, drawX, drawY, asset.width, asset.height);
            if (skier)
                canvas.drawInfo(skier);
        }
    }
}