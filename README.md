# @lucid-softworks/async-iterable-to-array

Materialize every value from a synchronous or asynchronous iterable into an
array while preserving source order.

```ts
import { asyncIterableToArray } from "@lucid-softworks/async-iterable-to-array";

async function* values(): AsyncGenerator<number> {
  yield 1;
  yield 2;
  yield 3;
}

const array = await asyncIterableToArray(values());
```
