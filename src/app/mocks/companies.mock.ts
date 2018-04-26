import { Company } from '../models/companies.model';

const Company1: Company = {
  company_id: 'id_1',
  name: 'Pablo',
  slug: '',
  ultimate_parent_duns: '',
  parent_duns: '',
  duns: '',
  dba_names: [],
  org_num: '',
  all_naics_6: [],
  industry_name: [],
  news_alias: [''],
  employees_count: 100500,
  country_iso: 'UK',
  location: '',
  revenue: 555558888,
  is_finance_estimated: '',
  has_email: true,
  has_phone: true,
  city: '',
  score: 888,
  company_phone: '',
  company_email: '',
  website: '',
  state: '',
  naics: {
    code: '',
    name: ''
  },
  query_snippet: ''
};

const Company2: Company = {
  company_id: 'id_2',
  name: 'Antonio',
  slug: '',
  ultimate_parent_duns: '',
  parent_duns: '',
  duns: '',
  dba_names: [],
  org_num: '',
  all_naics_6: [],
  industry_name: [''],
  news_alias: [''],
  employees_count: 888,
  country_iso: 'US',
  location: '',
  revenue: 555558888,
  is_finance_estimated: '',
  has_email: true,
  has_phone: true,
  city: '',
  score: 888,
  company_phone: '',
  company_email: '',
  website: '',
  state: '',
  naics: {
    code: '',
    name: ''
  },
  query_snippet: ''
};

const Company3: Company = {
  company_id: 'id_3',
  name: 'Bob',
  slug: '',
  ultimate_parent_duns: '',
  parent_duns: '',
  duns: '',
  dba_names: [],
  org_num: '',
  all_naics_6: [],
  industry_name: [''],
  news_alias: [''],
  employees_count: 995,
  country_iso: 'UA',
  location: '',
  revenue: 555558888,
  is_finance_estimated: '',
  has_email: true,
  has_phone: true,
  city: '',
  score: 75,
  company_phone: '',
  company_email: '',
  website: '',
  state: '',
  naics: {
    code: '',
    name: ''
  },
  query_snippet: ''
};


export const COMPANIES = [new Company(Company1), new Company(Company2), new Company(Company3)];
