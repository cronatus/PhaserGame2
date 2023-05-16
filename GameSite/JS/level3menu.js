/**
 * Created by B00265222/MWilliams on 24/09/2016.
 */



var level3menu = function(game){
    console.log("Starting the game", "color:white; background:red");
};

level3menu.prototype = {
    preload: function () {

    },

    create: function () {

        game.stage.backgroundColor = "#4B0082";

        var startButton = game.add.sprite(300,150, 'start');
        var backButton = game.add.sprite(20,20, 'back');


        startButton.inputEnabled = true;
        backButton.inputEnabled = true;

        startButton.events.onInputDown.add(Startlevel3listener,this);
        backButton.events.onInputDown.add(menubacklistener,this);
    },

    update: function () {

    }
};

function menubacklistener() {
    console.log("button clicked");
    game.state.start('menu')
}

function Startlevel3listener() {
    console.log("button clicked");
    game.state.start('puzzle3')
}