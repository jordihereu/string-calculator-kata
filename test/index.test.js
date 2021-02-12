import { Add } from '../src'

describe('String Calculator Kata Tests', () => {
  it('should return zero when the parameter is an empty string', () => {
    expect(Add('')).toBe(0)
  })

  it('should return the input number when the string is only one number', () => {
    expect(Add('2')).toBe(2)
  })

  it('should return the input number when string is one number of several digits', () => {
    const string = '100'

    const result = Add(string)

    expect(result).toBe(100)
  })

  it('should return sum', () => {
    const string = '1,2,3,4,5'

    const result = Add(string)

    expect(result).toBe(15)
  })

  it('should return sum when having new lines', () => {
    const string = '1,2,3,4\n5'

    const result = Add(string)

    expect(result).toBe(15)
  })

  it('should allow custom separators', () => {
    const separator = '//;\n'
    const string = separator + '1;2'

    const result = Add(string)

    expect(result).toBe(3)
  })

  it('should throw an exception when input has a negative number, and show that number in the message', () => {
    const string = '-1,2,3,4,5'

    expect(() => Add(string)).toThrow('negatives not allowed -1')
  })

  it('should throw an exception when input has multiple negative numbers, and show the numbers in the message', () => {
    const string = '-1,2,-3,4,-5'

    expect(() => Add(string)).toThrow('negatives not allowed -1, -3, -5')
  })

  it('should return sum of all numbers but the ones greater than 1000 ', () => {
    const string = '1,2,1001,4,5'
    const result = Add(string)
    expect(result).toBe(12)
    })
})
