import { TransformNumberPipe } from './transform-number.pipe';

describe('SortNumbers.Pipe.TsPipe', () => {
  it('create an instance', () => {
    const pipe = new TransformNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
