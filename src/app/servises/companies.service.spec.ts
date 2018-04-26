import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CompaniesService } from './companies.service';
import { COMPANIES } from '../mocks/companies.mock';

describe('CompaniesService', () => {
  let service: CompaniesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompaniesService],
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    });

    service = TestBed.get(CompaniesService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should return an Observable<Company[]>', () => {
    const query = 'google';

    service.getCompaniesByQuery(query);

    const req = httpMock.expectOne(service.api);
    expect(req.request.method).toEqual('GET');

    req.flush(COMPANIES);
    httpMock.verify();
  });
});

