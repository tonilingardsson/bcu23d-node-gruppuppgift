import { describe, it, expect } from 'vitest';
import { createHash } from '../src/utilities/crypto-lib.mjs';

describe('Hashing', () => {
  it('should produce a has with supplied arguments', () => {
    expect(createHash('arbitrary', 'data', 'to', 'hash')).toEqual(createHash('arbitrary', 'data', 'to', 'hash'));
  });

  it('should produce a hash with supplied arguments in any order', () => {
    expect(createHash('arbitrary', 'data', 'to', 'hash')).toEqual(createHash('hash', 'to', 'data', 'arbitrary'));
  });
});