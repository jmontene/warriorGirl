PlayState = {};

PlayState.assetFolder = "../../Assets/";

//Game Loop Functions

PlayState.init = function(){
    this.game.renderer.renderSession.roundPixels = true;
}

PlayState.preload = function(){
    //Background
    this.game.load.image('bg:forest', this.assetFolder + 'images/backgrounds/forest.png');

    //Level Data
    this.game.load.json('level:0', this.assetFolder + 'data/level00.json');

    //Platforms
    this.game.load.image('grass:ground', this.assetFolder + 'images/tiles/forest/ground.png');

    //Main Character Atlases
    let characterPath = this.assetFolder + "images/characters/ninja_girl/";
    this.game.load.atlasJSONHash('ninja:0', characterPath + 'ninja_girl-0.png', characterPath + 'ninja_girl-0.json');
    this.game.load.atlasJSONHash('ninja:1', characterPath + 'ninja_girl-1.png', characterPath + 'ninja_girl-1.json');
    this.game.load.atlasJSONHash('ninja:2', characterPath + 'ninja_girl-2.png', characterPath + 'ninja_girl-2.json');
    this.game.load.atlasJSONHash('ninja:3', characterPath + 'ninja_girl-3.png', characterPath + 'ninja_girl-3.json');
}

PlayState.create = function(){
    this.game.add.image(0,0,'bg:forest');

    this.loadLevel(this.game.cache.getJSON('level:0'));
    this.game.add.sprite(10,10,'ninja:0', 'Attack__000.png').scale.setTo(0.15,0.15);
}


//Level Loading

PlayState.loadLevel = function(data){
    //Create the needed groups
    this.platforms = this.game.add.group();

    //Spawn platforms
    data.platforms.forEach(this.spawnPlatform, this);
}

PlayState.spawnPlatform = function(platform){
    let sprite = this.platforms.create(platform.x, platform.y, platform.image);

    this.game.physics.enable(sprite);
    sprite.body.allowGravity = false;
    sprite.body.immovable = true;
}