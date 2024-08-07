import { describe, expect, it } from "vitest";
import { cpfValidator } from "./cpfValidator";

describe('cpfValidator', () => {
  it('should return false for invalid CPF', () => {
    expect(cpfValidator('12345678922')).toBe(false);
    expect(cpfValidator('98765432199')).toBe(false);
  });

  it('should return true for valid CPF', () => {
    expect(cpfValidator('44757851898')).toBe(true);
    expect(cpfValidator('65067595000')).toBe(true);
  });
})