import * as Constants from "../Constants";
import { Entity } from "./Entity";
import { intersectTwoRects, Rect } from "../Core/Utils";

const CHASING_DISTANCE = 500;

export class Rhino extends Entity {
	assetName = Constants.RHINO_RUN_LEFT;
	direction = Constants.RHINO_DIRECTIONS.RUN_LEFT;

	constructor(x, y) {
		super(x, y);
	}

	// draw rhino
	drawRhino(canvas, assetManager) {
		if (this.y >= CHASING_DISTANCE) {
			this.draw(canvas, assetManager);
		}
	}


	// start chasing the skier if the chasing distance is met
	move(skier, assetManager) {
		if (skier.y >= CHASING_DISTANCE &&
			this.direction === Constants.RHINO_DIRECTIONS.RUN_LEFT) {
			this.y = skier.y;
			this.initChaseSkier(skier, assetManager);

		}
		this.updateDirection(skier);
	}
	initChaseSkier(skier, assetManager) {
		switch (skier.direction) {
			case Constants.SKIER_DIRECTIONS.DOWN:
				this.moveRhinoDown(skier.y);
				break;
			case Constants.SKIER_DIRECTIONS.LEFT:
				this.moveRhinoLeft(skier.speed);
				break;
			case Constants.SKIER_DIRECTIONS.RIGHT:
				this.moveRhinoRight(skier.speed);
				break;
			case Constants.SKIER_DIRECTIONS.UP:
				this.moveRhinoUp(skier.y);
				break;
			case Constants.SKIER_DIRECTIONS.CRASH:
				this.moveRhinoDown(skier.y);
				break;
		}

		// current rhino direction is run left, and
		//rhino and skier met at a certain point
		if (this.direction === Constants.RHINO_DIRECTIONS.RUN_LEFT
			&& this.CheckForCollision(assetManager, skier)) {
			// if rhino met the skier, kill the skier
			// remove the skier from the scene, or else it will keep on running
			this.killSkier(skier);
			//  move it to the next step (LIFT_SKIER)
			this.setDirection(Constants.RHINO_DIRECTIONS.LIFT_SKIER);

		}
	}

	CheckForCollision(assetManager, skier) {
		// get directions for rhino and skier
		const asset = assetManager.getAsset(this.assetName);
		const RhinoBounds = new Rect(
			this.x - asset.width / 2,
			this.y - asset.height / 2,
			this.x + asset.width / 2,
			this.y - asset.height / 4
		);

		const SkierAsset = assetManager.getAsset(skier.assetName);
		const SkierBounds = new Rect(
			skier.x - SkierAsset.width / 2,
			skier.y - SkierAsset.height / 2,
			skier.x + SkierAsset.width / 2,
			skier.y - SkierAsset.height / 4
		);
		// check if the rhino and the skier met at one point
		// then it's collision
		return intersectTwoRects(RhinoBounds, SkierBounds);


	}

	moveRhinoLeft(skier_speed) {
		this.x += skier_speed;
	}

	moveRhinoRight(skier_speed) {
		this.x += skier_speed * 2;
	}

	moveRhinoUp(skierX) {
		this.x = skierX - CHASING_DISTANCE * 2;
	}

	moveRhinoDown(skierY) {
		this.x = skierY - CHASING_DISTANCE * 2;
	}


	updateDirection(skier) {
		if (this.direction) {
			switch (this.direction) {
				case Constants.RHINO_DIRECTIONS.LIFT_SKIER:
					this.drawKillSkierScene(Constants.RHINO_DIRECTIONS.LIFT_MOUTH_OPEN_SKIER);
					break;
				case Constants.RHINO_DIRECTIONS.LIFT_MOUTH_OPEN_SKIER:
					this.drawKillSkierScene(Constants.RHINO_DIRECTIONS.LIFT_EAT1);
					break;
				case Constants.RHINO_DIRECTIONS.LIFT_EAT1:
					this.drawKillSkierScene(Constants.RHINO_DIRECTIONS.LIFT_EAT2);
					break;
				case Constants.RHINO_DIRECTIONS.LIFT_EAT2:
					this.drawKillSkierScene(Constants.RHINO_DIRECTIONS.LIFT_EAT3);
					break;
				case Constants.RHINO_DIRECTIONS.LIFT_EAT3:
					this.drawKillSkierScene(Constants.RHINO_DIRECTIONS.RHINO_LIFT_EAT4);
					break;
			}
		}

	}
	// draw the kill of the skier
	drawKillSkierScene(rhinoDirection) {
		setTimeout(() => {
			this.setDirection(rhinoDirection);
		}, 500);
	}
  


	// set skier assetName to "SKIER_DEAD"
	killSkier(skier) {
		skier.direction = Constants.SKIER_DIRECTIONS.DIED;
		skier.y = this.y;
		skier.x = this.x;
		skier.assetName = Constants.SKIER_DIED;
	}

	setDirection(direction) {
		this.direction = direction;
		this.updateAsset();
	}

	updateAsset() {
		this.assetName = Constants.RHINO_DIRECTION_ASSET[this.direction];
	}

}
