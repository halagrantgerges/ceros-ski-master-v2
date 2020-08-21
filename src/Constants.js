export const GAME_WIDTH = window.innerWidth;
export const GAME_HEIGHT = window.innerHeight;

export const SKIER_CRASH = 'skierCrash';
export const SKIER_LEFT = 'skierLeft';
export const SKIER_LEFTDOWN = 'skierLeftDown';
export const SKIER_DOWN = 'skierDown';
export const SKIER_RIGHTDOWN = 'skierRightDown';
export const SKIER_RIGHT = 'skierRight';
export const TREE = 'tree';
export const TREE_CLUSTER = 'treeCluster';
export const ROCK1 = 'rock1';
export const ROCK2 = 'rock2';
export const SKIER_UP = 'skierUp';
export const JUMP_RAMP = 'jumpRamp';
export const RHINO_DEFAULT = 'rhinoDefault';
export const RHINO_RUN_LEFT = 'rhinoRunLeft';
export const RHINO_LIFT = 'rhinoLift';
export const RHINO_LIFT_MOUTH_OPEN = 'rhinoLiftMouthOpen';
export const RHINO_LIFT_EAT1 = 'rhinoLiftEat1';
export const RHINO_LIFT_EAT2 = 'rhinoLiftEat2';
export const RHINO_LIFT_EAT3 = 'rhinoLiftEat3';
export const RHINO_LIFT_EAT4 = 'rhinoLiftEat4';
export const SKIER_DIED = 'SkierDied';

export const SKIER_STARTING_SPEED = 8;
export const SKIER_DIAGONAL_SPEED_REDUCER = 1.4142;

// adding initial space between skier and rhino
export const CHASING_DISTANCE = 8000;


export const ASSETS = {
    [SKIER_CRASH]: 'img/skier_crash.png',
    [SKIER_LEFT]: 'img/skier_left.png',
    [SKIER_LEFTDOWN]: 'img/skier_left_down.png',
    [SKIER_DOWN]: 'img/skier_down.png',
    [SKIER_RIGHTDOWN]: 'img/skier_right_down.png',
    [SKIER_RIGHT]: 'img/skier_right.png',
    [TREE]: 'img/tree_1.png',
    [TREE_CLUSTER]: 'img/tree_cluster.png',
    [ROCK1]: 'img/rock_1.png',
    [ROCK2]: 'img/rock_2.png',
    [SKIER_UP]: 'img/skier_jump_1.png',
    [JUMP_RAMP]: 'img/jump_ramp.png',
    [RHINO_RUN_LEFT]: 'img/rhino_run_left.png',
    [RHINO_LIFT]: 'img/rhino_lift.png',
    [RHINO_LIFT_MOUTH_OPEN]: 'img/rhino_lift_mouth_open.png',
    [RHINO_LIFT_EAT1]: 'img/rhino_lift_eat_1.png',
    [RHINO_LIFT_EAT2]: 'img/rhino_lift_eat_2.png',
    [RHINO_LIFT_EAT3]: 'img/rhino_lift_eat_3.png',
    [SKIER_DIED]: 'img/rhino_lift_eat_4.png',
    [RHINO_LIFT_EAT4]: 'img/rhino_lift_eat_4.png',

};

// added more skier directions
export const SKIER_DIRECTIONS = {
    CRASH: 0,
    LEFT: 1,
    LEFT_DOWN: 2,
    DOWN: 3,
    RIGHT_DOWN: 4,
    RIGHT: 5,
    UP: 6,
    DIED: 7
};

export const SKIER_DIRECTION_ASSET = {
    [SKIER_DIRECTIONS.CRASH]: SKIER_CRASH,
    [SKIER_DIRECTIONS.LEFT]: SKIER_LEFT,
    [SKIER_DIRECTIONS.LEFT_DOWN]: SKIER_LEFTDOWN,
    [SKIER_DIRECTIONS.DOWN]: SKIER_DOWN,
    [SKIER_DIRECTIONS.RIGHT_DOWN]: SKIER_RIGHTDOWN,
    [SKIER_DIRECTIONS.RIGHT]: SKIER_RIGHT,
    [SKIER_DIRECTIONS.UP]: SKIER_UP,
    [SKIER_DIRECTIONS.DIED]: SKIER_DIED
};

export const KEYS = {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
    SPACE: 32
};


// adding rhinos directions
export const RHINO_DIRECTIONS = {
    RUN_LEFT: 0,
    LIFT_SKIER: 1,
    LIFT_MOUTH_OPEN_SKIER: 2,
    LIFT_EAT1: 3,
    LIFT_EAT2: 4,
    LIFT_EAT3: 5,
    LIFT_EAT4: 6
};


// adding rhinos direction asset
export const RHINO_DIRECTION_ASSET = {
    [RHINO_DIRECTIONS.RUN_LEFT]: RHINO_RUN_LEFT,
    [RHINO_DIRECTIONS.LIFT_SKIER]: RHINO_LIFT,
    [RHINO_DIRECTIONS.LIFT_MOUTH_OPEN_SKIER]: RHINO_LIFT_MOUTH_OPEN,
    [RHINO_DIRECTIONS.LIFT_EAT1]: RHINO_LIFT_EAT1,
    [RHINO_DIRECTIONS.LIFT_EAT2]: RHINO_LIFT_EAT2,
    [RHINO_DIRECTIONS.LIFT_EAT3]: RHINO_LIFT_EAT3,
    [RHINO_DIRECTIONS.LIFT_EAT4]: RHINO_LIFT_EAT4,

};