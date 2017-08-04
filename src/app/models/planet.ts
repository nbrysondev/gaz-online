/**
* PlanetContent
*
* @interface PlanetContent
* @param name     {string}
* @param slug     {string}
* @param nickname {string}
* @param summary  {string}
* @param history  {Array<string>}
*/
export interface PlanetContent {
    name: string;
    slug: string;
    nickname: string;
    summary: string;
    history: Array<string>;
}
/**
* Planet
*
* @interface Planet
* @extends PlanetContent
*/
export interface Planet extends PlanetContent {
}
