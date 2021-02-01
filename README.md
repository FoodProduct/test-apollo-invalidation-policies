# test-apollo-invalidation-policies

This is a test repo intended to demonstrate how using some `@apollo/client` files in a node context throw Errors.

### Environment setup
node v14, npm v6 (other versions untested)

`npm i`
`npm run build`
`npm run start`

### Error encountered
```
[redacted]/test-apollo-invalidation-policies/node_modules/@apollo/client/cache/inmemory/helpers.js:1
import { isReference, isField, DeepMerger, resultKeyNameFromField, shouldInclude, } from "../../utilities/index.js";
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at wrapSafe (internal/modules/cjs/loader.js:979:16)
    at Module._compile (internal/modules/cjs/loader.js:1027:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Module.require (internal/modules/cjs/loader.js:952:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at Object.<anonymous> ([redacted]]/test-apollo-invalidation-policies/routes/index.js:6:34)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
```
