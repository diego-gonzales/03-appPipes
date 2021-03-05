import { Pipe, PipeTransform } from '@angular/core';
import { Color, Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Hero[], typeSort: string): Hero[] {
    
    // TODAS ESTAS LINEAS DE CODIGO LAS HICE YO
    let arraySort: Hero[] = [];

    switch (typeSort) {
      case 'byname':
        arraySort = value.sort( (a, b) => (a.name > b.name) ? 1 : -1 );
        break;

      case 'byfly':
        arraySort = value.sort( (a, b) => (a.fly > b.fly) ? -1 : 1 );
        break;

      case 'bycolor':
        arraySort = value.sort( (a, b) => (a.color > b.color) ? 1 : -1 );
        break;

      default:
        arraySort = value;
        break;
    };

    return arraySort;


    // return value.sort( (a, b) => {
    //   if (a.name > b.name) {
    //     return 1;
    //   }
    //   if (a.name < b.name) {
    //     return -1;
    //   }
    //   // a must be equal to b
    //   return 0;
    // });
  }

}
