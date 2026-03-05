export function encodePath(segments: string[]): string {
  return segments.map(encodeURIComponent).join('/')
}

export function decodePath(encoded: string): string[] {
  return encoded.split('/').map(decodeURIComponent)
}
