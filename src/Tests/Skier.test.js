import "babel-polyfill";
import { Skier } from "../Entities/Skier";
import * as Constants from "../Constants";
describe('Testing Skier Directions When', () => {
    let skier;

    beforeEach(() => {
        skier = new Skier(0, 0);


    });

    test('pressing left arrow sets the skier direction to be 1', () => {
        skier.turnLeft();
        expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.LEFT);
    });


    test('pressing right arrow sets the skier direction to be 5', () => {
        skier.turnRight();
        expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.RIGHT);
    });



    test('pressing up arrow sets the skier direction to be 6', () => {
        skier.turnUp();
        expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.UP);
    });


    test('pressing down arrow sets the skier direction to be 2', () => {
        skier.turnDown();
        expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.DOWN);
    });
});

describe('Testing Skier Jumps', () => {
    let skier;

    beforeEach(() => {
        skier = new Skier(0, 0);
        test('if skier jump over rock1, then skier assetName should be up', () => {
            skier.checkSkierShouldJumpOverRocks("rock1");
            skier.checkSkierShouldJumpOverRocks("jumpRamp");
            skier.turnUp();
            expect(skier.assetName).toBe("skierUp");

        });

        test('if skier jump over rock2, then skier assetName should be up', () => {
            skier.checkSkierShouldJumpOverRocks("rock2");
            skier.checkSkierShouldJumpOverRocks("skierUp");
            skier.turnUp();
            expect(skier.assetName).toBe(Constants.SKIER_DIRECTIONS.UP);
        });


        test('if skier jump over tree, then skier assetName should be crash', () => {
            skier.checkSkierShouldJumpOverRocks("tree");
            skier.checkSkierShouldJumpOverRocks("jumpRamp");
            skier.turnUp();
            expect(skier.assetName).toBe("skierCrash");

        });
    });



});




describe('Testing Skier speed upon different moves', () => {
    let skier;

    beforeEach(() => {
        skier = new Skier(0, 0);
        skier.y = 10;
        skier.speed = 10;
        test('if skier moves down, speed should = skier.y + skier.speed', () => {

            skier.direction = Constants.SKIER_DIRECTIONS.LEFT_DOWN;
            skier.move();
            expect(skier.y).toBe(20);

        });



    });



});