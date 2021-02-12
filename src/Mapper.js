const DELIMITER = ','
const OPTIONAL_DELIMITER_INDICATOR = '//'
const NEW_LINE = '\n'

class Mapper {

  mapStringToNumbers(input) {
    const { normalizedString, delimiter } = this.hasOptionalDelimiter(input)
      ? this.parseWithOptionalDelimiter(input)
      : this.parse(input)

    return this.parseToArray(normalizedString, delimiter)
  }

  parseToArray(numbersString, delimiter) {
    return numbersString.split(delimiter).map(item => +item)
  }

  parseWithOptionalDelimiter(input) {
    const delimiter = this.getOptionalDelimiter(input)
    const normalizedString = input.split(NEW_LINE)[1]
    return {
      delimiter,
      normalizedString,
    }
  }
  getOptionalDelimiter(calculatorInput) {
    let lines = calculatorInput.split(NEW_LINE)
    return lines[0].replace(OPTIONAL_DELIMITER_INDICATOR, '')
  }
  parse(input) {
    const normalizedString = input.replace(NEW_LINE, DELIMITER)

    return {
      delimiter: DELIMITER,
      normalizedString,
    }
  }

  hasOptionalDelimiter(input) {
    return input.startsWith(OPTIONAL_DELIMITER_INDICATOR)
  }
}

module.exports = new Mapper()
