/**
 * Created by b00265222 on 26/10/2016.
 */


var game = new Phaser.Game(800,600,Phaser.AUTO,'html5game');


game.state.add('menu', MainMenu);
game.state.add('lvl1menu', level1menu);
game.state.add('puzzle1', Level1);
game.state.add('puzzle2', Level2);
game.state.add('puzzle3', Level3);
game.state.add('lvl3menu', level3menu);
game.state.add('credits', Credits);

game.state.start('menu');