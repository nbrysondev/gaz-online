/**
* Commodity
*
* @interface Commodity
* @param name   {string}
* @param minPrice  {number}
* @param maxPrice {number}
*/
export interface Commodity {
    name: string;
    minPrice: number;
    maxPrice: number;
}
/**
* CommodityInstance
*
* @interface CommodityInstance
* @param type     {Commodity}
* @param price    {number}
* @param quantity {quantity}
*/
export interface CommodityInstance {
    commodity: Commodity;
    price: number;
    quantity: number;
}

