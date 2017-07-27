/**
* Company
*
* @interface Company
* @param id             {number} optional
* @param slug           {string}
* @param name           {string}
* @param personality    {string}
* @param netWorth       {number} optional
* @param marketStrength {number} optional
* @param shipId         {number} optional
*/
export interface Company {
    id?: number;
    slug: string;
    name: string;
    personality: string;
    marketStrength?: number;
    netWorth?: number;
    shipId?: number;
}
