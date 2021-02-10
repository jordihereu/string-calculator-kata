import { StringCalculator } from '../src/index.js'
describe('Write your first test:', () => {
  test('it should be useful, easy and fun!', () => {
    let sut = new StringCalculator()
    let result = sut.Add('')
    expect(result).toBe(0)
  })
})
