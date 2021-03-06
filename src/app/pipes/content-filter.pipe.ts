import { Pipe, PipeTransform } from '@angular/core';
import { ContentService } from '../services';

@Pipe({
  name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {

  constructor(private contentService: ContentService) { }

  transform(value: any, args?: any): any {
    return this.contentService.parsePlaceholders(value);
  }

}
