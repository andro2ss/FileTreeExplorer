import { describe, it, expect } from 'vitest'
import { encodePath, decodePath } from './pathUtils'

describe('encodePath', () => {
  it('joins segments with /', () => {
    expect(encodePath(['root', 'src', 'index.ts'])).toBe('root/src/index.ts')
  })

  it('encodes special characters in each segment', () => {
    expect(encodePath(['my folder', 'file name.ts'])).toBe('my%20folder/file%20name.ts')
    expect(encodePath(['src', 'a&b'])).toBe('src/a%26b')
  })

  it('handles single segment', () => {
    expect(encodePath(['root'])).toBe('root')
  })
})

describe('decodePath', () => {
  it('splits on / and decodes each segment', () => {
    expect(decodePath('root/src/index.ts')).toEqual(['root', 'src', 'index.ts'])
  })

  it('decodes encoded characters', () => {
    expect(decodePath('my%20folder/file%20name.ts')).toEqual(['my folder', 'file name.ts'])
  })

  it('round-trips through encode → decode', () => {
    const segments = ['root', 'src components', 'Button & Icon.tsx']
    expect(decodePath(encodePath(segments))).toEqual(segments)
  })
})
