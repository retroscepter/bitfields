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
        * [.toBigInt()](#Bitfield+toBigInt) ⇒ <code>Buffer</code>
        * [.toHex()](#Bitfield+toHex) ⇒ <code>Buffer</code>
        * [.toString()](#Bitfield+toString) ⇒ <code>Buffer</code>
    * _static_
        * [.fromBigInt(bigint, opts)](#Bitfield.fromBigInt) ⇒ [<code>Bitfield</code>](#Bitfield)
        * [.fromHex(hex, opts)](#Bitfield.fromHex) ⇒ [<code>Bitfield</code>](#Bitfield)
        * [.fromString(string, opts)](#Bitfield.fromString) ⇒ [<code>Bitfield</code>](#Bitfield)

<a name="new_Bitfield_new"></a>

### new Bitfield(data, opts)
Create a Bitfield.


| Param | Default | Description |
| --- | --- | --- |
| data | <code>0</code> | Can be a Node.js Buffer, ArrayBuffer, typed array, numeric array, or a number representing the amount of bytes in the Bitfield |
| opts |  | Other options |

<a name="Bitfield+get"></a>

### bitfield.get(i) ⇒ <code>boolean</code>
Check if a bit is set.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>boolean</code> - True if the bit is set  
**Access**: public  

| Param | Description |
| --- | --- |
| i | Bit index |

<a name="Bitfield+set"></a>

### bitfield.set(i, b) ⇒ <code>void</code>
Set a bit.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Access**: public  

| Param | Default | Description |
| --- | --- | --- |
| i |  | Bit index |
| b | <code>true</code> | Bit value |

<a name="Bitfield+toBuffer"></a>

### bitfield.toBuffer() ⇒ <code>Buffer</code>
Convert Bitfield into a Buffer.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>Buffer</code> - Node.js Buffer  
**Access**: public  
<a name="Bitfield+toBigInt"></a>

### bitfield.toBigInt() ⇒ <code>Buffer</code>
Convert Bitfield into a BigInt.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>Buffer</code> - Node.js BigInt  
**Access**: public  
<a name="Bitfield+toHex"></a>

### bitfield.toHex() ⇒ <code>Buffer</code>
Convert Bitfield into a hexadecimal string.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>Buffer</code> - Node.js Buffer  
**Access**: public  
<a name="Bitfield+toString"></a>

### bitfield.toString() ⇒ <code>Buffer</code>
Convert Bitfield into a UTF-8 encoded string.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>Buffer</code> - Node.js Buffer  
**Access**: public  
<a name="Bitfield.fromBigInt"></a>

### Bitfield.fromBigInt(bigint, opts) ⇒ [<code>Bitfield</code>](#Bitfield)
Create a Bitfield from a BigInt.

**Kind**: static method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: [<code>Bitfield</code>](#Bitfield) - Bitfield  
**Access**: public  

| Param | Description |
| --- | --- |
| bigint | BigInt |
| opts | Bitfield options |

<a name="Bitfield.fromHex"></a>

### Bitfield.fromHex(hex, opts) ⇒ [<code>Bitfield</code>](#Bitfield)
Create a Bitfield from a hexadecimal string.

**Kind**: static method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: [<code>Bitfield</code>](#Bitfield) - Bitfield  
**Access**: public  

| Param | Description |
| --- | --- |
| hex | Hexadecimal string |
| opts | Bitfield options |

<a name="Bitfield.fromString"></a>

### Bitfield.fromString(string, opts) ⇒ [<code>Bitfield</code>](#Bitfield)
Create a Bitfield from a UTF-8 encoded string.

**Kind**: static method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: [<code>Bitfield</code>](#Bitfield) - Bitfield  
**Access**: public  

| Param | Description |
| --- | --- |
| string | UTF-8 encoded string. |
| opts | Bitfield options |

<a name="getByteSize"></a>

## getByteSize(num) ⇒ <code>number</code>
Get byte size of a number.

**Kind**: global function  
**Returns**: <code>number</code> - Byte size  

| Param | Description |
| --- | --- |
| num | Number |

<a name="toBuffer"></a>

## toBuffer(ab) ⇒ <code>Buffer</code>
Convert ArrayBuffer to Buffer.

**Kind**: global function  
**Returns**: <code>Buffer</code> - Converted Buffer  

| Param | Description |
| --- | --- |
| ab | ArrayBuffer |

