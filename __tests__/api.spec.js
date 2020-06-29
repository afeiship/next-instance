const nx = require('@feizheng/next-js-core2');
require('../src/next-instance');

describe('api.basic test', () => {
  test('nx.instance should create an instance', function () {
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
    }

    const p1 = nx.instance(Person, 'fei', 100);
    console.log(p1);
    expect(p1 instanceof Person).toBe(true);
    expect(p1.name).toBe('fei');
    expect(p1.age).toBe(100);
  });
});
