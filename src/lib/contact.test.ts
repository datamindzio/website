import { describe, it, expect } from 'vitest'
import { validateContact, buildMailto } from './contact'

describe('validateContact', () => {
  it('flags empty name', () => {
    expect(validateContact({ name: '  ', email: 'a@b.co', message: 'hi' }).errors.name).toBeTruthy()
  })
  it('flags invalid email', () => {
    expect(validateContact({ name: 'A', email: 'nope', message: 'hi' }).errors.email).toBeTruthy()
  })
  it('flags empty message', () => {
    expect(validateContact({ name: 'A', email: 'a@b.co', message: '  ' }).errors.message).toBeTruthy()
  })
  it('passes a well-formed submission', () => {
    const r = validateContact({ name: 'Ada', email: 'ada@ex.com', message: 'Need a pipeline.' })
    expect(r.valid).toBe(true)
    expect(r.errors).toEqual({})
  })
})

describe('buildMailto', () => {
  it('targets contact@datamindz.io and encodes fields', () => {
    const s = buildMailto({ name: 'Ada Lovelace', email: 'ada@ex.com', message: 'Hello world' })
    expect(s.startsWith('mailto:contact@datamindz.io?')).toBe(true)
    expect(s).toContain(encodeURIComponent('Ada Lovelace'))
    expect(s).toContain(encodeURIComponent('ada@ex.com'))
    expect(s).toContain(encodeURIComponent('Hello world'))
  })
})
