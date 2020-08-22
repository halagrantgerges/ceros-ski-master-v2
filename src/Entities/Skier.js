import * as Constants from "../Constants";
import { Entity } from "./Entity";
import { intersectTwoRects, Rect } from "../Core/Utils";

export class Skier extends Entity {
    assetName = Constants.SKIER_DOWN;

    direction = Constants.SKIER_DIRECTIONS.DOWN;
    speed = Constants.SKIER_STARTING_SPEED;

    constructor(x, y) {
        super(x, y);
        this.activeY = y;
        this.topScore = y;

    }

    setDirection(direction) {
        this.direction = direction;
        this.updateAsset();
    }

    updateAsset() {
        this.assetName = Constants.SKIER_DIRECTION_ASSET[this.direction];

    }

    move() {

        if (this.activeY != 0 && this.activeY % 100 == 0) {
            this.speed++;
        }
        if (this.topScore < this.activeY)
            this.topScore = this.activeY;

        switch (this.direction) {
            case Constants.SKIER_DIRECTIONS.LEFT_DOWN:
                this.moveSkierLeftDown();
                break;
            case Constants.SKIER_DIRECTIONS.DOWN:
                this.moveSkierDown();
                break;
            case Constants.SKIER_DIRECTIONS.RIGHT_DOWN:
                this.moveSkierRightDown();
                break;
            case Constants.SKIER_DIRECTIONS.LEFT:
                this.moveSkierLeft();
                break;
            case Constants.SKIER_DIRECTIONS.RIGHT:
                this.moveSkierRight();
                break;
            case Constants.SKIER_DIRECTIONS.UP:
                this.moveSkierUp();
                break;
        }
    }

    moveSkierLeft() {
        this.x -= this.speed;
    }

    moveSkierLeftDown() {
        this.x -= this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
        this.y += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
        this.activeY += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
    }

    moveSkierDown() {
        this.y += this.speed;
        this.activeY += this.speed;
    }

    moveSkierRightDown() {
        this.x += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
        this.y += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
        this.activeY += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
    }

    moveSkierRight() {
        this.x += this.speed;
    }

    moveSkierUp() {
        this.y += this.speed;
        this.activeY += this.speed;
    }

    turnLeft() {

        /**
         * this code caused the bug, because  this.direction=0
         * and Constants.SKIER_DIRECTIONS.LEFT=1
         * so it goes into else which will be evaluated as 
         * this.setDirection(- 1);  -> undefined move
         * and the program will crash 
         */
        if (this.direction === Constants.SKIER_DIRECTIONS.LEFT) {
            this.moveSkierLeft();
        }
        else {
            this.setDirection(Constants.SKIER_DIRECTIONS.LEFT);
            // this.setDirection(this.direction - 1);
        }
    }

    turnRight() {
        /** fixing another bug here, 
         * Steps to Reproduce:  
            Load the game
            Crash into an obstacle
            Press click on righ arrow
         *  expected: The skier gets up and is facing to the right
         *  actual: the skier is still shown as crashed, to doesn't move to the right
         */

        if (this.direction === Constants.SKIER_DIRECTIONS.RIGHT) {
            this.moveSkierRight();
        }
        else {
            // this.setDirection(this.direction + 1);
            this.setDirection(Constants.SKIER_DIRECTIONS.RIGHT);

        }


    }

    turnUp() {

        if (this.direction === Constants.SKIER_DIRECTIONS.LEFT
            || this.direction === Constants.SKIER_DIRECTIONS.RIGHT
        ) {
            this.moveSkierUp();
            this.setDirection(Constants.SKIER_DIRECTIONS.UP);

        }

        else {
            this.direction = Constants.SKIER_DIRECTIONS.UP;

        }

    }

    turnDown() {
        this.setDirection(Constants.SKIER_DIRECTIONS.DOWN);
    }

    //check if the skier has hit rock 1 or rock 2 or obstacle is jump rump
    // and the user clicked on up botton
    checkSkierShouldJumpOverRocks(obstacleName) {

        let skierJumpChecker = false;
        if (this.direction === Constants.SKIER_DIRECTIONS.UP
            && (obstacleName === Constants.ROCK1
                || obstacleName === Constants.ROCK2
                || obstacleName === Constants.JUMP_RAMP))
            skierJumpChecker = true;

        // successful jump
        // made this step because the skier is in crash mode
        // so I've lefted it up
        if (obstacleName === Constants.JUMP_RAMP && skierJumpChecker) {
            this.turnUp();
        }
        return skierJumpChecker;
    }

    checkIfSkierHitObstacle(obstacleManager, assetManager) {
        const asset = assetManager.getAsset(this.assetName);
        const skierBounds = new Rect(
            this.x - asset.width / 2,
            this.y - asset.height / 2,
            this.x + asset.width / 2,
            this.y - asset.height / 4
        );

        const collision = obstacleManager.getObstacles().find((obstacle) => {
            const obstacleAsset = assetManager.getAsset(obstacle.getAssetName());
            const obstaclePosition = obstacle.getPosition();
            const obstacleBounds = new Rect(
                obstaclePosition.x - obstacleAsset.width / 2,
                obstaclePosition.y - obstacleAsset.height / 2,
                obstaclePosition.x + obstacleAsset.width / 2,
                obstaclePosition.y
            );
            const checkintersectTwoRects = intersectTwoRects(skierBounds, obstacleBounds);


            if (checkintersectTwoRects && this.checkSkierShouldJumpOverRocks(obstacle.getAssetName())) return false;

            return checkintersectTwoRects

        });

        if (collision) {
            this.setDirection(Constants.SKIER_DIRECTIONS.CRASH);
            // reseet speed after crash to the init speed
            this.speed = Constants.SKIER_STARTING_SPEED;
            this.activeY = 0;

        }
    };
}