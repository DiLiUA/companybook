import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import {Company} from '../models/companies.model';
import {CompanyResponse} from '../interfaces';

@Injectable()
export class CompaniesService {
  api = 'https://api.companybooknetworking.com/search-service/4.0/search';

  constructor(private http: HttpClient) { }

  getCompaniesByQuery(query: string): Observable<Company[]> {
    return this.http.get(`${this.api}?q=${query}`)
      .pipe(
        map((res: CompanyResponse) => {
          if (!res.result.docs) {
            return [];
          }

          return res.result.docs
            .map(company => new Company(company));

        }),
        catchError(err => {
        console.error('something went wrong: ', err);

        return Observable.throw(err.error);
      }));
  }
}
