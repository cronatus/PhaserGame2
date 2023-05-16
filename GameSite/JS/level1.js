/**
 * Created by b00265222 on 26/10/2016.
 */


var Level1 = function(game){
    console.log("Launching Level 1", "color:white; background:red");
};

var board = [[4,4,4],               //This is a representation of the game board.
             [4,4,4],
             [4,4,4]];

var oo,ot,oth,to,tt,tth,tho,tht,thth;   // to keep variables shorter and more unique the following key was used for the buttons o = one, t = two & th = three
                                        // these are for the buttons on the screen
//var c1text,c2text,c3text,r1text,r2text,r3text,d1text,d2text;        //for indicating the current total of each row, column and diagonal
var c1,c2,c3,r1,r2,r3,d1,d2;                                        //variables for recording each column, row and diagonal
var c1clear, c2clear, c3clear, r1clear, r2clear, r3clear, d1clear, d2clear;     //boolean's to check that the columns, rows and diagonals have correctly hit the passing mark
var vic = false;           //to check that victory has been achieved

Level1.prototype = {

    preload: function () {

        game.load.image('blue', 'Res/colour/blue_square.png');
        game.load.image('green', 'Res/colour/green_square.png');
        game.load.image('yellow', 'Res/colour/yellow_square.png');

    },

    create: function () {

        game.stage.backgroundColor = "#CC0000";
        vic = false;
        board = [[4,4,4],          //This resets the board everytime the stage is loaded to ensure it is not saving variables wrongly.
                [4,4,4],
                [4,4,4]];

        oo = game.add.sprite(150,50, 'blue');
        oo.scale.setTo(0.5);
        ot = game.add.sprite(325,50, 'blue');
        ot.scale.setTo(0.5);
        oth = game.add.sprite(500,50, 'blue');
        oth.scale.setTo(0.5);
        to = game.add.sprite(150,225, 'blue');
        to.scale.setTo(0.5);
        tt = game.add.sprite(325,225, 'blue');
        tt.scale.setTo(0.5);
        tth = game.add.sprite(500,225, 'blue');
        tth.scale.setTo(0.5);
        tho = game.add.sprite(150,400, 'blue');
        tho.scale.setTo(0.5);
        tht = game.add.sprite(325,400, 'blue');
        tht.scale.setTo(0.5);
        thth = game.add.sprite(500,400, 'blue');
        thth.scale.setTo(0.5);
        var backButton = game.add.sprite(20,20, 'back');

        /*c1text = game.add.text(655, 110, 0 , {fill: '#ffffff'});            //used for testing that the numbers are being checked correctly
        c2text = game.add.text(655, 290, 0 , {fill: '#ffffff'});
        c3text = game.add.text(655, 460, 0 , {fill: '#ffffff'});
        r1text = game.add.text(215, 555, 0 , {fill: '#ffffff'});
        r2text = game.add.text(395, 555, 0 , {fill: '#ffffff'});
        r3text = game.add.text(565, 555, 0 , {fill: '#ffffff'});
        d1text = game.add.text(130, 555, 0 , {fill: '#ffffff'});
        d2text = game.add.text(655, 555, 0 , {fill: '#ffffff'});*/

        oo.inputEnabled = true;                                             //activate button input capability
        ot.inputEnabled = true;
        oth.inputEnabled = true;
        to.inputEnabled = true;
        tt.inputEnabled = true;
        tth.inputEnabled = true;
        tho.inputEnabled = true;
        tht.inputEnabled = true;
        thth.inputEnabled = true;
        backButton.inputEnabled = true;

        oo.events.onInputDown.add(ooListener, this);                        //connect listeners for each button
        ot.events.onInputDown.add(otListener, this);
        oth.events.onInputDown.add(othListener, this);
        to.events.onInputDown.add(toListener, this);
        tt.events.onInputDown.add(ttListener, this);
        tth.events.onInputDown.add(tthListener, this);
        tho.events.onInputDown.add(thoListener, this);
        tht.events.onInputDown.add(thtListener, this);
        thth.events.onInputDown.add(ththListener, this);
        backButton.events.onInputDown.add(lvl1backlistener,this);

    },

    update: function () {



    },

    render: function () {



    }

};

function lvl1backlistener(){
    console.log("button clicked");
    game.state.start('lvl1menu')
}