// 扩展运算符（spread）:将一个数组转为用逗号分隔的参数序列
//将一个数组，变为参数序列
console.log(...[1, 2, 3])
function add(x, y) {
    return x + y;
}
const numbers = [4, 38];
console.log(add(...numbers)); // 42

// 替代函数的 apply 方法
// ES5 的写法
function f(x, y, z) {
}
var args1 = [0, 1, 2];
f.apply(null, args1);

// ES6的写法
function f(x, y, z) {
}
let args2 = [0, 1, 2];
f(...args2);
// ES5 的写法
Math.max.apply(null, [14, 3, 77])
// ES6 的写法
Math.max(...[14, 3, 77])


// 复制数组
// const a1 = [1, 2];
// 写法一
// const a2 = [...a1];
// 写法二
// const [...a2] = a1;

// 合并数组
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];
// ES5 的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]
// ES6 的合并数组
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]

// 与解构赋值结合
// const [first, ...rest] = [1, 2, 3, 4, 5];
// first // 1
// rest  // [2, 3, 4, 5]

// const [first, ...rest] = [];
// first // undefined
// rest  // []

// const [first, ...rest] = ["foo"];
// first  // "foo"
// rest   // []

// 字符串
console.log([...'hello']);
// [ "h", "e", "l", "l", "o" ]

// 实现了 Iterator 接口的对象
// NodeList对象。它不是数组，而是一个类似数组的对象;将其转为真正的数组，原因就在于NodeList对象实现了 Iterator 。

// 扩展运算符内部调用的是数据结构的 Iterator 接口，因此只要具有 Iterator 接口的对象，都可以使用扩展运算符
let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);
let arr = [...map.keys()]; // [1, 2, 3]
console.log(arr);

// 变量go是一个 Generator 函数，执行后返回的是一个遍历器对象，对这个遍历器对象执行扩展运算符，就会将内部遍历得到的值，转为一个数组
const go = function*(){
    yield 1;
    yield 2;
    yield 3;
};
[...go()] // [1, 2, 3]
console.log(...go());

/**
 * Array.from():将对象转变为数组
 * 1、类似数组的对象（array-like object）
 * 2、可遍历（iterable）的对象
 */
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
// ES5的写法
var array01 = [].slice.call(arrayLike); // ['a', 'b', 'c']
console.log(array01);
// ES6的写法
let array02 = Array.from(arrayLike); // ['a', 'b', 'c']
console.log(array02);

console.log(Array.from('hello'));
// ['h', 'e', 'l', 'l', 'o']
let namesSet = new Set(['a', 'b'])
console.log(Array.from(namesSet)); // ['a', 'b']

/**
 * Array.of方法用于将一组值，转换为数组
 * Array.of基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载
 */
console.log(Array.of(3, 11, 8));

// 数组实例的 copyWithin():将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组
// 数组实例的 find() 和 findIndex()
console.log([1, -4, -5, 10].find((n) => n < 0));//返回第一个匹配的结果

// 数组实例的 fill()
console.log(['a', 'b', 'c'].fill(7));// [7, 7, 7]
console.log(new Array(3).fill(7));// [7, 7, 7]
let arr6 = new Array(3).fill([]);
arr6[0].push(5);
console.log(arr6);//[ [ 5 ], [ 5 ], [ 5 ] ]


/**
 * 数组实例的
 * entries():键值对的遍历
 * keys():键名的遍历
 * values():键值的遍历
 */ 

// 数组实例的 includes():某个数组是否包含给定的值
console.log([1, 2, 3].includes(2));

// 数组实例的 flat()，flatMap():将嵌套的数组“拉平”，变成一维的数组
console.log([1, 2, [3, 4]].flat());// [1, 2, 3, 4]
// 对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()）,然后对返回值组成的数组执行flat()方法。
console.log([2, 3, 4].flatMap((x) => [x, x * 2]));

// ES6 则是明确将空位转为undefined

// Array.prototype.sort() 的排序稳定性

































































