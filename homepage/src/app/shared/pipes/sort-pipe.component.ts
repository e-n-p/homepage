import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'sortPipe'
})
export class SortPipe implements PipeTransform {

  transform(input:any, field:string) : any[] {
    if (!Array.isArray(input)) {
        return;
    }
    input.sort((a: any, b: any) => {
        if (a[field] < b[field]) {
            return -1;
        } else if (a[field] > b[field]) {
            return 1;
        } else {
            return 0;
        }
    });
    return input;
  }

}