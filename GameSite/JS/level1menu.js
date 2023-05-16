/**
 * Created by B00265222/MWilliams on 24/09/2016.
 */



var level1menu = function(game){
    console.log("Starting the game", "color:white; background:red");
};

level1menu.prototype = {
    preload: function () {

    },

    create: function () {

        game.stage.backgroundColor = "#CC0000";

        var startButton = game.add.sprite(300,150, 'start');
        var backButton = game.add.sprite(20,20, 'back');

        var text1 = game.add.text(200, 230, "'The number makes the colour, ", {fill: '#ffffff'});
        var text2 = game.add.text(200, 260, "but the word is not how it's ", {fill: '#ffffff'});
        var text3 = game.add.text(200, 290, "perceived', Press the coloured ", {fill: '#ffffff'});
        var text4 = game.add.text(200, 320, 'button to change the colour ',{fill: '#ffffff'});
        var text5 = game.add.text(200, 350, 'on each square, ensure every ',{fill: '#ffffff'});
        var text6 = game.add.text(200, 380, 'row, column and diagonal ',{fill: '#ffffff'});
        var text7 = game.add.text(200, 410, 'add up to the same number, each ', {fill: '#ffffff'});
        var text8 = game.add.text(200, 440, 'can only be used 3 times colour ', {fill: '#ffffff'});
        text1.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text3.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text4.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text5.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text6.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text7.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text8.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

        startButton.inputEnabled = true;
        backButton.inputEnabled = true;

        startButton.events.onInputDown.add(Startlevel1listener,this);
        backButton.events.onInputDown.add(menubacklistener,this);
    },

    update: function () {

    }
};

function menubacklistener() {
    console.log("button clicked");
    game.state.start('menu')
}

function Startlevel1listener() {
    console.log("button clicked");
    game.state.start('puzzle1')
}