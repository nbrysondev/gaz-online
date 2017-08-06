import {CommodityInstance, GameEntity} from '.';
/**
* PlanetContent
*
* @interface PlanetContent
* @extends GameEntity
* @param name     {string}
* @param nickname {string}
* @param summary  {string}
* @param history  {Array<string>}
*/
export interface PlanetContent extends GameEntity  {
    name: string;
    nickname: string;
    summary: string;
    history: Array<string>;
}
/**
* Planet
*
* @interface Planet
* @extends PlanetContent
* @param commodities {Array<CommodityInstance>}
*/
export interface Planet extends PlanetContent {
    commodities: Array<CommodityInstance>;
}
