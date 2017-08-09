/**
* GameSettings
*
* @interface GameSettings
* @param numOfPlayers    {number}
* @param difficulty      {string}
* @param newGameSetup    {boolean}
*/
export interface GameSettings {
    numOfPlayers: number;
    difficulty: string;
    newGameSetup: boolean;
}
