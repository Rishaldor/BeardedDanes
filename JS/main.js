// der er to slags commenting med js, line comment hvor du starter linien med // eller block comment hvor du kommenterer en hel blok ud /* commenteret ud */




// Ass junk

/* Her starter jeg et nyt Phaser object. new er en af de mere komplicerede ting ved JS, ligesom prototyper og inheritance. Det kan vi diskutere når vi ved lidt mere.*/ 
var game = new Phaser.Game(400, 300, Phaser.AUTO, 'phaser-example', {
    preload: preload,
    create: create,
    update: update,
    render: render
});



// I preload indlæser vi alle ekstra filer vi vil bruge til vores app/game
function preload() {
    game.load.image('dude', 'img/playerTemplate.png');
}

/* Jeg erklærer mine variabler her, det er åbenbart ikke nødvendigt med JS men for de fleste andre sprog er det sådan man gør det*/
var player;
var jumpTimer = 0;
var cursors;
var jumpButton;



//I create skaber vi vores game objects
function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = '#000000';


    game.physics.arcade.gravity.y = 250;

    player = game.add.sprite(32, 32, 'dude');
    game.physics.enable(player, Phaser.Physics.ARCADE);

    player.body.bounce.y = 0.2;
    player.body.collideWorldBounds = true;
    //player.body.setSize(20, 32, 5, 16);

    game.camera.follow(player);

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

}
// Update er til de ting der skal opdateres hver cpu cycle
function update() {

    player.body.velocity.x = 0;

    if (cursors.left.isDown) {
        player.body.velocity.x = -150;
    } else if (cursors.right.isDown) {
        player.body.velocity.x = 150;
    }


    if (jumpButton.isDown && player.body.onFloor() && game.time.now > jumpTimer) {
        player.body.velocity.y = -250;
        jumpTimer = game.time.now + 750;
    }

}

function render() {

    // game.debug.text(game.time.physicsElapsed, 32, 32);
    // game.debug.body(player);
    // game.debug.bodyInfo(player, 16, 24);

}