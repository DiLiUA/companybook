import { SortCompaniesPipe } from './sort-companies.pipe';
import {SortCompaniesEnum} from '../../enums';
import { COMPANIES } from '../../mocks/companies.mock';

describe('SortNumbers.Pipe.TsPipe', () => {
  const pipe = new SortCompaniesPipe();
  const array = COMPANIES;
  const sortCompaniesEnum = SortCompaniesEnum;

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort by `string` `A-Z`', () => {
    expect(pipe.transform([...array], 'name', sortCompaniesEnum.SortFromAtoZ)[0]).toEqual(array[1]);
    expect(pipe.transform([...array], 'name', sortCompaniesEnum.SortFromAtoZ)[1]).toEqual(array[2]);
    expect(pipe.transform([...array], 'name', sortCompaniesEnum.SortFromAtoZ)[2]).toEqual(array[0]);
  });

  it('should sort by `string` `Z-A`', () => {
    expect(pipe.transform([...array], 'name', sortCompaniesEnum.SortFromZtoA)[0]).toEqual(array[0]);
    expect(pipe.transform([...array], 'name', sortCompaniesEnum.SortFromZtoA)[1]).toEqual(array[2]);
    expect(pipe.transform([...array], 'name', sortCompaniesEnum.SortFromZtoA)[2]).toEqual(array[1]);
  });

  it('should sort by `number` `A-Z`', () => {
    expect(pipe.transform([...array], 'employees_count', sortCompaniesEnum.SortFromAtoZ)[0]).toEqual(array[1]);
    expect(pipe.transform([...array], 'employees_count', sortCompaniesEnum.SortFromAtoZ)[1]).toEqual(array[2]);
    expect(pipe.transform([...array], 'employees_count', sortCompaniesEnum.SortFromAtoZ)[2]).toEqual(array[0]);
  });

  it('should sort by `number` `Z-A`', () => {
    expect(pipe.transform([...array], 'employees_count', sortCompaniesEnum.SortFromZtoA)[0]).toEqual(array[0]);
    expect(pipe.transform([...array], 'employees_count', sortCompaniesEnum.SortFromZtoA)[1]).toEqual(array[2]);
    expect(pipe.transform([...array], 'employees_count', sortCompaniesEnum.SortFromZtoA)[2]).toEqual(array[1]);
  });
});
