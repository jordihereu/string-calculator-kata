export function Add(calculatorInput) {
  let delimiter = ','
  let normalizedString

  if (!calculatorInput) {
    return 0
  }

  if (hasOptionalDelimiter(calculatorInput)) {
    delimiter = getOptionalDelimiter(calculatorInput)
    normalizedString = calculatorInput.split('\n')[1]
  } else {
    normalizedString = calculatorInput.replace('\n', delimiter)
  }
  const numbersArray = parseToArray(normalizedString, delimiter)
  validateNumbersArray(numbersArray)
  return sumNumbers(numbersArray)
}

function parseToArray(numbersString, delimiter) {
  const array = numbersString.split(delimiter).map(item => +item)
  return array
}

function hasOptionalDelimiter(input) {
  return input.startsWith('//')
}

function getOptionalDelimiter(calculatorInput) {
  let lines = calculatorInput.split('\n')
  return lines[0].replace('//', '')
}

function sumNumbers(numbersArray) {
  return numbersArray.reduce((total, num) => num + total, 0)
}

function validateNumbersArray(numbersArray) {
  const negativeNumbers = numbersArray.filter(item => item < 0)
  if (negativeNumbers.length > 0) {
    throw Error(`negatives not allowed ${negativeNumbers.join(', ')}`)
  }
}
