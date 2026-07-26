import { describe, expect, it } from "vitest";

import { asyncIterableToArray } from "../src/index.js";

async function* asyncValues(): AsyncGenerator<number, void, undefined> {
  yield 1;
  yield 2;
}

describe("asyncIterableToArray", () => {
  it("materializes asynchronous values in source order", async () => {
    await expect(asyncIterableToArray(asyncValues())).resolves.toEqual([1, 2]);
  });

  it("accepts synchronous and empty sources", async () => {
    await expect(asyncIterableToArray(new Set(["a", "b"]))).resolves.toEqual([
      "a",
      "b",
    ]);
    await expect(asyncIterableToArray([])).resolves.toEqual([]);
  });
});
