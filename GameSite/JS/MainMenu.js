/**
 * Created by B00265222/MWilliams on 24/09/2016.
 */



var MainMenu = function(game){
    console.log("Starting the game", "color:white; background:red");
};

MainMenu.prototype = {
    preload: function () {

        //fill preloader with games assets

        game.load.image('square', 'Res/button_magic-square.png');
        game.load.image('dwarves', 'Res/button_three-dwarves.png');
        game.load.image('credits', 'Res/button_credits.png');
        game.load.image('similarity', 'Res/button_simple-similarity.png');
        game.load.image('start', 'Res/button_start.png');
        game.load.image('howto', 'Res/button_instructions.png');
        game.load.image('credits', 'Res/button_credits.png');
        game.load.image('back', 'Res/back_Button.png');

        //load an image like below

    },

    create: function () {

        game.stage.backgroundColor = "#4488AA";

        var squareButton = game.add.sprite(300,150, 'square');
        var dwarfButton = game.add.sprite(300,200, 'dwarves');
        var similarityButton = game.add.sprite(300,250, 'similarity');
        var creditsButton = game.add.sprite(300,300, 'credits');

        squareButton.inputEnabled = true;
        dwarfButton.inputEnabled = true;
        similarityButton.inputEnabled = true;
        creditsButton.inputEnabled = true;

        squareButton.events.onInputDown.add(squarelistener,this);
        dwarfButton.events.onInputDown.add(dwarflistener,this);
        similarityButton.events.onInputDown.add(similaritylistener,this);
        creditsButton.events.onInputDown.add(creditslistener,this);
    },

    update: function () {

    }
};

function squarelistener() {
    console.log("button clicked");
    game.state.start('lvl1menu')
}

function dwarflistener() {
    console.log("button clicked");
    game.state.start('puzzle2')
}

function similaritylistener() {
    console.log("button clicked");
    game.state.start('lvl3menu')
}

function creditslistener() {
    console.log("button clicked");
    game.state.start('credits')
}