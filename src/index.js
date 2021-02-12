const Mapper = require('./Mapper')

export function Add(calculatorInput) {
  if (!calculatorInput) {
    return 0
  }

  const numbers = Mapper.mapStringToNumbers(calculatorInput)
  validateNumbers(numbers)
  return sumNumbers(filterNumbers(numbers))
}

function validateNumbers(numbers) {
  const negativeNumbers = numbers.filter(number => number < 0)
  if (negativeNumbers.length > 0) {
    throw Error(`negatives not allowed ${negativeNumbers.join(', ')}`)
  }
}

function filterNumbers(numbers) {
  return numbers.filter(number => number <= 1000)
}

function sumNumbers(numbers) {
  return numbers.reduce((total, num) => num + total, 0)
}
