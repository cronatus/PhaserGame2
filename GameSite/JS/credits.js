/**
 * Created by b00265222 on 04/10/2016.
 */

var Credits = function(game){
    console.log("Launching credits", "color:white; background:red");
};

var text1, text2, text3, text4, text5;

Credits.prototype = {

    preload: function () {



    },

    create: function () {

        game.stage.backgroundColor = "#4488AA";

        text1 = game.add.text(100, 200, 'Menu Buttons sourced from DaButtonfactory.com ',{fill: '#ffffff'});
        text2 = game.add.text(100, 240, 'Dwarf animations by Daniel Burke/B00291776 ',{fill: '#ffffff'});
        text3 = game.add.text(100, 280, 'Magic Square buttons by Mark Williams/B00265222 ', {fill: '#ffffff'});
        text4 = game.add.text(100, 320, 'Programming/Website by Mark Williams/B00265222 ', {fill: '#ffffff'});
        text5 = game.add.text(100, 360, 'Game Designs by Daniel Burke/B00291776 ', {fill: '#ffffff'});
        text1.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text3.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text4.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text5.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

        var backButton = game.add.sprite(20,20, 'back');

        backButton.inputEnabled = true;

        backButton.events.onInputDown.add(menubacklistener,this);

    },

    render: function () {

    }

};