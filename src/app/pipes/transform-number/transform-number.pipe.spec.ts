import { TransformNumberPipe } from './transform-number.pipe';

describe('SortNumbers.Pipe.TsPipe', () => {
  const pipe = new TransformNumberPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should handle an integer as a parameter', () => {
    const firstVal = 1;
    const secondVal = 456;
    const currencie = '$';

    expect(pipe.transform(firstVal, currencie)).toEqual(`${currencie}${firstVal}`);
    expect(pipe.transform(secondVal, currencie)).toEqual(`${currencie}${secondVal}`);
  });

  it('should handle a float as a parameter', () => {
    const firstVal = 10.04;
    const secondVal = 2.57;
    const currencie = '$';

    expect(pipe.transform(firstVal, currencie)).toEqual(`${currencie}${Math.round(firstVal)}`);
    expect(pipe.transform(secondVal, currencie)).toEqual(`${currencie}${Math.round(secondVal)}`);
  });

  it('should handle a parsable string as a parameter', () => {
    const firstVal = `10.9`;
    const secondVal = `2`;
    const currencie = '$';

    expect(pipe.transform(firstVal, currencie)).toEqual(`${currencie}${Math.round(+firstVal)}`);
    expect(pipe.transform(secondVal, currencie)).toEqual(`${currencie}${Math.round(+secondVal)}`);
  });

  it('should default the minimum parameter to `1000`', () => {
    const firstVal = 999;
    const secondVal = 1001;
    const expectedVal = '$1k';
    const currencie = '$';

    expect(pipe.transform(firstVal, currencie)).toEqual(`${currencie}${firstVal}`);
    expect(pipe.transform(secondVal, currencie)).toEqual(`${expectedVal}`);
  });

  it('should add `k` suffix', () => {
    const firstVal = 1358;
    const secondVal = 55501;
    const thirdVal = 993211;
    const currencie = '$';
    const expectedFirstVal = `${currencie}${1}k`;
    const expectedSecondVal = `${currencie}${56}k`;
    const expectedThirdVal = `${currencie}${993}k`;

    expect(pipe.transform(firstVal, currencie)).toEqual(expectedFirstVal);
    expect(pipe.transform(secondVal, currencie)).toEqual(expectedSecondVal);
    expect(pipe.transform(thirdVal, currencie)).toEqual(expectedThirdVal);
  });

  it('should add `M` suffix', () => {
    const firstVal = 1234567;
    const secondVal = 12345678;
    const thirdVal = 123456789;
    const currencie = '$';
    const expectedFirstVal = `${currencie}${1}M`;
    const expectedSecondVal = `${currencie}${12}M`;
    const expectedThirdVal = `${currencie}${123}M`;

    expect(pipe.transform(firstVal, currencie)).toEqual(expectedFirstVal);
    expect(pipe.transform(secondVal, currencie)).toEqual(expectedSecondVal);
    expect(pipe.transform(thirdVal, currencie)).toEqual(expectedThirdVal);
  });

  it('should add `B` suffix', () => {
    const firstVal = 1234567890;
    const secondVal = 12345678901;
    const thirdVal = 123456789012;
    const currencie = '$';
    const expectedFirstVal = `${currencie}${1}B`;
    const expectedSecondVal = `${currencie}${12}B`;
    const expectedThirdVal = `${currencie}${123}B`;

    expect(pipe.transform(firstVal, currencie)).toEqual(expectedFirstVal);
    expect(pipe.transform(secondVal, currencie)).toEqual(expectedSecondVal);
    expect(pipe.transform(thirdVal, currencie)).toEqual(expectedThirdVal);
  });

  it('should add `T` suffix', () => {
    const firstVal = 1234567890123;
    const secondVal = 12345678901234;
    const thirdVal = 123456789012345;
    const currencie = '$';
    const expectedFirstVal = `${currencie}${1}T`;
    const expectedSecondVal = `${currencie}${12}T`;
    const expectedThirdVal = `${currencie}${123}T`;

    expect(pipe.transform(firstVal, currencie)).toEqual(expectedFirstVal);
    expect(pipe.transform(secondVal, currencie)).toEqual(expectedSecondVal);
    expect(pipe.transform(thirdVal, currencie)).toEqual(expectedThirdVal);
  });
});
