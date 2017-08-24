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
  public get(index: number): any {
    if (this.entities.hasOwnProperty(index)) {
      return this.entities[index];
    } else {
      return null;
    }
  }

  /**
  * Return selected entity
  *
  * @function getBySlug
  * @return {any}
  */
  public getBySlug(slug: string): any {
    const entities = this.entities.filter(entity => slug === entity.slug);
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
    entities.reduce((ents, entityContent) => {
      ents.push(this.create(entityContent));
      return ents;
    }, this.entities);
  }

  /**
  * Loads existing entities into the entity store
  *
  * @function loadMultiple
  * @param entities {Array<GameEntity>}
  */
  public loadMultiple(entities: Array<GameEntity>): void {
    entities.reduce((ents, entity) => {
      ents.push(entity);
      return ents;
    }, this.entities);
  }


  /**
  * Replaces an entity with another entity
  *
  * @function replace
  */
  public replace(oldEntity: GameEntity, newEntity: GameEntity) {
    this.entities = this.entities.map(
      entity => entity === oldEntity ? this.create(newEntity) : entity 
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
