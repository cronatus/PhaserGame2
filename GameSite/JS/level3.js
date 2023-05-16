/**
 * Created by b00265222 on 26/10/2016.
 */

/**
 *      ToDo:
 *      1: Preload and create all buttons(position and scale)  -- Done
 *      2: code button interactions  -- in progress
 *      3: integrate lives system -- in progress0
 *      4: integrate hints system -- in progress
 *      6: congratulations screen -- Done
 *      7: Make background flash around like crazy (JK Rowling) -- Not happening
 *      8: Add in things that arn't buttons like the question and stuff DOY !!!<<----
 *
 *
 */


var Level3 = function(game){
    console.log("Launching Level 3", "color:white; background:red");
};

var lives = 3;
var livesprint;
var hints = 2;
var wrongtimer = 0;
var nyet;
var hintbutt;

// declaration of all variables involved ith the buttons that will be interacted with in the puzzle

var abounded, abrasive, accident, acrimonious, addition, adjust, aerated, airtight, airy, aluminium, atomic, auto, axes;
var brew, carbonated, cocaine, death, difficult, drink, easy, effect, feign, fizzy, food, glass, increased, life, made, man;
var misfortune, moment, obtain, original, prepare, prime, puzzle, radiant, radiation, small, soda, survive, unstable;

