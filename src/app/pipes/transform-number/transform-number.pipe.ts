import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformNumber'
})
export class TransformNumberPipe implements PipeTransform {

  transform(num: number, beforeVal = '$'): string {
      const number = +parseFloat(num + '');
      const powerOfTen = Math.floor(Math.log(Math.abs(number)) * Math.LOG10E);

      if (powerOfTen >= 3 && powerOfTen < 6) {
        return `${beforeVal}${Math.round(number / Math.pow(10, 3))}k`;
      } else if (powerOfTen >= 6 && powerOfTen < 9) {
        return `${beforeVal}${Math.round(number / Math.pow(10, 6))}M`;
      } else if (powerOfTen >= 9 && powerOfTen < 12) {
        return `${beforeVal}${Math.round(number / Math.pow(10, 9))}B`;
      } else if (powerOfTen >= 12 && powerOfTen < 15) {
        return `${beforeVal}${Math.round(number / Math.pow(10, 12))}T`;
      }

      return`${beforeVal}${number}`;
  }

}
