import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CompaniesService } from '../../servises/companies.service';
import { Company } from '../../models/companies.model';
import { SortCompaniesEnum } from '../../enums';
import { CompaniesTableHeader } from '../../interfaces';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent {
  companies: Company [] = [];
  query = 'google';
  sortedColumn = 'revenue';
  sortCompaniesEnum = SortCompaniesEnum;
  sortedParam: string = SortCompaniesEnum.SortFromZtoA;
  companiesTableHeader: CompaniesTableHeader[] = [
    {
      title: 'Name',
      sortKey: 'name'
    },
    {
      title: 'Country',
      sortKey: 'country_iso'
    },
    {
      title: 'Revenue',
      sortKey: 'revenue'
    },
    {
      title: 'Number of employees',
      sortKey: 'employees_count'
    }
  ];

  constructor(private companiesService: CompaniesService) {
    this.getCompanies();
  }

  getCompanies(): void {
    const companiesSubscription = this.companiesService.getCompaniesByQuery(this.query);

    companiesSubscription.subscribe(companies => {
      this.companies = companies;
    }, err => {
      console.error('something went wrong: ', err);
    });
  }

  submitQuery(isInvalidForm: boolean): void {
    if (isInvalidForm) {
      return;
    }

    this.getCompanies();
  }

  get sortColumn() {
    return this.sortedColumn;
  }

  get sortByParam() {
    return this.sortedParam;
  }

  sortBy(sortedColumn: CompaniesTableHeader): void {
    if (this.sortedColumn === sortedColumn.sortKey) {
      this.sortedParam =
        this.sortedParam === this.sortCompaniesEnum.SortFromZtoA
          ? this.sortCompaniesEnum.SortFromAtoZ
          : this.sortCompaniesEnum.SortFromZtoA;

      return;
    }

    this.sortedColumn = sortedColumn.sortKey;
    this.sortedParam = this.sortCompaniesEnum.SortFromAtoZ;
  }

}