Level3.prototype = {

    preload: function () {

        game.load.image('abounded', 'Res/Buttons/button_abounded.png');
        game.load.image('abrasive', 'Res/Buttons/button_abrasive.png');
        game.load.image('accident', 'Res/Buttons/button_accident.png');
        game.load.image('acrimonious', 'Res/Buttons/button_acrimonious.png');
        game.load.image('addition', 'Res/Buttons/button_addition.png');
        game.load.image('adjust', 'Res/Buttons/button_adjust.png');
        game.load.image('aerated', 'Res/Buttons/button_aerated.png');
        game.load.image('airtight', 'Res/Buttons/button_airtight.png');
        game.load.image('airy', 'Res/Buttons/button_airy.png');
        game.load.image('aluminium', 'Res/Buttons/button_aluminium.png');
        game.load.image('atomic', 'Res/Buttons/button_atomic.png');
        game.load.image('auto', 'Res/Buttons/button_auto.png');
        game.load.image('axes', 'Res/Buttons/button_axes.png');
        game.load.image('brew', 'Res/Buttons/button_brew.png');
        game.load.image('carbonated', 'Res/Buttons/button_carbonated.png');
        game.load.image('cocaine', 'Res/Buttons/button_cocaine.png');
        game.load.image('death', 'Res/Buttons/button_death.png');
        game.load.image('difficult', 'Res/Buttons/button_difficult.png');
        game.load.image('drink', 'Res/Buttons/button_drink.png');
        game.load.image('easy', 'Res/Buttons/button_easy.png');
        game.load.image('effect', 'Res/Buttons/button_effect.png');
        game.load.image('feign', 'Res/Buttons/button_feign.png');
        game.load.image('fizzy', 'Res/Buttons/button_fizzy.png');
        game.load.image('food', 'Res/Buttons/button_food.png');
        game.load.image('glass', 'Res/Buttons/button_glass.png');
        game.load.image('increased', 'Res/Buttons/button_increased.png');
        game.load.image('life', 'Res/Buttons/button_life.png');
        game.load.image('made', 'Res/Buttons/button_made.png');
        game.load.image('man', 'Res/Buttons/button_man.png');
        game.load.image('misfortune', 'Res/Buttons/button_misfortune.png');
        game.load.image('moment', 'Res/Buttons/button_moment.png');
        game.load.image('obtain', 'Res/Buttons/button_obtain.png');
        game.load.image('original', 'Res/Buttons/button_original.png');
        game.load.image('prepare', 'Res/Buttons/button_prepare.png');
        game.load.image('prime', 'Res/Buttons/button_prime.png');
        game.load.image('puzzle', 'Res/Buttons/button_puzzle.png');
        game.load.image('radiant', 'Res/Buttons/button_radiant.png');
        game.load.image('radiation', 'Res/Buttons/button_radiation.png');
        game.load.image('small', 'Res/Buttons/button_small.png');
        game.load.image('soda', 'Res/Buttons/button_soda.png');
        game.load.image('survive', 'Res/Buttons/button_survive.png');
        game.load.image('unstable', 'Res/Buttons/button_unstable.png');
        game.load.image('hint', 'Res/Buttons/button_hint.png');
        game.load.image('coca', 'Res/Buttons/cocacola.png');
        game.load.image('microwave', 'Res/Buttons/microwave.png');
        game.load.image('penguin', 'Res/Buttons/penguin.png');

    },

    create: function () {

        game.stage.backgroundColor = "#4B0082";

        lives = 3;              //set these variables in the create function to ensure they are reset when
        hints = 2;              //the state is left and returned to
        wrongtimer = 0;
        livesprint = game.add.text(700, 20, "Lives = " + lives, { font: "24px Arial", fill: '#FFFFFF'});        //print out the lives available to the player.

        //--------------------------------------------------------------Button creation start

        // ------- Row 1 Start
        abounded = game.add.sprite(20,275,'abounded');
        abounded.scale.setTo(0.75,0.75);
        easy = game.add.sprite(130, 275, 'easy');
        easy.scale.setTo(0.75,0.65);
        acrimonious = game.add.sprite(240,275, 'acrimonious');
        acrimonious.scale.setTo(0.75,0.75);
        misfortune = game.add.sprite(350, 275, 'misfortune');
        misfortune.scale.setTo(0.75,0.65);
        food = game.add.sprite(460, 275, 'food');
        food.scale.setTo(0.75,0.65);
        aluminium = game.add.sprite(570, 275, 'aluminium');
        aluminium.scale.setTo(0.75,0.65);
        feign = game.add.sprite(680, 275, 'feign');
        feign.scale.setTo(0.75,0.65);

        // ------- Row 1 End -- Row 2 Start

        carbonated = game.add.sprite(20,325,'carbonated');
        carbonated.scale.setTo(0.75,0.65);
        difficult = game.add.sprite(130, 325, 'difficult');
        difficult.scale.setTo(0.75,0.65);
        effect = game.add.sprite(240, 325, 'effect');
        effect.scale.setTo(0.75,0.65);
        aerated = game.add.sprite(350, 325, 'aerated');
        aerated.scale.setTo(0.75,0.65);
        increased = game.add.sprite(460, 325, 'increased');
        increased.scale.setTo(0.75,0.65);
        abrasive = game.add.sprite(570, 325, 'abrasive');
        abrasive.scale.setTo(0.75,0.65);
        cocaine = game.add.sprite(680, 325, 'cocaine');
        cocaine.scale.setTo(0.75,0.65);

        // ------- Row 2 End -- Row 3 Start

        brew = game.add.sprite(20,375,'brew');
        brew.scale.setTo(0.75,0.65);
        atomic = game.add.sprite(130, 375, 'atomic');
        atomic.scale.setTo(0.75,0.65);
        glass = game.add.sprite(240, 375, 'glass');
        glass.scale.setTo(0.75,0.65);
        life = game.add.sprite(350, 375, 'life');
        life.scale.setTo(0.75,0.65);
        moment = game.add.sprite(460, 375, 'moment');
        moment.scale.setTo(0.75,0.65);
        prepare = game.add.sprite(570, 375, 'prepare');
        prepare.scale.setTo(0.75,0.65);
        drink = game.add.sprite(680, 375, 'drink');
        drink.scale.setTo(0.75,0.65);

        // ------- Row 3 End -- Row 4 Start

        man = game.add.sprite(20,425,'man');
        man.scale.setTo(0.75,0.65);
        made = game.add.sprite(130, 425, 'made');
        made.scale.setTo(0.75,0.65);
        obtain = game.add.sprite(240, 425, 'obtain');
        obtain.scale.setTo(0.65,0.65);
        prime = game.add.sprite(350, 425, 'prime');
        prime.scale.setTo(0.75,0.65);
        radiation = game.add.sprite(460, 425, 'radiation');
        radiation.scale.setTo(0.75,0.75);
        small = game.add.sprite(570, 425, 'small');
        small.scale.setTo(0.75,0.65);
        axes = game.add.sprite(680, 425, 'axes');
        axes.scale.setTo(0.75,0.65);

        // ------- Row 4 End -- Row 5 Start

        airtight = game.add.sprite(20,475,'airtight');
        airtight.scale.setTo(0.75,0.65);
        death = game.add.sprite(130, 475, 'death');
        death.scale.setTo(0.75,0.65);
        soda = game.add.sprite(240, 475, 'soda');
        soda.scale.setTo(0.75,0.65);
        fizzy = game.add.sprite(350, 475, 'fizzy');
        fizzy.scale.setTo(0.75,0.65);
        accident = game.add.sprite(460, 475, 'accident');
        accident.scale.setTo(0.75,0.65);
        radiant = game.add.sprite(570, 475, 'radiant');
        radiant.scale.setTo(0.75,0.65);
        adjust = game.add.sprite(680, 475, 'adjust');
        adjust.scale.setTo(0.75,0.65);

        // ------- Row 5 End -- Row 6 Start

        puzzle = game.add.sprite(20,525,'puzzle');
        puzzle.scale.setTo(0.75,0.60);
        addition = game.add.sprite(130, 525, 'addition');
        addition.scale.setTo(0.75,0.65);
        unstable = game.add.sprite(240, 525, 'unstable');
        unstable.scale.setTo(0.75,0.60);
        airy = game.add.sprite(350, 525, 'airy');
        airy.scale.setTo(0.75,0.60);
        original = game.add.sprite(460, 525, 'original');
        original.scale.setTo(0.75,0.65);
        survive = game.add.sprite(570, 525, 'survive');
        survive.scale.setTo(0.75,0.65);
        auto = game.add.sprite(680, 525, 'auto');
        auto.scale.setTo(0.75,0.60);

        // ------- Row 6 End

        //--------------------------------------------------------------Button creation end

        hintbutt = game.add.sprite(700, 50, 'hint');

        nyet = game.add.text(240, 170, "", { font: "24px Arial", fill: '#0000FF'});

        var object1, object2, object3;
        var question = game.add.text(170, 40, "What do the three objects below have in common?", { font: "18px Arial", fill: '#FFFFFF'});


        object1 = game.add.sprite(120, 100, 'coca');
        object1.scale.setTo(0.4, 0.4);
        object2 = game.add.sprite(275, 100, 'microwave');
        object2.scale.setTo(0.5, 0.6);
        object3 = game.add.sprite(450, 100, 'penguin');
        object3.scale.setTo(0.15, 0.15);

        var objecttext = game.add.text(140, 240, "Coca Cola",{ font: "18px Arial", fill: '#FFFFFF'});
        objecttext = game.add.text(295, 240, "a Microwave",{ font: "18px Arial", fill: '#FFFFFF'});
        objecttext = game.add.text(480, 240, "X-Rays",{ font: "18px Arial", fill: '#FFFFFF'});

        nyet = game.add.text(240, 60, "", { font: "24px Arial",fill: '#0000FF', fontStyle: 'bold' });

        var backButton = game.add.sprite(20,20, 'back');

        //--------------------------------------------------------------Button Interaction Begin until end of create

        backButton.inputEnabled = true;
        hintbutt.inputEnabled = true;
        abounded.inputEnabled = true;
        abrasive.inputEnabled = true;
        accident.inputEnabled = true;
        acrimonious.inputEnabled = true;
        addition.inputEnabled = true;
        adjust.inputEnabled = true;
        aerated.inputEnabled = true;
        airtight.inputEnabled = true;
        airy.inputEnabled = true;
        aluminium.inputEnabled = true;
        atomic.inputEnabled = true;
        auto.inputEnabled = true;
        axes.inputEnabled = true;
        brew.inputEnabled = true;
        carbonated.inputEnabled = true;
        cocaine.inputEnabled = true;
        death.inputEnabled = true;
        difficult.inputEnabled = true;
        drink.inputEnabled = true;
        easy.inputEnabled = true;
        effect.inputEnabled = true;
        feign.inputEnabled = true;
        fizzy.inputEnabled = true;
        food.inputEnabled = true;
        glass.inputEnabled = true;
        increased.inputEnabled = true;
        life.inputEnabled = true;
        made.inputEnabled = true;
        man.inputEnabled = true;
        misfortune.inputEnabled = true;
        moment.inputEnabled = true;
        obtain.inputEnabled = true;
        original.inputEnabled = true;
        prepare.inputEnabled = true;
        prime.inputEnabled = true;
        puzzle.inputEnabled = true;
        radiant.inputEnabled = true;
        radiation.inputEnabled = true;
        small.inputEnabled = true;
        soda.inputEnabled = true;
        survive.inputEnabled = true;
        unstable.inputEnabled = true;

        backButton.events.onInputDown.add(lvl3backlistener,this);
        hintbutt.events.onInputDown.add(hintlistener,this);
        abounded.events.onInputDown.add(wronganswerlistener,this);
        abrasive.events.onInputDown.add(wronganswerlistener,this);
        accident.events.onInputDown.add(correctanswerlistener,this);
        acrimonious.events.onInputDown.add(wronganswerlistener,this);
        addition.events.onInputDown.add(wronganswerlistener,this);
        adjust.events.onInputDown.add(wronganswerlistener,this);
        aerated.events.onInputDown.add(wronganswerlistener,this);
        airtight.events.onInputDown.add(wronganswerlistener,this);
        airy.events.onInputDown.add(wronganswerlistener,this);
        aluminium.events.onInputDown.add(wronganswerlistener,this);
        atomic.events.onInputDown.add(wronganswerlistener,this);
        auto.events.onInputDown.add(wronganswerlistener,this);
        axes.events.onInputDown.add(wronganswerlistener,this);
        brew.events.onInputDown.add(wronganswerlistener,this);
        carbonated.events.onInputDown.add(wronganswerlistener,this);
        cocaine.events.onInputDown.add(wronganswerlistener,this);
        death.events.onInputDown.add(wronganswerlistener,this);
        difficult.events.onInputDown.add(wronganswerlistener,this);
        drink.events.onInputDown.add(wronganswerlistener,this);
        easy.events.onInputDown.add(wronganswerlistener,this);
        effect.events.onInputDown.add(wronganswerlistener,this);
        feign.events.onInputDown.add(wronganswerlistener,this);
        fizzy.events.onInputDown.add(wronganswerlistener,this);
        food.events.onInputDown.add(wronganswerlistener,this);
        glass.events.onInputDown.add(wronganswerlistener,this);
        increased.events.onInputDown.add(wronganswerlistener,this);
        life.events.onInputDown.add(wronganswerlistener,this);
        made.events.onInputDown.add(wronganswerlistener,this);
        man.events.onInputDown.add(wronganswerlistener,this);
        misfortune.events.onInputDown.add(wronganswerlistener,this);
        moment.events.onInputDown.add(wronganswerlistener,this);
        obtain.events.onInputDown.add(wronganswerlistener,this);
        original.events.onInputDown.add(wronganswerlistener,this);
        prepare.events.onInputDown.add(wronganswerlistener,this);
        prime.events.onInputDown.add(wronganswerlistener,this);
        puzzle.events.onInputDown.add(wronganswerlistener,this);
        radiant.events.onInputDown.add(wronganswerlistener,this);
        radiation.events.onInputDown.add(wronganswerlistener,this);
        small.events.onInputDown.add(wronganswerlistener,this);
        soda.events.onInputDown.add(wronganswerlistener,this);
        survive.events.onInputDown.add(wronganswerlistener,this);
        unstable.events.onInputDown.add(wronganswerlistener,this);

    },

    update: function () {

        livesprint.setText("lives = " + lives);

        if(wrongtimer == 0){

            nyet.setText("")

        } else if (wrongtimer >= 1){

            wrongtimer = wrongtimer - 1;

        }

    },

};

