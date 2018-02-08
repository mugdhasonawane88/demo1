import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'covertToSpaces'
})
export class CovertToSpacesPipe implements PipeTransform {

  transform(value: string, anycharacter: string): string {
    return value.replace(anycharacter, ' ');
  }

}
