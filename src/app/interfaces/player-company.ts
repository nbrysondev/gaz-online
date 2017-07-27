import {Company} from './company';
/**
* Company
*
* @interface PlayerCompany
* @extends Company
* @param status {string}
* @param bankruptCompanies {string}
*/
export interface PlayerCompany extends Company {
    bankruptCompanies: string;
}
