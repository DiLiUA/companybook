import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CompaniesComponent } from './companies.component';
import { CompaniesService } from '../../servises/companies.service';
import { SortCompaniesPipe, TransformNumberPipe } from '../../pipes';

@NgModule({
  declarations: [
    CompaniesComponent,
    SortCompaniesPipe,
    TransformNumberPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [CompaniesService],
  exports: [CompaniesComponent]
})
export class CompaniesModule { }
