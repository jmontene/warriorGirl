function Ninja(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'ninja');
    this.anchor.set(0.5,0.5);
    this.game.physics.enable(this);
    this.body.collideWorldBounds = true;
}