function wronganswerlistener () {

    console.log("wrong answer");

    lives--;       //reduce the value of the lives by one

    if (lives >= 1){
        nyet.setText("Sorry that answer is incorrect");
        wrongtimer = 100;       //set the timer to a relatively low number to remove the text after a short period of time.

    } if (lives == 0){

        nyet.x = 10;
        nyet.setText("Sorry that answer is incorrect, and you have run out of lives");
        wrongtimer = 99999;     //set the timer to a large number to ensure the message stays up

        disableinput();

    }

}

function correctanswerlistener () {

    console.log("correct answer");
    var victory = game.add.text(25, 100, "!CONGRATULATIONS!", { font: "72px Arial", fill: '#0000FF'});
    victory = game.add.text(145, 174, "you have completed the 'simple' similarity puzzle", { font: "24px Arial", fill: '#0000FF'});

    disableinput();

}

function hintlistener() {

    switch(hints){
        case 0:
            nyet.setText("there are no more hints available");
            wrongtimer = 50;
            break;
        case 1:
            var hint2 = game.add.text(600,130,"The word contains a 'T'",{ font: "18px Arial", fill: '#FFFFFF'});
            lives--;
            hints--;

            if (lives == 0){

                nyet.setText("Sorry you have run out of lives.");
                wrongtimer = 99999;     //set the timer to a large number to ensure the message stays up

                disableinput();

            }
            break;
        case 2:
            var hint1 = game.add.text(600,100,"The word begins with 'A'",{ font: "18px Arial", fill: '#FFFFFF'});
            lives--;
            hints--;

            if (lives == 0){

                nyet.setText("Sorry you have run out of lives.");
                wrongtimer = 99999;     //set the timer to a large number to ensure the message stays up

                disableinput();

            }
            break;
    }

}

