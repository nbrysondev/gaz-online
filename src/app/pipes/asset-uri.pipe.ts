import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assetUri'
})
export class AssetUriPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return 'assets/' + args + '/' + value;
  }
}
