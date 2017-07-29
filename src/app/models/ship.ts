/**
* Ship
*
* @interface Ship
* @param id             {number} optional
* @param slug           {string}
* @param name           {string}
* @param summary        {string}
* @param cost           {number}
* @param engine         {number}
* @param cargo          {number}
* @param passengers     {number}
* @param crew           {number}
* @param fuel           {number}
*/
export interface Ship {
    id?: number;
    slug: string;
    name: string;
    summary: string;
    cost: number;
    engine: number;
    cargo: number;
    passengers: number;
    crew: number;
    fuel: number;
}
