# bitfields [![Build Status](https://travis-ci.com/chewyiscrunchy/bitfields.svg?branch=master)](https://travis-ci.com/chewyiscrunchy/bitfields) [![view on npm](http://img.shields.io/npm/v/bitfields.svg)](https://www.npmjs.org/package/bitfields)

Bitfields made easy in JavaScript.
This is not yet compatible with browsers, please do not open an issue regarding this.

## Installation

For Node.js projects, install with the NPM package manager:

```Bash
npm install --save bitfields
```

## Usage

```JavaScript

const { Bitfield } = require('bitfields')
// or
import { Bitfield } from 'bitfields'

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

This is a basic example. For detailed documentation on each of these methods, check the API documention below.

# API

## Classes

<dl>
<dt><a href="#Bitfield">Bitfield</a></dt>
<dd><p>Represents a Bitfield.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#getByteSize">getByteSize(num)</a> ⇒ <code>number</code></dt>
<dd><p>Get byte size of a number.</p>
</dd>
<dt><a href="#toBuffer">toBuffer(ab)</a> ⇒ <code>Buffer</code></dt>
<dd><p>Convert ArrayBuffer to Buffer.</p>
</dd>
</dl>

<a name="Bitfield"></a>

## Bitfield
Represents a Bitfield.

**Kind**: global class  

* [Bitfield](#Bitfield)
    * [new Bitfield(data, opts)](#new_Bitfield_new)
    * _instance_
        * [.get(i)](#Bitfield+get) ⇒ <code>boolean</code>
        * [.set(i, b)](#Bitfield+set) ⇒ <code>void</code>
        * [.toBuffer()](#Bitfield+toBuffer) ⇒ <code>Buffer</code>
        * [.toBigInt()](#Bitfield+toBigInt) ⇒ <code>BigInt</code>
        * [.toHex()](#Bitfield+toHex) ⇒ <code>string</code>
        * [.toString()](#Bitfield+toString) ⇒ <code>string</code>
    * _static_
        * [.fromBuffer(buffer, opts)](#Bitfield.fromBuffer) ⇒ [<code>Bitfield</code>](#Bitfield)
        * [.fromBigInt(bigint, opts)](#Bitfield.fromBigInt) ⇒ [<code>Bitfield</code>](#Bitfield)
        * [.fromHex(hex, opts)](#Bitfield.fromHex) ⇒ [<code>Bitfield</code>](#Bitfield)
        * [.fromString(string, opts)](#Bitfield.fromString) ⇒ [<code>Bitfield</code>](#Bitfield)

<a name="new_Bitfield_new"></a>

### new Bitfield(data, opts)
Create a Bitfield.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>BitfieldData</code> | <code>0</code> | Can be a Node.js Buffer, ArrayBuffer, typed array, numeric array, or a number representing the amount of bytes in the Bitfield |
| opts | <code>BitfieldOptions</code> |  | Other options |

<a name="Bitfield+get"></a>

### bitfield.get(i) ⇒ <code>boolean</code>
Check if a bit is set.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>boolean</code> - True if the bit is set  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>number</code> | Bit index |

<a name="Bitfield+set"></a>

### bitfield.set(i, b) ⇒ <code>void</code>
Set a bit.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| i | <code>number</code> |  | Bit index |
| b | <code>boolean</code> \| <code>number</code> | <code>true</code> | Bit value |

<a name="Bitfield+toBuffer"></a>

### bitfield.toBuffer() ⇒ <code>Buffer</code>
Convert Bitfield into a Buffer.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>Buffer</code> - Node.js Buffer  
**Access**: public  
<a name="Bitfield+toBigInt"></a>

### bitfield.toBigInt() ⇒ <code>BigInt</code>
Convert Bitfield into a BigInt.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>BigInt</code> - Node.js BigInt  
**Access**: public  
<a name="Bitfield+toHex"></a>

### bitfield.toHex() ⇒ <code>string</code>
Convert Bitfield into a hexadecimal string.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>string</code> - Hexadecimal string  
**Access**: public  
<a name="Bitfield+toString"></a>

### bitfield.toString() ⇒ <code>string</code>
Convert Bitfield into a UTF-8 encoded string.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>string</code> - UTF-8 encoded string  
**Access**: public  
<a name="Bitfield.fromBuffer"></a>

### Bitfield.fromBuffer(buffer, opts) ⇒ [<code>Bitfield</code>](#Bitfield)
Create a Bitfield from a Buffer or ArrayBuffer.

**Kind**: static method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: [<code>Bitfield</code>](#Bitfield) - Bitfield  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>Buffer</code> \| <code>ArrayBuffer</code> | Buffer |
| opts | <code>BitfieldOptions</code> | Bitfield options |

<a name="Bitfield.fromBigInt"></a>

### Bitfield.fromBigInt(bigint, opts) ⇒ [<code>Bitfield</code>](#Bitfield)
Create a Bitfield from a BigInt.

**Kind**: static method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: [<code>Bitfield</code>](#Bitfield) - Bitfield  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| bigint | <code>bigint</code> | BigInt |
| opts | <code>BitfieldOptions</code> | Bitfield options |

<a name="Bitfield.fromHex"></a>

### Bitfield.fromHex(hex, opts) ⇒ [<code>Bitfield</code>](#Bitfield)
Create a Bitfield from a hexadecimal string.

**Kind**: static method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: [<code>Bitfield</code>](#Bitfield) - Bitfield  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | Hexadecimal string |
| opts | <code>BitfieldOptions</code> | Bitfield options |

<a name="Bitfield.fromString"></a>

### Bitfield.fromString(string, opts) ⇒ [<code>Bitfield</code>](#Bitfield)
Create a Bitfield from a UTF-8 encoded string.

**Kind**: static method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: [<code>Bitfield</code>](#Bitfield) - Bitfield  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | UTF-8 encoded string. |
| opts | <code>BitfieldOptions</code> | Bitfield options |

<a name="getByteSize"></a>

## getByteSize(num) ⇒ <code>number</code>
Get byte size of a number.

**Kind**: global function  
**Returns**: <code>number</code> - Byte size  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | Number |

<a name="toBuffer"></a>

## toBuffer(ab) ⇒ <code>Buffer</code>
Convert ArrayBuffer to Buffer.

**Kind**: global function  
**Returns**: <code>Buffer</code> - Converted Buffer  

| Param | Type | Description |
| --- | --- | --- |
| ab | <code>ArrayBuffer</code> | ArrayBuffer |

