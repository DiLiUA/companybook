import { Pipe, PipeTransform } from '@angular/core';

import { Company } from '../../models/companies.model';
import { SortCompaniesEnum } from '../../enums';

@Pipe({
  name: 'sortCompanies'
})
export class SortCompaniesPipe implements PipeTransform {

  transform(array: Company[], sortParam = 'name', sortBy = SortCompaniesEnum.SortFromZtoA): Company[] {
    array.sort((a: Company, b: Company) => {
      const prev = a[sortParam];
      const next = b[sortParam];

      if (sortBy === SortCompaniesEnum.SortFromZtoA) {
        return this.sortFromZtoA(prev, next);
      }

      if (sortBy === SortCompaniesEnum.SortFromAtoZ) {
        return this.sortFromAtoZ(prev, next);
      }

      return 0;
    });

    return array;
  }

  sortFromAtoZ(a: number | string, b: number | string): number {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }

  sortFromZtoA(a: number | string, b: number | string): number {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  }
}
