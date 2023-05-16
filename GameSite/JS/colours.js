/**
 * Created by B00265222/MWilliams on 30/10/2016.
 */


function ooListener() {

    console.log("oo clicked");

    switch(board[0][0]){
        case 4:
            board[0][0] = 5;
            oo.loadTexture('green');
            console.log("set five");
            break;
        case 5:
            board[0][0] = 6;
            oo.loadTexture('yellow');
            console.log("set six");
            break;
        case 6:
            board[0][0] = 4;
            oo.loadTexture('blue');
            console.log("set four");
            break;
    }

    checkvalues();

}

function otListener() {

    console.log("ot clicked");

    switch(board[0][1]){
        case 4:
            board[0][1] = 5;
            ot.loadTexture('green');
            console.log("set five");
            break;
        case 5:
            board[0][1] = 6;
            ot.loadTexture('yellow');
            console.log("set six");
            break;
        case 6:
            board[0][1] = 4;
            ot.loadTexture('blue');
            console.log("set four");
            break;
    }

    checkvalues();
}

function othListener() {

    console.log("oth clicked");

    switch(board[0][2]){
        case 4:
            board[0][2] = 5;
            oth.loadTexture('green');
            console.log("set five");
            break;
        case 5:
            board[0][2] = 6;
            oth.loadTexture('yellow');
            console.log("set six");
            break;
        case 6:
            board[0][2] = 4;
            oth.loadTexture('blue');
            console.log("set four");
            break;
    }

    checkvalues();
}

function toListener() {

    console.log("to clicked");

    switch(board[1][0]){
        case 4:
            board[1][0] = 5;
            to.loadTexture('green');
            console.log("set five");
            break;
        case 5:
            board[1][0] = 6;
            to.loadTexture('yellow');
            console.log("set six");
            break;
        case 6:
            board[1][0] = 4;
            to.loadTexture('blue');
            console.log("set four");
            break;
    }

    checkvalues();
}

function ttListener() {

    console.log("tt clicked");

    switch(board[1][1]){
        case 4:
            board[1][1] = 5;
            tt.loadTexture('green');
            console.log("set five");
            break;
        case 5:
            board[1][1] = 6;
            tt.loadTexture('yellow');
            console.log("set six");
            break;
        case 6:
            board[1][1] = 4;
            tt.loadTexture('blue');
            console.log("set four");
            break;
    }

    checkvalues();
}

function tthListener() {

    console.log("tth clicked");

    switch(board[1][2]){
        case 4:
            board[1][2] = 5;
            tth.loadTexture('green');
            console.log("set five");
            break;
        case 5:
            board[1][2] = 6;
            tth.loadTexture('yellow');
            console.log("set six");
            break;
        case 6:
            board[1][2] = 4;
            tth.loadTexture('blue');
            console.log("set four");
            break;
    }

    checkvalues();
}

function thoListener() {

    console.log("tho clicked");

    switch(board[2][0]){
        case 4:
            board[2][0] = 5;
            tho.loadTexture('green');
            console.log("set five");
            break;
        case 5:
            board[2][0] = 6;
            tho.loadTexture('yellow');
            console.log("set six");
            break;
        case 6:
            board[2][0] = 4;
            tho.loadTexture('blue');
            console.log("set four");
            break;
    }

    checkvalues();
}

function thtListener() {

    console.log("tht clicked");

    switch(board[2][1]){
        case 4:
            board[2][1] = 5;
            tht.loadTexture('green');
            console.log("set five");
            break;
        case 5:
            board[2][1] = 6;
            tht.loadTexture('yellow');
            console.log("set six");
            break;
        case 6:
            board[2][1] = 4;
            tht.loadTexture('blue');
            console.log("set four");
            break;
    }

    checkvalues();
}

function ththListener() {

    console.log("thth clicked");

    switch(board[2][2]){
        case 4:
            board[2][2] = 5;
            thth.loadTexture('green');
            console.log("set five");
            break;
        case 5:
            board[2][2] = 6;
            thth.loadTexture('yellow');
            console.log("set six");
            break;
        case 6:
            board[2][2] = 4;
            thth.loadTexture('blue');
            console.log("set four");
            break;
    }

    checkvalues();
}

function checkvalues() {

    /*c1text.setText(sumup(board[0][0],board[0][1],board[0][2]));           //Used for testing the sumup code and checking variable counting properly.
    c2text.setText(sumup(board[1][0],board[1][1],board[1][2]));
    c3text.setText(sumup(board[2][0],board[2][1],board[2][2]));
    r1text.setText(sumup(board[0][0],board[1][0],board[2][0]));
    r2text.setText(sumup(board[0][1],board[1][1],board[2][1]));
    r3text.setText(sumup(board[0][2],board[1][2],board[2][2]));
    d1text.setText(sumup(board[2][0],board[1][1],board[0][2]));
    d2text.setText(sumup(board[0][0],board[1][1],board[2][2]));*/

    c1 = sumup(board[0][0],board[0][1],board[0][2]);
    c2 = sumup(board[1][0],board[1][1],board[1][2]);
    c3 = sumup(board[2][0],board[2][1],board[2][2]);
    r1 = sumup(board[0][0],board[1][0],board[2][0]);
    r2 = sumup(board[0][1],board[1][1],board[2][1]);
    r3 = sumup(board[0][2],board[1][2],board[2][2]);
    d1 = sumup(board[2][0],board[1][1],board[0][2]);
    d2 = sumup(board[0][0],board[1][1],board[2][2]);

    c1clear = viccheck(board[0][0],board[0][1],board[0][2]);
    c2clear = viccheck(board[1][0],board[1][1],board[1][2]);
    c3clear = viccheck(board[2][0],board[2][1],board[2][2]);
    r1clear = viccheck(board[0][0],board[1][0],board[2][0]);
    r2clear = viccheck(board[0][1],board[1][1],board[2][1]);
    r3clear = viccheck(board[0][2],board[1][2],board[2][2]);
    d1clear = dcheck(board[2][0],board[1][1],board[0][2]);
    d2clear = dcheck(board[0][0],board[1][1],board[2][2]);

    if (c1clear == true && c2clear == true && c3clear == true && r1clear == true && r2clear == true && r3clear == true && d1clear == true && d2clear == true){
        vic = true;
    }

    if(vic == true){
        var victory = game.add.text(50, 300, "CONGRATULATIONS", { font: "72px Arial", fill: '#ffffff'});
        victory = game.add.text(150, 374, "you have completed the Magic Square puzzle", { font: "24px Arial", fill: '#ffffff'});

        oo.inputEnabled = false;                                             //activate button input capability
        ot.inputEnabled = false;
        oth.inputEnabled = false;
        to.inputEnabled = false;
        tt.inputEnabled = false;
        tth.inputEnabled = false;
        tho.inputEnabled = false;
        tht.inputEnabled = false;
        thth.inputEnabled = false;
    }

}

function dcheck (one, two , three) {

    var pass = false;

    if((one >= 3 || two >= 3 || three >= 3) && (d1 == 15 && d2 == 15)) {
        pass = true;
    } else {
        pass = false;
    }

    return pass;

}

function viccheck(one, two, three) {

    var pass = false;

    if((one == two || two == three || three == one) && (one >= 3 || two >= 3 || three >= 3)){
        pass = false
    } else {
        pass = true
    }


    return pass;
}

function sumup(one,two,three){
    var sum = one + two + three;
    return sum
}