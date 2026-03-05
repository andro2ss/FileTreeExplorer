import { describe, it, expect } from 'vitest'
import { formatSize } from './formatSize'

describe('formatSize', () => {
  it('formats bytes', () => {
    expect(formatSize(0)).toBe('0 B')
    expect(formatSize(512)).toBe('512 B')
    expect(formatSize(1023)).toBe('1023 B')
  })

  it('formats kilobytes', () => {
    expect(formatSize(1024)).toBe('1.00 KB')
    expect(formatSize(2048)).toBe('2.00 KB')
    expect(formatSize(1536)).toBe('1.50 KB')
  })

  it('formats megabytes', () => {
    expect(formatSize(1024 * 1024)).toBe('1.00 MB')
    expect(formatSize(1500000)).toBe('1.43 MB')
  })

  it('uses MB for values above 1 GB (no separate GB unit)', () => {
    expect(formatSize(1024 * 1024 * 1024)).toBe('1024.00 MB')
  })
})
