# next-instance
> Create an instance without new.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-instance
```

## usage
```js
import '@feizheng/next-instance';

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const p1 = nx.instance(Person, 'fei', 100);
// Person { name: 'fei', age: 100 }
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-instance/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-instance
[version-url]: https://npmjs.org/package/@feizheng/next-instance

[license-image]: https://img.shields.io/npm/l/@feizheng/next-instance
[license-url]: https://github.com/afeiship/next-instance/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-instance
[size-url]: https://github.com/afeiship/next-instance/blob/master/dist/next-instance.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-instance
[download-url]: https://www.npmjs.com/package/@feizheng/next-instance
