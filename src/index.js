export function Add(calculatorInput) {
  let delimiter = ',';
  let normalizedString;

  if (!calculatorInput) {
    return 0
  }

  if (hasOptionalDelimiter(calculatorInput)) {
    delimiter = getOptionalDelimiter(calculatorInput);
    normalizedString = calculatorInput.split('\n')[1];
  } else {
    normalizedString = calculatorInput.replace('\n', delimiter)
  }
  return sumNumbers(normalizedString, delimiter);
}

function hasOptionalDelimiter(input) {
  return input.startsWith('//')
}

function getOptionalDelimiter(calculatorInput) {
  let lines = calculatorInput.split('\n')
  return lines[0].replace('//', '')
}

function sumNumbers(numbersString, delimiter) {
  const array = numbersString.split(delimiter)
  return array.reduce((total, num) => +num + total, 0)
}