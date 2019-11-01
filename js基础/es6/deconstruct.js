// 按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）
// let a = 1;
// let b = 2;
// let c = 3;
let [a, b, c] = [1, 2, 3];
console.log(a,b,c);
// 如果解构不成功，变量的值就等于undefined。
// 事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值
// let [x, y, z] = new Set(['a', 'b', 'c']);
// console.log(x,y,z);

// 解构赋值允许指定默认值
// let [x, y = 'b'] = ['a', undefined];
// console.log(x,y);

// 只有当一个数组成员严格等于undefined，默认值才会生效
// let [z = 1] = [undefined];//1
let [z = 1] = [null];//null

// 将现有对象的方法，赋值到某个变量
// let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
// let { log, sin, cos } = Math;

// 变量名与属性名不一致
// let obj = { first: 'hello', last: 'world' };
// let { first: f, last: l } = obj;

// 嵌套形式
// let obj = {
//     p: [
//       'Hello',
//       { y: 'World' }
//     ]
// };
// let { p: [x, { y }] } = obj;
// console.log(x,y);
let obj = {};
let arr = [];
({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
console.log(obj,arr);

// 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错
let {toString: s1} = 123;
console.log(s1 === Number.prototype.toString );// true
let {toString: s2} = true;
console.log(s2 === Boolean.prototype.toString); // true
// let { prop: x } = undefined; // TypeError
// let { prop: y } = null; // TypeError

/**
 * 用途
 */

// 交换变量的值
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x,y);
// 从函数返回多个值
function example() {
    return {
      foo: 1,
      bar: 2
    };
}
let { foo, bar } = example();
console.log(foo,bar);
// 函数参数的定义
function f({x, y, z}) { console.log(x,y,z); }
f({z: 3, y: 2, x: 1});
// 提取 JSON 数据
let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};
let { id, status, data: number } = jsonData;
console.log(id, status, number);
// 遍历 Map 结构
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// 输入模块的指定方法
// const { SourceMapConsumer, SourceNode } = require("source-map");



















































