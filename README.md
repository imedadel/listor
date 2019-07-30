# listor

> Turn any list of items into a sentence.

## Installing

```sh
# npm
npm install listor

# yarn
yarn add listor
```

## Usage

```js
const listor = require('listor')

listor([1, 1, 'java'])
//=> '1, 1, and java'
```

## API
### listor(words: any[], oxford?: boolean, comma?: string, separator?: string): string
#### words
Type: `any[]`

Example: `[1, 1, 'java']`

#### oxford
Type: `boolean`

Default: `true`

#### comma
Type: `string`

Default: `,`

#### separator
Type: `string`

Default: `and`
