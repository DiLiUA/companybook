export class Company {
  company_id: string;
  name: string;
  slug: string;
  ultimate_parent_duns: string;
  parent_duns: string;
  duns: string;
  dba_names: string[];
  org_num: string;
  all_naics_6: string[];
  industry_name: string[];
  news_alias: string[];
  employees_count: number;
  country_iso: string;
  location: string;
  revenue: number;
  is_finance_estimated: string;
  has_email: boolean;
  has_phone: boolean;
  city: string;
  score: number;
  company_phone: string;
  company_email: string;
  website: string;
  state: string;
  naics: {
    code: string,
    name: string
  };
  query_snippet: string;

  constructor(companyData: Company) {
    this.company_id = companyData.company_id;
    this.name = companyData.name;
    this.slug = companyData.slug;
    this.ultimate_parent_duns = companyData.ultimate_parent_duns;
    this.parent_duns = companyData.parent_duns;
    this.duns = companyData.duns;
    this.dba_names = companyData.dba_names;
    this.org_num = companyData.org_num;
    this.all_naics_6 = companyData.all_naics_6;
    this.industry_name = companyData.industry_name;
    this.news_alias = companyData.news_alias;
    this.employees_count = companyData.employees_count;
    this.country_iso = companyData.country_iso;
    this.location = companyData.location;
    this.revenue = companyData.revenue;
    this.is_finance_estimated = companyData.is_finance_estimated;
    this.has_email = companyData.has_email;
    this.has_phone = companyData.has_phone;
    this.city = companyData.city;
    this.score = companyData.score;
    this.company_phone = companyData.company_phone;
    this.company_email = companyData.company_email;
    this.website = companyData.website;
    this.state = companyData.state;
    this.naics = {
      code: companyData.naics.code,
      name: companyData.naics.name
    };
    this.query_snippet = companyData.query_snippet;
  }
}