function lvl3backlistener() {
    console.log("button clicked");
    game.state.start('lvl3menu')        //start up the menu state
}

function disableinput () {

    hintbutt.inputEnabled = false;                      // disable input to force the lives rule
    abounded.inputEnabled = false;
    abrasive.inputEnabled = false;
    accident.inputEnabled = false;
    acrimonious.inputEnabled = false;
    addition.inputEnabled = false;
    adjust.inputEnabled = false;
    aerated.inputEnabled = false;
    airtight.inputEnabled = false;
    airy.inputEnabled = false;
    aluminium.inputEnabled = false;
    atomic.inputEnabled = false;
    auto.inputEnabled = false;
    axes.inputEnabled = false;
    brew.inputEnabled = false;
    carbonated.inputEnabled = false;
    cocaine.inputEnabled = false;
    death.inputEnabled = false;
    difficult.inputEnabled = false;
    drink.inputEnabled = false;
    easy.inputEnabled = false;
    effect.inputEnabled = false;
    feign.inputEnabled = false;
    fizzy.inputEnabled = false;
    food.inputEnabled = false;
    glass.inputEnabled = false;
    increased.inputEnabled = false;
    life.inputEnabled = false;
    made.inputEnabled = false;
    man.inputEnabled = false;
    misfortune.inputEnabled = false;
    moment.inputEnabled = false;
    obtain.inputEnabled = false;
    original.inputEnabled = false;
    prepare.inputEnabled = false;
    prime.inputEnabled = false;
    puzzle.inputEnabled = false;
    radiant.inputEnabled = false;
    radiation.inputEnabled = false;
    small.inputEnabled = false;
    soda.inputEnabled = false;
    survive.inputEnabled = false;
    unstable.inputEnabled = false;

}