import { Injectable } from '@angular/core';
import { EntityService, ContentService } from '.';
import { Ship, ShipContent } from '../models';

@Injectable()
export class ShipService extends EntityService {

  protected entities: Array<Ship>;

  constructor(protected contentService: ContentService) {
    super();
    this.addMultiple(this.contentService.getShips());
  }

  /**
  * Creates a new Ship from a ShipContent instance
  *
  * @function create
  * @param company {CompanyContent}
  * @return {Company}
  */
  protected create(ship: ShipContent): Ship {
    return Object.assign(
      {},
      ship
    );
  }
}
