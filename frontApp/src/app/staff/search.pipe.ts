import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items, field: string) {
    if (!items) return [];
    return items.filter(i => i.invitation.status.includes(field));
  }

}
