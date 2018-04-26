import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import { Company } from '../models/companies.model';

export class MockCompaniesService {
  mockCompanies = [];

  getCompaniesByQuery(): Observable<Company[]> {
    return of(this.mockCompanies);
  }
}
