/**
 * Generates map
 */

export default class Map {
  constructor( config ) {
    this.scene = config.scene; // the scene this map belongs to
    this.key = config.key; // tile map name
    this.imgKey = config.imgKey; // key of image file
    this.tileSetName = config.tileSetName; // name of tileset
    this.bgLayerName = config.bgLayerName; // background layer name in tileset
    this.blockedLayerName = config.blockedLayerName; // blocked layer name in tileset
    this.tileSize = 20; // size of tile

    // console.log( 'in Map.js', config );
    // console.log( 'in Map.js', this.scene.cache.tilemap.get( this.key ).data );

    this.createMap();
  }

  createMap() {

    // create tile map
    this.tilemap = this.scene.make.tilemap( { key: this.key } );

    // add tileset image to map
    this.tiles = this.tilemap.addTilesetImage( this.tileSetName, this.imgKey, this.tileSize, this.tileSize, 0, 0 );

    this.backgroundLayer = this.tilemap.createStaticLayer( this.bgLayerName, this.tiles, 0, 0 );
    this.blockedLayer = this.tilemap.createStaticLayer( this.blockedLayerName, this.tiles, 0, 0 );

    // player cannot pass through this layer
    this.blockedLayer.setCollisionByExclusion( -1 );
  }

}
