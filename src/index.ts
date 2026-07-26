/** Materializes all values from a sync or async iterable into an array. */
export async function asyncIterableToArray<TValue>(
  values: AsyncIterable<TValue> | Iterable<TValue>,
): Promise<TValue[]> {
  const output: TValue[] = [];

  for await (const value of values) {
    output.push(value);
  }

  return output;
}
