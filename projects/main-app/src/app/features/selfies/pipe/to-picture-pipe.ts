import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toPicture',
  pure: true
})
export class ToPicturePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toUpperCase() + '!';
  }

}
