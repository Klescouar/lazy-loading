import { IMAGE_URL, generateImageUrlArray } from "../images";
import { describe, it, expect } from "vitest";

describe("generateImageUrlArray", () => {
  it("should generate an array of 50 identical image URLs", () => {
    const result = generateImageUrlArray();
    expect(result).toHaveLength(50);
    expect(result.every((url) => url === IMAGE_URL)).toBe(true);
  });
});
