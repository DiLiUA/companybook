import { Company } from '../models/companies.model';

export interface CompanyResponse {
  result: {
    docs?: Company[];
    [key: string]: any;
  };
  [key: string]: any;
}
