import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { CompaniesComponent } from './companies.component';
import { SortCompaniesPipe, TransformNumberPipe } from '../../pipes';
import { CompaniesService } from '../../servises/companies.service';
import { CompaniesTableHeader } from '../../interfaces';
import { SortCompaniesEnum } from '../../enums';

const COMPANIES = [1, 2, 3];

class MockCompaniesService {
  mockCompanies = [];

  getCompaniesByQuery(): Observable<any> {
    return of(this.mockCompanies);
  }
}

fdescribe('CompaniesComponent', () => {
  let component: CompaniesComponent;
  let fixture: ComponentFixture<CompaniesComponent>;
  let service: MockCompaniesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CompaniesComponent,
        SortCompaniesPipe,
        TransformNumberPipe
      ],
      imports: [
        CommonModule,
        FormsModule
      ],
      providers: [
        {provide: CompaniesService, useClass: MockCompaniesService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesComponent);
    component = fixture.componentInstance;
    service = TestBed.get(CompaniesService);
    service.mockCompanies = COMPANIES;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get companies list', () => {
    const companies$ = service.getCompaniesByQuery();

    companies$.subscribe(res => {
      expect(res).toEqual(COMPANIES);
    });
  });

  it('should get companies list after submit query', () => {
    const isInvalidForm = false;
    spyOn(component, 'getCompanies');

    component.submitQuery(isInvalidForm);

    expect(component.getCompanies).toHaveBeenCalled();
  });

  it('should not submit query', () => {
    const isInvalidForm = true;
    spyOn(component, 'getCompanies');

    component.submitQuery(isInvalidForm);

    expect(component.getCompanies).not.toHaveBeenCalled();
  });

  it('should get sortedColumn', () => {
    const expectedValue = 'test_value';
    component.sortedColumn = expectedValue;

    expect(component.sortColumn).toEqual(expectedValue);
  });

  it('should get sortByParam', () => {
    const expectedValue = 'test_value';
    component.sortedParam = expectedValue;

    expect(component.sortByParam).toEqual(expectedValue);
  });

  it('should sort current column from A to Z', () => {
    const sortCompaniesEnum = SortCompaniesEnum;
    const companyData: CompaniesTableHeader = {
      title: 'Test title',
      sortKey: 'name'
    };

    component.sortedColumn = 'name';
    component.sortedParam = sortCompaniesEnum.SortFromZtoA;

    component.sortBy(companyData);

    expect(component.sortedParam).toEqual(sortCompaniesEnum.SortFromAtoZ);
  });

  it('should sort current column from Z to A', () => {
    const sortCompaniesEnum = SortCompaniesEnum;
    const companyData: CompaniesTableHeader = {
      title: 'Test title',
      sortKey: 'name'
    };

    component.sortedColumn = 'name';
    component.sortedParam = sortCompaniesEnum.SortFromAtoZ;

    component.sortBy(companyData);

    expect(component.sortedParam).toEqual(sortCompaniesEnum.SortFromZtoA);
  });

  it('should sort change sortedColumn and sort from A to Z', () => {
    const sortCompaniesEnum = SortCompaniesEnum;
    const companyData: CompaniesTableHeader = {
      title: 'Test title',
      sortKey: 'name'
    };

    component.sortedColumn = 'revenue';
    component.sortedParam = sortCompaniesEnum.SortFromZtoA;

    component.sortBy(companyData);

    expect(component.sortedColumn).toEqual(companyData.sortKey);
    expect(component.sortedParam).toEqual(sortCompaniesEnum.SortFromAtoZ);
  });
});
