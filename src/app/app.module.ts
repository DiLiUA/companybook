import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CompaniesModule } from './components/companies/companies.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CompaniesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
