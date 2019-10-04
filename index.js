var converter = require('number-to-words')

const single = (n) => {
  return converter.toWords(n)
}

module.exports = {
  single
}
