import { Injectable } from '@angular/core';
import { GameContent } from '../../assets/data';

@Injectable()
export class ContentService {

  constructor() { }

  /*
  * Retrives a property from the GameContent object
  * e.g. mainMenu.title
  */
  public get(property: string) {
    let properties = property.split('.'),
        content = GameContent;
    for (let i=0; i < properties.length; i++) {
      switch(typeof content[properties[i]]) {
        case "number":
        case "string":
          return this.parsePlaceholders(content[properties[i]]);
        case "undefined":
          return "";
      }
      content = content[properties[i]];
    }

    return "";
  }

  /*
  * Searches for placeholders within a content string and replaces them with the appropriate value
  */
  private parsePlaceholders(content: string) {
    
    let placeholders = content.match(/{([^}]*)}/g);

    if (placeholders) {
      for (let i=0; i < placeholders.length; i++) {
        let property = placeholders[i].replace(/[{}]/gi, '');
        console.log(property);
        let phContent = this.get(property);
        if (phContent) {
          content = content.replace(placeholders[i], phContent);
        }
      }
    }

    return content;
  }

}
