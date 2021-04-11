# bitfields [![Node CI](https://github.com/octavetoast/bitfields/actions/workflows/node.yml/badge.svg)](https://github.com/octavetoast/bitfields/actions/workflows/node.yml) [![Coverage Status](https://coveralls.io/repos/github/octavetoast/bitfields/badge.svg?branch=main)](https://coveralls.io/github/octavetoast/bitfields?branch=main)

Easy-to-use bitfields for Node.js and browsers.

## Installation

For Node.js or webpack projects, install with the NPM package manager:

```Bash
npm install --save bitfields
```

For use in the browser without a bundler, include this script tag in your HTML.

```HTML
<script src="https://unpkg.com/bitfields@1.0.3/dist/bitfields.js"></script>
```

## Usage

```JavaScript

// commonjs module
const { Bitfield } = require('bitfields')

// esmodules
import { Bitfield } from 'bitfields'

// in the browser
const { Bitfield } = window.Bitfields

const bitfield = new Bitfield(64) // create a Bitfield with 64 bits

bitfield.set(1) // set the first bit
bitfield.set(1, 1) // same as above
bitfield.set(1, true) // same as above

bitfield.set(3) // set the third bit

console.log(bitfield.get(1)) // 'true'
console.log(bitfield.get(2)) // 'false'
console.log(bitfield.get(3)) // 'true'

bitfield.set(3, false) // unset the third bit
bitfield.set(3, 0) // same as above

console.log(bitfield.get(3)) // 'false'

const buffer = bitfield.toBuffer() // convert to Buffer
const bigint = bitfield.toBigInt() // convert to BigInt
const hex = bitfield.toHex() // convert to hexadecimal string
const string = bitfield.toString() // convert to UTF-8 encoded string

console.log(buffer) // '<Buffer 40 00 00 00 00 00 00 00>'
console.log(bigint) // '4611686018427387904n'
console.log(hex) // '4000000000000000'
console.log(string) // '@'

const bitfieldFromBuffer = Bitfield.fromBuffer(buffer) // create a Bitfield from a Buffer
const bitfieldFromBigInt = Bitfield.fromBigInt(bigint) // create a Bitfield from a BigInt
const bitfieldFromHex = Bitfield.fromHex(hex) // create a Bitfield from a hexadecimal string
const bitfieldFromString = Bitfield.fromString(string) // create a Bitfield from a string

```

## [API Documentation](https://octavetoast.github.io/bitfields)
