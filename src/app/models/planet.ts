import {CommodityInstance, GameEntity} from '.';
/**
* PlanetContent
*
* @interface PlanetContent
* @extends GameEntity
* @param name     {string}
* @param nickname {string}
* @param summary  {string}
* @param required {boolean} forces planet to be in every game
* @param history  {Array<string>}
*/
export interface PlanetContent extends GameEntity  {
    name: string;
    nickname: string;
    summary: string;
    required: boolean;
    history: Array<string>;
}
/**
* Planet
*
* @interface Planet
* @extends PlanetContent
* @param commodities {Array<CommodityInstance>}
* @param position {Position}
*/
export interface Planet extends PlanetContent {
    commodities: Array<CommodityInstance>;
    position: Position;
}
/**
* Position
*
* @interface Position
* @param x {number}
* @param y {number}
*/
export interface Position {
    x: number;
    y: number;
}
