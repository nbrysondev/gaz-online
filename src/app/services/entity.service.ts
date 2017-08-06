import { Injectable } from '@angular/core';
import { GameEntity } from '../models';

@Injectable()
export abstract class EntityService {

  protected abstract entities: Array<GameEntity>;

  constructor() { 
    this.entities = [];
  }

  protected abstract create(entityContent: any);

  /**
  *
  * @function hasEntities
  * @return {boolean}
  */
  public hasEntities(): boolean {
    return this.entities.length > 0;
  }

  /**
  * Gets the total number of entities stored in the service
  *
  * @function number
  * @return {number}
  */
  public count(): number {
    return this.entities.length;
  }

  /**
  * Return selected entity
  *
  * @function get
  * @return {any}
  */
  public get(slug: string): any {
    let entities = this.entities.filter(entity => slug === entity.slug);
    return entities[0];
  }

  /**
  * Returns all entites in the store
  *
  * @function getAll
  * @return {Array<any>}
  */
  public getAll(): Array<any> {
    return this.entities;
  }

  /**
  * Creates a single entity instance from a CompanyContent instance and stores it
  *
  * @function add
  * @param entityContent {GameEntity}
  */
  public add(entityContent: GameEntity): void {
    this.entities.push(this.create(entityContent));
  }

  /**
  * Creates entity instances from an array of CompanyContent and stores them
  *
  * @function addMultiple
  * @param entities {Array<GameEntity>}
  */
  public addMultiple(entities: Array<GameEntity>): void {
    entities.reduce((entities, entityContent) => {
      entities.push(this.create(entityContent));
      return entities;
    }, this.entities);
  }

  /**
  * Replaces an entity with another entity
  *
  * @function replace
  */
  public replace(oldEntity: GameEntity, newEntity: GameEntity) {
    // Add the planet the player has chosen to the selected planets array
    this.entities = this.entities.map(
      entity => entity === oldEntity ? newEntity : entity 
    );
  }

  /**
  * Empties the entity array
  *
  * @function clear
  */
  public clear() {
    this.entities = [];
  }

}
