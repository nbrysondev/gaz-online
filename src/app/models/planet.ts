/**
* Planet
*
* @interface Planet
* @param name     {string}
* @param nickname {string}
* @param summary  {string}
* @param history  {Array<string>}
*/
export interface Planet {
    name: string;
    nickname: string;
    summary: string;
    history: Array<string>;
}
