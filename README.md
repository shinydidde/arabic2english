## Setting up commands for build

    "commit": "git add -A; timestamp=$(date \"+%c\") && git commit -m \"TCR @ $timestamp\";",
    "revert": "git reset --hard",
    "build": "npm test && npm run commit || npm run revert"

```javascript
/* global describe, it */
const assert = require('chai').assert

describe('Testing', () => {
  it('should work', () => {
    assert.isTrue(true)
  })
})
```

## First test
Test:

```javascript
describe('Arabic to English', () => {
  it('returns "one" for 1', () => {
    assert.equal(arabic2English.single(1), 'one')
  })
})
```

Production code:
```javascript
const single = (n) => {
  var string = n.toString()
  var units
  var tens
  var scales
  var start
  var end
  var chunks
  var chunksLen
  var chunk
  var ints
  var i
  var word
  var words
  /* Is number zero? */
  if (parseInt(string) === 0) {
    return 'zero'
  }

  /* Array of units as words */
  units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

  /* Array of tens as words */
  tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  /* Array of scales as words */
  scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion']

  /* Split user arguemnt into 3 digit chunks from right to left */
  start = string.length
  chunks = []
  while (start > 0) {
    end = start
    chunks.push(string.slice((start = Math.max(0, start - 3)), end))
  }

  /* Check if function has enough scale words to be able to stringify the user argument */
  chunksLen = chunks.length
  if (chunksLen > scales.length) {
    return ''
  }

  /* Stringify each integer in each chunk */
  words = []
  for (i = 0; i < chunksLen; i++) {
    chunk = parseInt(chunks[i])
    if (chunk) {
      /* Split chunk into array of individual integers */
      ints = chunks[i].split('').reverse().map(parseFloat)
      /* If tens integer is 1, i.e. 10, then add 10 to units integer */
      if (ints[1] === 1) {
        ints[0] += 10
      }

      /* Add scale word if chunk is not zero and array item exists */
      if ((word = scales[i])) {
        words.push(word)
      }

      /* Add unit word if array item exists */
      if ((word = units[ints[0]])) {
        words.push(word)
      }

      /* Add tens word if array item exists */
      if ((word = tens[ints[1]])) {
        words.push(word)
      }

      /* Add hundreds word if array item exists */
      if ((word = units[ints[2]])) {
        words.push(word + ' hundred')
      }
    }
  }
  return words.reverse().join(' ')
}

module.exports = {
  single
}

```

## Second test - second run
Test:

```javascript
  it('returns "two" for 2', () => {
    assert.equal(arabic2English.single(2), 'two')
  })

```

**Result**: Passed and commit.