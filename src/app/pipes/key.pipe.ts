import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'key',
  pure: false
})
export class KeyPipe implements PipeTransform {

  transform(value: any): any {

   const keys: any [] = [];


   for ( const key in value) {
     keys.push(key);
   }
   return keys;
  }

}
