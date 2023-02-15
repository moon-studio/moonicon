import { expect, it, describe } from 'vitest'
import { positiveNumberRegex, cssSizeUnitRegex } from '../src/regex'

describe('test regex', () => {
  it('test positive number', () => {
    expect(positiveNumberRegex.test('0')).toBe(true)
    expect(positiveNumberRegex.test('0.1')).toBe(true)
    expect(positiveNumberRegex.test('123')).toBe(true)

    expect(positiveNumberRegex.test('0.1.2')).toBe(false)
    expect(positiveNumberRegex.test('123a')).toBe(false)
    expect(positiveNumberRegex.test('a123')).toBe(false)
    expect(positiveNumberRegex.test(',123')).toBe(false)
    expect(positiveNumberRegex.test('123,')).toBe(false)
  })

  it('test css size unit', () => {
    expect(cssSizeUnitRegex.test('0')).toBe(true)
    expect(cssSizeUnitRegex.test('0.1')).toBe(true)
    expect(cssSizeUnitRegex.test('123')).toBe(true)
    expect(cssSizeUnitRegex.test('123em')).toBe(true)
    expect(cssSizeUnitRegex.test('123ex')).toBe(true)
    expect(cssSizeUnitRegex.test('123ch')).toBe(true)
    expect(cssSizeUnitRegex.test('123rem')).toBe(true)
    expect(cssSizeUnitRegex.test('123vw')).toBe(true)
    expect(cssSizeUnitRegex.test('123vh')).toBe(true)
    expect(cssSizeUnitRegex.test('123vmin')).toBe(true)
    expect(cssSizeUnitRegex.test('123vmax')).toBe(true)
    expect(cssSizeUnitRegex.test('123%')).toBe(true)
    expect(cssSizeUnitRegex.test('123px')).toBe(true)

    expect(cssSizeUnitRegex.test('0.1.2')).toBe(false)
    expect(cssSizeUnitRegex.test('123a')).toBe(false)
    expect(cssSizeUnitRegex.test('a123')).toBe(false)
    expect(cssSizeUnitRegex.test(',123')).toBe(false)
    expect(cssSizeUnitRegex.test('123,')).toBe(false)
  })
})
