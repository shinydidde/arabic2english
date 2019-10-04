## Running the project
1. clone the repo
2. do npm install
3. npm run test to see test cases pass
4. npm run build to run the tests and commit

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
var converter = require('number-to-words')

const single = (n) => {
  return converter.toWords(n)
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