import { Pipe, PipeTransform } from '@angular/core';
import { ContentService } from '../services';

@Pipe({
  name: 'content'
})
export class ContentPipe implements PipeTransform {

  constructor(private contentService: ContentService) { }

  transform(value: any, args?: any): any {
    return this.contentService.get(value);
  }

}
