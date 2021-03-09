import * as conversion from 'bigint-conversion'

/**
 * Get byte size of a number.
 *
 * @param {number} number Number
 *
 * @returns {number} Byte size
 */
export function getByteSize(number: number): number {
    let out = number >> 3
    if (number % 8 !== 0) out++
    return out
}

/**
 * Convert ArrayBuffer to Buffer.
 *
 * @param {ArrayBuffer} ab ArrayBuffer
 *
 * @returns {Buffer} Converted Buffer
 */
export function toBuffer(ab: ArrayBuffer): Buffer {
    const buffer = Buffer.alloc(ab.byteLength)
    const view = new Uint8Array(ab)
    for (let i = 0; i < buffer.length; i++) {
        buffer[i] = view[i]
    }
    return buffer
}

/**
 * Bitfield data.
 *
 * @typedef {Buffer | ArrayBuffer | TypedArray | number} BitfieldData
 */
export type BitfieldData = Buffer | ArrayBuffer | TypedArray | number

/**
 * Bitfield options.
 *
 * @typedef {Object} BitfieldOptions
 * @property {number} [grow] If you set an index that is out of bounds, the Bitfield will automatically grow to this value.
 */
export type BitfieldOptions = {
    /**
     * If you set an index that is out of bounds, the Bitfield will
     * automatically grow to this value. If you want the Bitfield
     * to infinitely grow, set this to Infinity.
     */
    grow?: number
}

/**
 * Represents any or all typed arrays in Node.
 *
 * @typedef {Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array} TypedArray
 */
export type TypedArray = Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array

/**
 * Represents a Bitfield.
 */
export class Bitfield {
    /**
     * Value of the grow option.
     *
     * @public
     *
     * @type {number}
     */
    public grow: number

    /**
     * Underlying typed array. Changing this manually
     * may break the Bitfield or cause unexpected bugs.
     *
     * @public
     *
     * @type {TypedArray}
     */
    public array: TypedArray

    /**
     * Create a Bitfield.
     *
     * @param {BitfieldData} data Can be a Node.js Buffer, ArrayBuffer, typed array, numeric array, or a number representing the amount of bytes in the Bitfield
     * @param {BitfieldOptions} opts Other options
     */
    constructor(data: BitfieldData = 0, opts?: BitfieldOptions) {
        const grow = opts != null && opts.grow
        this.grow = (grow && isFinite(grow) && getByteSize(grow)) || grow || 0
        this.array =
            typeof data === 'number'
                ? new Uint8Array(getByteSize(data))
                : data instanceof ArrayBuffer
                ? toBuffer(data)
                : data
    }

    /**
     * Check if a bit is set.
     *
     * @public
     *
     * @param {number} index Bit index
     *
     * @returns {boolean} True if the bit is set
     */
    public get(index: number): boolean {
        const i = index >> 3
        return i < this.array.length && !!(this.array[i] & (128 >> index % 8))
    }

    /**
     * Set a bit.
     *
     * @public
     *
     * @param {number} index Bit index
     * @param {boolean | number} value Bit value
     *
     * @returns {void}
     */
    public set(index: number, value: boolean | number = true): void {
        const i = index >> 3
        if (value) {
            if (this.array.length < i + 1) {
                const length = Math.max(i + 1, Math.min(2 * this.array.length, this.grow))
                if (length <= this.grow) {
                    const newArray = new Uint8Array(length)
                    newArray.set(this.array)
                    this.array = newArray
                }
            }
            this.array[i] |= 128 >> index % 8
        } else if (i < this.array.length) {
            this.array[i] &= ~(128 >> index % 8)
        }
    }

    /**
     * Reset all bits.
     *
     * @public
     *
     * @returns {void}
     */
    public clear(): void {
        const size = this.array.length * 8
        for (let i = 0; i < size; i++) this.set(i, false)
    }

    /**
     * Convert Bitfield into a Buffer.
     *
     * @public
     *
     * @returns {Buffer} Node.js Buffer
     */
    public toBuffer(): Buffer {
        return Buffer.from(this.array)
    }

    /**
     * Convert Bitfield into a BigInt.
     *
     * @public
     *
     * @returns {BigInt} Node.js BigInt
     */
    public toBigInt(): BigInt {
        return conversion.bufToBigint(this.array)
    }

    /**
     * Convert Bitfield into a hexadecimal string.
     *
     * @public
     *
     * @returns {string} Hexadecimal string
     */
    public toHex(): string {
        return conversion.bufToHex(this.array)
    }

    /**
     * Convert Bitfield into a UTF-8 encoded string.
     *
     * @public
     *
     * @returns {string} UTF-8 encoded string
     */
    public toString(): string {
        return conversion.bufToText(this.array)
    }

    /**
     * Create a Bitfield from a Buffer or ArrayBuffer.
     *
     * @public
     * @static
     *
     * @param {Buffer | ArrayBuffer} buffer Buffer
     * @param {BitfieldOptions} opts Bitfield options
     *
     * @returns {Bitfield} Bitfield
     */
    public static fromBuffer(buffer: Buffer | ArrayBuffer, opts?: BitfieldOptions): Bitfield {
        return new Bitfield(buffer, opts)
    }

    /**
     * Create a Bitfield from a BigInt.
     *
     * @public
     * @static
     *
     * @param {bigint} bigint BigInt
     * @param {BitfieldOptions} opts Bitfield options
     *
     * @returns {Bitfield} Bitfield
     */
    public static fromBigInt(bigint: bigint, opts?: BitfieldOptions): Bitfield {
        return new Bitfield(conversion.bigintToBuf(bigint), opts)
    }

    /**
     * Create a Bitfield from a hexadecimal string.
     *
     * @public
     * @static
     *
     * @param {string} hex Hexadecimal string
     * @param {BitfieldOptions} opts Bitfield options
     *
     * @returns {Bitfield} Bitfield
     */
    public static fromHex(hex: string, opts?: BitfieldOptions): Bitfield {
        return new Bitfield(conversion.hexToBuf(hex))
    }

    /**
     * Create a Bitfield from a UTF-8 encoded string.
     *
     * @public
     * @static
     *
     * @param {string} string UTF-8 encoded string.
     * @param {BitfieldOptions} opts Bitfield options
     *
     * @returns {Bitfield} Bitfield
     */
    public static fromString(string: string, opts?: BitfieldOptions): Bitfield {
        return new Bitfield(conversion.textToBuf(string), opts)
    }
}
