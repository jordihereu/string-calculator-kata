import { Add } from '../src/index.js'

describe('String Calculator Kata Tests', () => {
  it('should return zero when the parameter is an empty string', () => {
    expect(Add('')).toBe(0);
  });

  it('should return the input number when the string is only one number', () => {
    expect(Add('2')).toBe(2);
  });

  it('should return the input number when string is one number of several digits', () => {
    const string = '100';
    
    const result = Add(string);

    expect(result).toBe(100);
  });

  it('should return sum', () => {
    const string = '1,2,3,4,5';

    const result = Add(string);
    
    expect(result).toBe(15);
  });

  it('should return sum when having new lines', () => {
    const string = '1,2,3,4\n5';

    const result = Add(string);
    
    expect(result).toBe(15);
  });

  it('should allow custom separators', () => {
    const separator = '//;\n';
    const string = separator + '1;2';

    const result = Add(string);
    
    expect(result).toBe(3);
  });

  
})