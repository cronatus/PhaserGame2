/**
 * Created by b00265222 on 26/10/2016.
 */

/**
 *  the drunk dwarf will always truth, the tipsy one will tell the truth and lie, the sober fake will lie. A man figured out which dwarf is which and got a free drink, can you do the same?
 * @param game
 * @constructor
 */


var Level2 = function(game){
    console.log("Launching Level 2", "color:white; background:red");
};

var guy1, guy2, guy3;                   //dwarf sprite declaration variables
var quote;                              //dwarf quote text variable
var inst;                               //Instruction printing text variable
var buttone, butttwo, buttthree;        //puzzle interaction buttons
var dwarf1 = 1;                         //for reference 1 = sober, 2 = drunk & 3 = tipsy
var dwarf2 = 1;                         //these are for recording the current chosen name of the individual dwarves from the player
var dwarf3 = 1;


Level2.prototype = {

    preload: function () {

        game.load.image('drunk', 'Res/dwarf/drunk.png');
        game.load.image('tipsy', 'Res/dwarf/tipsy.png');
        game.load.image('sober', 'Res/dwarf/sober.png');

        game.load.spritesheet('dwarves', 'Res/dwarf/dwarf.png', 128,128);

    },

    create: function () {

        dwarf1 = 1;
        dwarf2 = 1;
        dwarf3 = 1;

        game.stage.backgroundColor = "#55CC55";

        var backButton = game.add.sprite(20,20, 'back');
        buttone = game.add.sprite(150,110, 'sober');
        butttwo = game.add.sprite(350,110, 'sober');
        buttthree = game.add.sprite(550,110, 'sober');

        guy1 = game.add.sprite(140, 150, "dwarves");
        guy2 = game.add.sprite(340, 150, "dwarves");
        guy3 = game.add.sprite(540, 150, "dwarves");
        quote = game.add.text(110, 310, "middle is sober" , { font: "24px Arial", fill: '#ffffff'});
        quote = game.add.text(350, 310, "I am tipsy" , { font: "24px Arial", fill: '#ffffff'});
        quote = game.add.text(520, 310, "middle is drunk" , { font: "24px Arial", fill: '#ffffff'});
        inst = game.add.text(200, 480, "the drunk dwarf will always tell the truth," , { font: "24px Arial", fill: '#ffffff'});
        inst = game.add.text(200, 500, "the tipsy dwarf will tell the truth or lie," , { font: "24px Arial", fill: '#ffffff'});
        inst = game.add.text(200, 520, "the sober (fake) dwarf will lie." , { font: "24px Arial", fill: '#ffffff'});
        inst = game.add.text(200, 540, "A man figured out which dwarf is which," , { font: "24px Arial", fill: '#ffffff'});
        inst = game.add.text(200, 560, "can you do the same?" , { font: "24px Arial", fill: '#ffffff'});

        guy1.animations.add('drunk', [1,2,3,4], null, false);
        guy3.animations.add('tipsy', [5,6,7,8], null, false);
        guy2.animations.add('fake',  [9,10,11,12,13,14,15], null, false);


        backButton.inputEnabled = true;
        buttone.inputEnabled = true;
        butttwo.inputEnabled = true;
        buttthree.inputEnabled = true;

        backButton.events.onInputDown.add(backlistener,this);
        buttone.events.onInputDown.add(dwarf1listener,this);
        butttwo.events.onInputDown.add(dwarf2listener,this);
        buttthree.events.onInputDown.add(dwarf3listener,this);

    },

    update: function () {

        if (dwarf1 == 2 && dwarf2 == 1 && dwarf3 == 3) {

            buttone.inputEnabled = false;
            butttwo.inputEnabled = false;
            buttthree.inputEnabled = false;

        }

    },

    render: function () {



    }

};

function backlistener() {
    console.log("button clicked");
    game.state.start('menu')
}

function dwarf1listener() {

    switch(dwarf1){
        case 1:
            dwarf1 = 2;
            buttone.loadTexture('drunk', 0);
            break;
        case 2:
            dwarf1 = 3;
            buttone.loadTexture('tipsy', 0);
            break;
        case 3:
            dwarf1 = 1;
            buttone.loadTexture('sober', 0);
            break;
    }

    victcheck();

}

function dwarf2listener() {

    switch(dwarf2){
        case 1:
            dwarf2 = 2;
            butttwo.loadTexture('drunk', 0);
            break;
        case 2:
            dwarf2 = 3;
            butttwo.loadTexture('tipsy', 0);
            break;
        case 3:
            dwarf2 = 1;
            butttwo.loadTexture('sober', 0);
            break;
    }

    victcheck();

}

function dwarf3listener() {

    switch(dwarf3){
        case 1:
            dwarf3 = 2;
            buttthree.loadTexture('drunk');
            break;
        case 2:
            dwarf3 = 3;
            buttthree.loadTexture('tipsy', 0);
            break;
        case 3:
            dwarf3 = 1;
            buttthree.loadTexture('sober', 0);
            break;
    }

    victcheck();

}

function victcheck() {

    var victory;

        if (dwarf1 == 2 && dwarf2 == 1 && dwarf3 == 3) {

            victory = game.add.text(50, 300, "CONGRATULATIONS", { font: "72px Arial", fill: '#CC0000'});
            victory = game.add.text(150, 374, "you have completed the three 'dwarves' puzzle", { font: "24px Arial", fill: '#CC0000'});

            guy1.animations.play('drunk', 2, true, false);
            guy2.animations.play('fake', 2, false, false);
            guy3.animations.play('tipsy', 2, true, false)

        }

}