// import { expect, it } from 'vitest'
import { formatSize } from '../src/format-size'

it('test format size', () => {
  expect(formatSize(12)).toBe('12px')
  expect(formatSize(0.12)).toBe('0.12px')
  expect(formatSize('12')).toBe('12px')
  expect(formatSize('12em')).toBe('12em')
  expect(formatSize('12ex')).toBe('12ex')
  expect(formatSize('12ch')).toBe('12ch')
  expect(formatSize('12rem')).toBe('12rem')
  expect(formatSize('12vw')).toBe('12vw')
  expect(formatSize('12vh')).toBe('12vh')
  expect(formatSize('12vmin')).toBe('12vmin')
  expect(formatSize('12vmax')).toBe('12vmax')
  expect(formatSize('12%')).toBe('12%')
  expect(formatSize('12px')).toBe('12px')

  expect(formatSize('12px1')).toBe(undefined)
  expect(formatSize('0.1.2')).toBe(undefined)
  expect(formatSize('px12')).toBe(undefined)
  expect(formatSize('a12pxa')).toBe(undefined)
})
