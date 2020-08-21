import "babel-polyfill";
import { Skier } from "../Entities/Skier";
import * as Constants from "../Constants";
import { Rhino } from "../Entities/Rhino";
import { AssetManager } from "../Core/AssetManager";
describe('Testing Rhino Directions And Actions', () => {
    let skier;
    let rhino;
    let assetManager;
    beforeEach(() => {
        skier = new Skier(0, 0);
        rhino = new Rhino(0, 0);
        assetManager = new AssetManager();


    });
    test('Rhino direction will be rhinoRunLeft after the chasing distance', () => {
        skier.move();
        skier.turnLeft();
        rhino.move(skier, assetManager);
        skier.y = Constants.CHASING_DISTANCE;
        expect(rhino.assetName).toBe("rhinoRunLeft");
    });
});