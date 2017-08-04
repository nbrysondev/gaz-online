/**
* CompanyContent
*
* @interface CompanyContent
* @param slug           {string}
* @param name           {string}
* @param personality    {string}
*/
export interface CompanyContent {
    slug: string;
    name: string;
    personality: string;
}
/**
* Company
*
* @interface Company
* @extends CompanyContent
* @param marketStrength {number} 
* @param shipId         {number} 
* @param planetId       {number} 
* @param player         {number} 
*/
export interface Company extends CompanyContent {
    marketStrength: number;
    netWorth: number;
    shipId: number;
    planetId: number;
    player: number;
}
