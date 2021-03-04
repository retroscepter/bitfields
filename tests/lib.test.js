
const { Bitfield } = require('../lib')

const bitfield = new Bitfield(64)

const BIGINT_RESULT = BigInt(1441151880758558720)
const HEX_RESULT = '1400000000000000'

test('set bits', () => {
    bitfield.set(1)
    bitfield.set(2, 1)
    bitfield.set(3, true)
    bitfield.set(5, true)
    expect(bitfield.get(1)).toBe(true)
    expect(bitfield.get(2)).toBe(true)
    expect(bitfield.get(3)).toBe(true)
    expect(bitfield.get(4)).toBe(false)
    expect(bitfield.get(5)).toBe(true)
})

test('unset bits', () => {
    bitfield.set(1, 0)
    bitfield.set(2, false)
    expect(bitfield.get(1)).toBe(false)
    expect(bitfield.get(2)).toBe(false)
    expect(bitfield.get(3)).toBe(true)
    expect(bitfield.get(4)).toBe(false)
    expect(bitfield.get(5)).toBe(true)
})

test('convert to bigint', () => {
    expect(bitfield.toBigInt()).toBe(BIGINT_RESULT)
})

test('convert to hexadecimal', () => {
    expect(bitfield.toHex()).toBe(HEX_RESULT)
})

test('clear', () => {
    bitfield.clear()
})
