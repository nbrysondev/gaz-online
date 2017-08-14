import {Ship, Planet, Commodity, GameEntity} from '.';
/**
* CompanyContent
*
* @interface CompanyContent
* @param name           {string}
* @param personality    {string}
*/
export interface CompanyContent extends GameEntity {
    name: string;
    personality: string;
}
/**
* Company
*
* @interface Company
* @extends CompanyContent
* @param marketStrength {number}
* @param netWorth       {number}
* @param ship           {Ship}
* @param planet         {Planet}
* @param commodities    {Array<Commodity>}
* @param player         {number}
*/
export interface Company extends CompanyContent {
    marketStrength: number;
    netWorth: number;
    ship: Ship;
    planet: Planet;
    commodities: Array<Commodity>;
    player: number;
}
