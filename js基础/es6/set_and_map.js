const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
for (let i of s) {
  console.log(i);
}

/**
    Set 结构的实例有以下属性。

    Set.prototype.constructor：构造函数，默认就是Set函数。
    Set.prototype.size：返回Set实例的成员总数。
    Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。

    Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
    Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
    Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
    Set.prototype.clear()：清除所有成员，没有返回值。
*/
// Array.from方法可以将 Set 结构转为数组。
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
console.log(array);

/**
 * 遍历操作
    Set 结构的实例有四个遍历方法，可以用于遍历成员。
    Set.prototype.keys()：返回键名的遍历器
    Set.prototype.values()：返回键值的遍历器
    Set.prototype.entries()：返回键值对的遍历器
    Set.prototype.forEach()：使用回调函数遍历每个成员
 */

/**
 * WeakSet:只能是对象
    WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
    WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
    WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中
 */
const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);
console.log(ws);

/**
 *  Map
 * size 属性
    Map.prototype.keys()：返回键名的遍历器。
    Map.prototype.values()：返回键值的遍历器。
    Map.prototype.entries()：返回所有成员的遍历器。
    Map.prototype.forEach()：遍历 Map 的所有成员。
 */
const map = new Map();
map.set('foo', true);
map.set('bar', false);
console.log(map.has('foo'));
console.log(map.get('foo'));
console.log(map.size);// 2

/**
 * 与其他数据结构的互相转换
 */
// Map 转为数组
const myMap = new Map()
  .set(true, 7)
  .set({foo: 3}, ['abc']);
console.log([...myMap]);

// 数组 转为 Map
const myMap2 = new Map([
    [true, 7],
    [{foo: 3}, ['abc']]
  ]);
console.log(myMap2);

// Map 转为对象
function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
      obj[k] = v;
    }
    return obj;
}
const myMap3 = new Map()
.set('yes', true)
.set('no', false);
console.log(strMapToObj(myMap3));// { yes: true, no: false }

// 对象转为 Map
function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
      strMap.set(k, obj[k]);
    }
    return strMap;
}
console.log(objToStrMap({yes: true, no: false}));//Map { 'yes' => true, 'no' => false }

// Map 转为 JSON
function strMapToJson(strMap) {
    return JSON.stringify(strMapToObj(strMap));
}
let myMap4 = new Map().set('yes', true).set('no', false);
console.log(strMapToJson(myMap4));//{"yes":true,"no":false}

// JSON 转为 Map
function jsonToStrMap(jsonStr) {
    return objToStrMap(JSON.parse(jsonStr));
}
console.log(jsonToStrMap('{"yes": true, "no": false}'));//Map { 'yes' => true, 'no' => false }

function jsonToMap(jsonStr) {
    return new Map(JSON.parse(jsonStr));
}
console.log(jsonToMap('[[true,7],[{"foo":3},["abc"]]]'));//Map { true => 7, { foo: 3 } => [ 'abc' ] }


/**
 * WeakMap
    * 只接受对象作为键名
    * WeakMap的键名所指向的对象，不计入垃圾回收机制
 */









