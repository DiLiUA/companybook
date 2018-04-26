import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CompaniesModule } from '../components/companies/companies.module';

fdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        CompaniesModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));
});

