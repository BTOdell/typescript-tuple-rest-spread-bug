# typescript-tuple-rest-spread-bug
> Compile error bug related to spreading tuple types for rest parameters

This bug is related to the features described in this (merged) pull request:
https://github.com/Microsoft/TypeScript/pull/24897

### Description

This issue was discovered when implementing a type-safe event emitter class.

 - `index.ts` defines an unimplemented `EventEmitter` that includes 4 functions which should be equivalent (except for the `eventName` parameter).
 - `test.ts` consumes the `EventEmitter` class and calls the various functions to test type-safety.

An `Events` interface is used to define the supported events by mapping the event name to a tuple type for the parameters of the event listener.
This interface is passed through a generic parameter `E` in the `Test` class and then passed through a generic parameter `E` in the `EventEmitter` class.

The unexpected behavior occurs on lines 29 and 33 (in `test.ts`). Despite the events producing two boolean values, 
a listener function should be able to define 1 parameter and only have access to the first parameter passed.

The unexpected behavior only occurs when the `Events` interface type has to pass through 2 generic class parameters.
If line 14 is uncommented, and line 13 is commented then all unexpected behavior is resolved.
